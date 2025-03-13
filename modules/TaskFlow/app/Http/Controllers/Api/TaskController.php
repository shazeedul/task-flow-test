<?php

namespace Modules\TaskFlow\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Modules\TaskFlow\Models\Project;
use Modules\TaskFlow\Models\Task;
use Modules\TaskFlow\Transformers\TaskResource;

class TaskController extends Controller
{
    /**
     * Construct
     */
    public function __construct()
    {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $collection = Task::with('project');

        // Paginate the collection
        $collection = $collection->paginate($request->per_page ?? 10);
        // format pagination data
        $pagination = getPaginationMeta($collection, exclude: ['data', 'first_page_url', 'last_page_url', 'links', 'next_page_url', 'prev_page_url']);
        // transform the collection using TaskResource
        $collection = TaskResource::collection($collection);

        // return the response
        return response()->success($collection, 'Tasks fetched successfully', 200, $pagination);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
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

        return response()->success($task, 'Task created successfully', 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        $data = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'priority' => 'required|string',
            'status' => 'required|string',
            'attachment' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'assigned_to' => 'required|exists:users,id',
            '_method' => 'required|string|in:PUT,PATCH',
        ]);

        $task->update($data);

        return response()->success($task, 'Task updated successfully', 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();

        return response()->success(null, 'Task deleted successfully', 200);
    }

    /**
     * Status Update
     */
    public function statusUpdate(Request $request, Task $task)
    {
        $data = $request->validate([
            'status' => 'required|string|in:not_started,in_progress,completed',
        ]);

        $task->update($data);

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
    public function memberTask()
    {
        $collection = Task::where('assigned_to', auth()->user()->id)->with('project');

        // Paginate the collection
        $collection = $collection->paginate($request->per_page ?? 10);
        // format pagination data
        $pagination = getPaginationMeta($collection, exclude: ['data', 'first_page_url', 'last_page_url', 'links', 'next_page_url', 'prev_page_url']);
        // transform the collection using TaskResource
        $collection = TaskResource::collection($collection);

        // return the response
        return response()->success($collection, 'Tasks fetched successfully', 200, $pagination);
    }

    /**
     * Member Task Show
     */
    public function memberTaskShow(Task $task)
    {
        $task = Task::where('id', $task->id)->with('project')->first();

        return response()->success($task, 'Task fetched successfully', 200);
    }

    /**
     * Member Task Comments
     */
    public function memberTaskComment(Task $task)
    {
        $comments = $task->comments()->with('user')->paginate(10);

        return response()->success($comments, 'Comments fetched successfully', 200);
    }

    /**
     * Member Task Comment Store
     */
    public function memberTaskCommentStore(Request $request, Task $task)
    {
        $data = $request->validate([
            'comment' => 'required|string',
        ]);

        $comment = $task->comments()->create([
            'comment' => $data['comment'],
        ]);

        return response()->success($comment, 'Comment created successfully', 201);
    }
}
