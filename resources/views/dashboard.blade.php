<x-app-layout>
    @if (auth()->user()->hasRole('Admin') || auth()->user()->hasRole('Project Manager'))
        <div class="row">
            <!-- Tasks Completed Per Project Chart -->
            <div class="col-12 mb-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Tasks Completed Per Project</h5>
                    </div>
                    <div class="card-body">
                        <canvas id="tasksPerProjectChart"></canvas>
                    </div>
                </div>
            </div>

            <!-- User Activity Logs -->
            <div class="col-12 mb-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">User Activity Logs</h5>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Last Login</th>
                                        <th>Tasks Completed</th>
                                        <th>Last Task Completed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($userActivityLogs as $log)
                                        <tr>
                                            <td>{{ $log['name'] }}</td>
                                            <td>{{ $log['last_login'] }}</td>
                                            <td>{{ $log['completed_tasks'] }}</td>
                                            <td>{{ $log['last_task_completed'] }}</td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @push('css')
            <link rel="stylesheet" href="{{ admin_asset('css/dashboard.min.css') }}">
            <link rel="stylesheet" href="{{ admin_asset('vendor/chartJs/Chart.min.css') }}">
        @endpush
        @push('js')
            <script src="{{ admin_asset('vendor/chartJs/Chart.min.js') }}"></script>
            <script>
                var tasksPerProject = {!! json_encode($tasksPerProject) !!};
                var userActivityLogs = {!! json_encode($userActivityLogs) !!};
            </script>
            <script src="{{ admin_asset('js/dashboard.min.js') }}"></script>
        @endpush
    @endif
</x-app-layout>
