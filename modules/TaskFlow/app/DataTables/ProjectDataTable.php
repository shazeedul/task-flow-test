<?php

namespace Modules\TaskFlow\DataTables;

use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Illuminate\Support\Str;
use Modules\TaskFlow\Models\Project;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;

class ProjectDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param  QueryBuilder  $query  Results from query() method.
     */
    public function dataTable(QueryBuilder $query): EloquentDataTable
    {
        return (new EloquentDataTable($query))
            ->editColumn('description', function ($project) {
                return Str::limit($project->description, 100);
            })
            ->editColumn('status', function ($query) {
                return $this->statusBtn($query);
            })
            ->addColumn('action', function ($query) {
                $btn = '<div class="d-flex justify-content-center">';
                $btn .= '<a href="javascript:void(0)" class="btn btn-success-soft btn-sm me-1" onclick="axiosModal(\'' . route(config('theme.rprefix') . '.edit', $query->id) . '\', \'GET\', null, null, \'modal-xl\')" title="Edit"><i class="fa fa-edit"></i></a>';
                $btn .= '<a href="javascript:void(0)" class="btn btn-danger-soft btn-sm" onclick="delete_modal(\'' . route(config('theme.rprefix') . '.destroy', $query->id) . '\',\'' . 'project-table' . '\')"  title="Delete"><i class="fa fa-trash"></i></a>';
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
    public function query(Project $model): QueryBuilder
    {
        return $model->newQuery();
    }

    /**
     * Optional method if you want to use html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
            ->setTableId('project-table')
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
            Column::make('title')->title(localize('Title'))->defaultContent('N/A'),
            Column::make('description')->title(localize('Description'))->defaultContent('N/A'),
            Column::make('status')->title(localize('Status'))->defaultContent('N/A'),
            Column::computed('action')->title(localize('Action'))->addClass('text-center'),
        ];
    }

    /**
     * Get filename for export.
     */
    protected function filename(): string
    {
        return 'Project_' . date('YmdHis');
    }

    /**
     * Status Button
     *
     * @param  Project  $project
     */
    private function statusBtn($project): string
    {
        $status = '<select class="form-control" name="status" id="status_id_' . $project->id . '" ';
        $status .= 'onchange="userStatusUpdate(\'' . route(config('theme.rprefix') . '.status-update', $project->id) . '\',' . $project->id . ',\'' . $project->status . '\')">';

        foreach (Project::statusList() as $key => $value) {
            $status .= "<option value='$key' " . selected($key, $project->status) . ">$value</option>";
        }

        $status .= '</select>';

        return $status;
    }
}
