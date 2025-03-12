<?php

namespace Modules\TaskFlow\database\seeders;

use Illuminate\Database\Seeder;

class TaskFlowDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call([
            ProjectSeeder::class,
            TaskSeeder::class,
        ]);
    }
}
