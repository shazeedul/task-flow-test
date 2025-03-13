<!DOCTYPE html>
<html>

<head>
    <title>Project Report - {{ $project->title }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .stats {
            margin: 20px 0;
            padding: 10px;
            background: #f5f5f5;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f5f5f5;
        }

        .status {
            padding: 3px 8px;
            border-radius: 3px;
            font-size: 12px;
        }

        .completed {
            background: #d4edda;
        }

        .in-progress {
            background: #fff3cd;
        }

        .not-started {
            background: #f8d7da;
        }
    </style>
</head>

<body>
    <div class="header">
        <h1>Project Report</h1>
        <h2>{{ $project->title }}</h2>
        <p>Generated on: {{ now()->format('F j, Y') }}</p>
    </div>

    <div class="stats">
        <h3>Project Overview</h3>
        <p><strong>Description:</strong> {{ $project->description }}</p>
        <p><strong>Deadline:</strong> {{ $project->deadline->format('F j, Y') }}</p>
        <p><strong>Status:</strong> {{ ucwords(str_replace('_', ' ', $project->status)) }}</p>

        <h4>Task Statistics</h4>
        <ul>
            <li>Total Tasks: {{ $total_tasks }}</li>
            <li>Completed Tasks: {{ $completed_tasks }}</li>
            <li>In Progress Tasks: {{ $in_progress_tasks }}</li>
            <li>Not Started Tasks: {{ $not_started_tasks }}</li>
        </ul>
    </div>

    <h3>Task Details</h3>
    <table>
        <thead>
            <tr>
                <th>Task</th>
                <th>Assigned To</th>
                <th>Priority</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($project->tasks as $task)
                <tr>
                    <td>{{ $task->title }}</td>
                    <td>{{ $task->assignedUser->name }}</td>
                    <td>{{ ucwords(str_replace('_', ' ', $task->priority)) }}</td>
                    <td>
                        <span class="status {{ $task->status }}">
                            {{ ucwords(str_replace('_', ' ', $task->status)) }}
                        </span>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>

</html>
