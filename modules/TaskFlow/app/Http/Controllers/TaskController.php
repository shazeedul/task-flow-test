<?php

namespace Modules\TaskFlow\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Modules\TaskFlow\DataTables\MemberTaskDataTable;
use Modules\TaskFlow\DataTables\TaskDataTable;
use Modules\TaskFlow\Models\Project;
use Modules\TaskFlow\Models\Task;

class TaskController extends Controller
{
    /**
     * Construct
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('permission:task_management')->except(['memberTask', 'memberTaskShow', 'memberTaskComment', 'memberTaskCommentStore', 'statusUpdate']);
        $this->middleware('permission:create_task')->only(['create', 'store']);
        $this->middleware('permission:edit_task')->only(['edit', 'update']);
        $this->middleware('permission:delete_task')->only(['destroy']);
        $this->middleware('permission:member_task')->only(['memberTask']);
        $this->middleware('permission:comment_task')->only(['memberTaskComment', 'memberTaskCommentStore']);
        $this->middleware('permission:update_task_status')->only(['statusUpdate']);
        $this->middleware('request:ajax', ['only' => ['destroy', 'statusUpdate']]);
        \cs_set('theme', [
            'title' => 'Task Lists',
            'description' => 'Display a listing of tasks in Database.',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Task Lists',
                    'link' => false,
                ],
            ],
            'rprefix' => 'admin.task',
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(TaskDataTable $dataTable)
    {
        return $dataTable->render('taskflow::task.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        \cs_set('theme', [
            'title' => 'Assign Task',
            'description' => 'Create a new task in Database.',
        ]);

        return view('taskflow::task.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'priority' => 'required|string',
            'status' => 'required|string',
            'assigned_to' => 'required|exists:users,id',
            'attachment' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $task = Task::create($data);

        if ($request->hasFile('attachment')) {
            foreach ($request->file('attachment') as $file) {
                $attachmentPath = $file->store('task_attachments', 'public');
                $task->attachments()->create([
                    'path' => $attachmentPath,
                    'name' => $file->getClientOriginalName(),
                ]);
            }
        }

        return redirect()->route('admin.task.index')->with('success', 'Task created successfully');
    }

    /**
     * Show the specified resource.
     */
    public function show(Task $task)
    {
        return view('taskflow::task.show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        \cs_set('theme', [
            'title' => 'Edit Task',
            'description' => 'Edit a task in Database.',
        ]);

        $task->load('attachments', 'project', 'assignedUser');

        return view('taskflow::task.edit', [
            'item' => $task,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task): JsonResponse
    {
        $data = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'priority' => 'required|string',
            'status' => 'required|string',
            'assigned_to' => 'required|exists:users,id',
            'attachment' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $task->update($data);

        // if ($request->hasFile('attachment')) {
        //     $task->attachments()->delete();
        //     foreach ($request->file('attachment') as $file) {
        //         $attachmentPath = $file->store('task_attachments', 'public');
        //         $task->attachments()->create([
        //             'path' => $attachmentPath,
        //             'name' => $file->getClientOriginalName(),
        //         ]);
        //     }
        // }

        return response()->success($task, 'Task updated successfully', 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();

        return response()->success($task, 'Task deleted successfully', 200);
    }

    /**
     * Status Update
     */
    public function statusUpdate(Request $request, Task $task): JsonResponse
    {
        $task->update([
            'status' => $request->status,
        ]);

        return response()->success($task, 'Task status updated successfully', 200);
    }

    /**
     * Get all projects
     */
    public function getProjects(Request $request)
    {
        $items = Project::when($request->search, function ($query, $search) {
            return $query->where('title', 'like', '%'.$search.'%');
        })->select(['id', DB::raw('title as text')])
            ->paginate(10);

        return response()->json($items);
    }

    /**
     * Get all users
     */
    public function getUsers(Request $request)
    {
        $items = User::role('Team Member')
            ->when($request->search, function ($query, $search) {
                return $query->where('name', 'like', '%'.$search.'%');
            })->select(['id', DB::raw('name as text')])
            ->paginate(10);

        return response()->json($items);
    }

    /**
     * Member Task
     */
    public function memberTask(MemberTaskDataTable $dataTable)
    {
        \cs_set('theme', [
            'title' => 'Member Task',
            'description' => 'Display a listing of tasks in Database.',
            'member_rprefix' => 'admin.member.task',
        ]);

        return $dataTable->render('taskflow::member.task.index');
    }

    /**
     * Member Task Show
     */
    public function memberTaskShow(Task $task)
    {
        \cs_set('theme', [
            'title' => 'Task Details',
            'description' => 'Display a task details in Database.',
        ]);

        $task->load('attachments', 'project', 'assignedUser');

        return view('taskflow::member.task.show', [
            'item' => $task,
        ]);
    }

    /**
     * Member Task Comments
     */
    public function memberTaskComment(Task $task)
    {
        \cs_set('theme', [
            'title' => 'Task Comments'.' - '.$task->title,
            'description' => 'Display a task comments in Database.',
            'member_rprefix' => 'admin.member.task',
        ]);

        $task->load('comments');

        $last10Comments = $task->comments()->orderBy('created_at', 'desc')->limit(10)->get();

        return view('taskflow::member.task.comment', [
            'item' => $task,
            'last10Comments' => $last10Comments,
        ]);
    }

    /**
     * Member Task Comment Store
     */
    public function memberTaskCommentStore(Request $request, Task $task)
    {
        $data = $request->validate([
            'comment' => 'required|string',
        ]);

        $task->comments()->create([
            'comment' => $data['comment'],
            'user_id' => auth()->user()->id,
        ]);

        return response()->success($task, 'Task comment created successfully', 200);
    }
}
