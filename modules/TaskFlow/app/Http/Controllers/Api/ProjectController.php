<?php

namespace Modules\TaskFlow\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\TaskFlow\Models\Project;
use Modules\TaskFlow\Transformers\ProjectResource;

class ProjectController extends Controller
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
        $collection = Project::with('tasks');

        // Paginate the collection
        $collection = $collection->paginate($request->per_page ?? 10);
        // format pagination data
        $pagination = getPaginationMeta($collection, exclude: ['data', 'first_page_url', 'last_page_url', 'links', 'next_page_url', 'prev_page_url']);
        // transform the collection using ProductResource
        $collection = ProjectResource::collection($collection);

        // return the response
        return response()->success($collection, 'Projects fetched successfully', 200, $pagination);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
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
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
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
        $project->delete();

        return response()->success(null, 'Project deleted successfully', 200);
    }

    /**
     * Status Update
     */
    public function statusUpdate(Request $request, Project $project)
    {
        $data = $request->validate([
            'status' => 'required|string|in:not_started,in_progress,completed',
        ]);

        $project->update($data);

        return response()->success($project, 'Project status updated successfully', 200);
    }
}
