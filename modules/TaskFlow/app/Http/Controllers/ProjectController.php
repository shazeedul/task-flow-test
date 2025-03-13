<?php

namespace Modules\TaskFlow\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Modules\TaskFlow\DataTables\ProjectDataTable;
use Modules\TaskFlow\Models\Project;

class ProjectController extends Controller
{
    /**
     * Construct
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('permission:project_management');
        $this->middleware('permission:create_project')->only(['create', 'store']);
        $this->middleware('permission:edit_project')->only(['edit', 'update']);
        $this->middleware('permission:delete_project')->only(['destroy']);
        $this->middleware('permission:update_project_status')->only(['statusUpdate']);
        $this->middleware('request:ajax', ['only' => ['destroy']]);
        $this->middleware('strip_scripts_tag')->only(['store', 'update']);
        \cs_set('theme', [
            'title' => 'Project Lists',
            'description' => 'Display a listing of projects in Database.',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Project Lists',
                    'link' => false,
                ],
            ],
            'rprefix' => 'admin.project',
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(ProjectDataTable $dataTable)
    {
        return $dataTable->render('taskflow::project.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        \cs_set('theme', [
            'title' => 'Create Project',
            'description' => 'Create a new project in Database.',
        ]);

        return view('taskflow::project.create_edit');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'deadline' => 'required|date',
        ]);

        $project = Project::create($data);

        return response()->success($project, 'Project created successfully', 201);
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('taskflow::project.show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        \cs_set('theme', [
            'title' => 'Edit Project',
            'description' => 'Edit a project in Database.',
        ]);

        return view('taskflow::project.create_edit', [
            'item' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project): JsonResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'deadline' => 'required|date',
        ]);

        $project->update($data);

        return response()->success($project, 'Project updated successfully', 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        if ($project->tasks()->exists()) {
            return response()->error('Project has tasks and cannot be deleted.', 400);
        }

        $project->delete();

        return response()->success($project, 'Project deleted successfully', 200);
    }

    /**
     * Status Update
     */
    public function statusUpdate(Request $request, Project $project): JsonResponse
    {
        $project->update([
            'status' => $request->status,
        ]);

        return response()->success($project, 'Project status updated successfully', 200);
    }
}
