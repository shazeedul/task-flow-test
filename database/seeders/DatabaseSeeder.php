<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Modules\Language\Database\Seeders\LanguageTableSeeder;
use Modules\Setting\Database\Seeders\SettingSeeder;
use Modules\TaskFlow\database\seeders\TaskFlowDatabaseSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // db foreign key check disable
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        $this->call([
            LanguageTableSeeder::class,
            RoleTableSeeder::class,
            SettingSeeder::class,
            TaskFlowDatabaseSeeder::class,
        ]);
        // db foreign key check enable
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        Artisan::call('optimize:clear');
    }
}
