<?php

namespace Modules\Language\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Language\Models\Language;

class LanguageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Language::truncate();

        $data = [
            [
                'title' => 'English',
                'code' => 'en',
                'status' => 1,
            ],
            [
                'title' => 'Bangla',
                'code' => 'bn',
                'status' => 1,
            ],
        ];
        foreach ($data as $lan) {
            Language::create($lan);
        }
    }
}
