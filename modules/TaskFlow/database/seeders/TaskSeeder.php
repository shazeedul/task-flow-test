<?php

namespace Modules\TaskFlow\database\seeders;

use Illuminate\Database\Seeder;
use Modules\TaskFlow\Models\Task;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Task::factory()->count(10)->create();
    }
}
