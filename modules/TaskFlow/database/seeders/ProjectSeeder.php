<?php

namespace Modules\TaskFlow\database\seeders;

use Illuminate\Database\Seeder;
use Modules\TaskFlow\Models\Project;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::factory()->count(10)->create();
    }
}
