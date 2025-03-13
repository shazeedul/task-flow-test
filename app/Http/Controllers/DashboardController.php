<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * Constructor for the controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'status_check'])->except(['redirectToDashboard']);
        \cs_set('theme', [
            'title' => 'Dashboard',
            'back' => \back_url(),
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => false,
                ],

            ],
            'rprefix' => 'admin.dashboard',
        ]);
    }

    public function index()
    {
        $data = [
            'tasksPerProject' => $this->getTasksPerProject(),
            'userActivityLogs' => $this->getUserActivityLogs(),
        ];

        return view('dashboard', $data);
    }

    public function redirectToDashboard()
    {
        return redirect()->route('admin.dashboard');
    }



    /**
     * Get tasks completed per project
     */
    private function getTasksPerProject()
    {
        return \Modules\TaskFlow\Models\Project::with(['tasks' => function ($query) {
            $query->where('status', 'completed');
        }])
            ->get()
            ->map(function ($project) {
                return [
                    'project' => $project->title,
                    'completed_tasks' => $project->tasks->count(),
                ];
            });
    }

    /**
     * Get user activity logs
     */
    private function getUserActivityLogs()
    {
        return \App\Models\User::role(['Team Member', 'Project Manager'])
            ->with(['tasks' => function ($query) {
                $query->where('status', 'completed')
                    ->orderBy('updated_at', 'desc');
            }])
            ->get()
            ->map(function ($user) {
                return [
                    'name' => $user->name,
                    'last_login' => $user->last_login_at ? $user->last_login_at->diffForHumans() : 'Never',
                    'completed_tasks' => $user->tasks->count(),
                    'last_task_completed' => $user->tasks->first() ? $user->tasks->first()->updated_at->diffForHumans() : 'N/A'
                ];
            });
    }
}
