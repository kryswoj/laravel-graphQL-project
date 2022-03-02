<?php

namespace Database\Seeders;

use App\Models\Topic;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $values = [
            'Featured Sites' => 'featured',
            'Useful links' => 'links',
            'Guides & Tutorials' => 'tutorials',
        ];

        foreach ($values as $name => $slug) {
            Topic::create([
                'name' => $name,
                'slug' => $slug,
            ]);
        };
    }
}
