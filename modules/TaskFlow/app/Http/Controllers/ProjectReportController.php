<?php

namespace Modules\TaskFlow\Http\Controllers;

use App\Http\Controllers\Controller;
use Barryvdh\DomPDF\Facade\Pdf;
use Modules\TaskFlow\Models\Project;

class ProjectReportController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'permission:export_project']);
    }

    public function generatePDF(Project $project)
    {
        $data = [
            'project' => $project->load(['tasks' => function ($query) {
                $query->with('assignedUser');
            }]),
            'total_tasks' => $project->tasks->count(),
            'completed_tasks' => $project->tasks->where('status', 'completed')->count(),
            'in_progress_tasks' => $project->tasks->where('status', 'in_progress')->count(),
            'not_started_tasks' => $project->tasks->where('status', 'not_started')->count(),
            'status_list' => Project::statusList(),
        ];

        $pdf = PDF::loadView('taskflow::reports.project', $data);

        return $pdf->download("project-report-{$project->id}.pdf");
    }
}
