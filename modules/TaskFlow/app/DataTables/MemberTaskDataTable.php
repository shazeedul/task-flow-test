<?php

namespace Modules\TaskFlow\DataTables;

use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Illuminate\Support\Str;
use Modules\TaskFlow\Models\Task;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;

class MemberTaskDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param  QueryBuilder  $query  Results from query() method.
     */
    public function dataTable(QueryBuilder $query): EloquentDataTable
    {
        return (new EloquentDataTable($query))
            ->editColumn('description', function ($task) {
                return Str::limit($task->description, 100);
            })
            ->editColumn('project', function ($task) {
                return $task->project->title ?? 'N/A';
            })
            ->editColumn('priority', function ($task) {
                return ucfirst($task->priority);
            })
            ->editColumn('status', function ($task) {
                if (auth()->user()->can('update_task_status')) {
                    return $this->statusBtn($task);
                }

                return ucfirst($task->status);
            })
            ->addColumn('action', function ($task) {
                $btn = '<div class="d-flex justify-content-center">';

                // View button for task details
                $btn .= '<a href="javascript:void(0)" onclick="axiosModal(\''.route(config('theme.member_rprefix').'.show', $task->id).'\', \'GET\', null, null, \'modal-xl\')" class="btn btn-info-soft btn-sm me-1" title="View Details"><i class="fa fa-eye"></i></a>';

                // Comment button if user has permission
                if (auth()->user()->can('comment_task')) {
                    $btn .= '<a href="javascript:void(0)" onclick="axiosModal(\''.route(config('theme.member_rprefix').'.comment', $task->id).'\', \'GET\', null, null, \'modal-xl\')" class="btn btn-primary-soft btn-sm me-1" title="Comments"><i class="fa fa-comments"></i></a>';
                }

                $btn .= '</div>';

                return $btn;
            })
            ->rawColumns(['status', 'action'])
            ->setRowId('id')
            ->addIndexColumn();
    }

    /**
     * Get query source of dataTable.
     */
    public function query(Task $model): QueryBuilder
    {
        return $model->newQuery()
            ->where('assigned_to', auth()->id())
            ->with(['project', 'assignedUser', 'comments'])
            ->orderBy('id', 'desc');
    }

    /**
     * Optional method if you want to use html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
            ->setTableId('task-table')
            ->columns($this->getColumns())
            ->minifiedAjax()
            ->orderBy(4)
            ->dom("<'top'<'left-col'l><'center-col'B><'right-col'f>>rtip")
            // set table class to table table-bordered
            ->setTableAttributes([
                'class' => 'table custom-table-border',
            ])
            ->parameters([
                'responsive' => true,
                'autoWidth' => false,
                'headerCallback' => 'function(thead, data, start, end, display) {
                    $(thead).addClass("bg-smoke");
                }',
                'initComplete' => 'function(settings, json) {
                     $(settings.nTable).removeClass("table-striped table-bordered ");
                }',
                'lengthMenu' => [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
            ])
            ->buttons([
                Button::make('reset')->className('btn btn-success box-shadow--4dp btn-sm-menu'),
                Button::make('reload')->className('btn btn-success box-shadow--4dp btn-sm-menu'),
            ]);
    }

    /**
     * Get the dataTable columns definition.
     */
    public function getColumns(): array
    {
        return [
            Column::make('DT_RowIndex')->title(localize('SL'))->searchable(false)->orderable(false)->width(30)->addClass('text-center'),
            Column::make('project')->title(localize('Project'))->defaultContent('N/A'),
            Column::make('title')->title(localize('Title'))->defaultContent('N/A'),
            Column::make('description')->title(localize('Description'))->defaultContent('N/A'),
            Column::make('priority')->title(localize('Priority'))->defaultContent('N/A'),
            Column::make('status')->title(localize('Status'))->defaultContent('N/A'),
            Column::computed('action')->title(localize('Action'))->addClass('text-center'),
        ];
    }

    /**
     * Get filename for export.
     */
    protected function filename(): string
    {
        return 'Task_'.date('YmdHis');
    }

    /**
     * Status Button
     *
     * @param  Task  $task
     */
    private function statusBtn($task): string
    {
        $status = '<select class="form-control" name="status" id="status_id_'.$task->id.'" ';
        $status .= 'onchange="userStatusUpdate(\''.route(config('theme.rprefix').'.status-update', $task->id).'\','.$task->id.',\''.$task->status.'\')">';

        foreach (Task::statusList() as $key => $value) {
            $status .= "<option value='$key' ".selected($key, $task->status).">$value</option>";
        }

        $status .= '</select>';

        return $status;
    }
}
