<?php

namespace Modules\TaskFlow\app\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Modules\TaskFlow\Models\Project;

class ProjectExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        return Project::all();
    }

    public function headings(): array
    {
        return ['Title', 'Description', 'Status', 'Created At', 'Updated At'];
    }
}
