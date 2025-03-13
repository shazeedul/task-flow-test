<?php

namespace Modules\Language\DataTables;

use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Modules\Language\Models\Language;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;

class LanguageDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param  QueryBuilder  $query  Results from query() method.
     */
    public function dataTable(QueryBuilder $query): EloquentDataTable
    {
        return (new EloquentDataTable($query))
            ->addColumn('action', function ($query) {
                return $query->actionBtn([
                    'show' => false,
                    'edit' => true,
                    'delete' => true,
                    'build' => '<a title="'.localize('Build').'" href="'.route(config('theme.rprefix').'.build.index', $query->code).'" class="btn btn-success btn-sm m-1"><i class="fa fa-flag"></i></a>',
                ]);
            })
            ->editColumn('status', function ($query) {
                return $query->status == 1 ? '<span class="badge bg-success my-1" >Active</span>' : '<span class="badge bg-danger  my-1" >Inactive</span>';
            })
            ->setRowId('id')
            ->rawColumns(['status', 'action'])
            ->addIndexColumn();
    }

    /**
     * Get query source of dataTable.
     */
    public function query(Language $model): QueryBuilder
    {
        return $model->newQuery();
    }

    /**
     * Optional method if you want to use html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
            ->setTableId('language-table')
            ->columns($this->getColumns())
            ->minifiedAjax()
            ->responsive(true)
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
            Column::make('code')->title(localize('short code'))->defaultContent('N/A'),
            Column::make('status')->title(localize('Status'))->defaultContent('N/A'),
            Column::make('updated_at')->title(localize('Last Update'))->defaultContent('N/A'),
            Column::computed('action')
                ->title(localize('Action'))
                ->searchable(false)
                ->exportable(false)
                ->printable(false)
                ->width(120)
                ->addClass('text-center'),
        ];
    }

    /**
     * Get filename for export.
     */
    protected function filename(): string
    {
        return 'Permission_'.date('YmdHis');
    }
}
