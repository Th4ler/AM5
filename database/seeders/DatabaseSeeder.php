<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $zura = User::factory()->create([
            'name' => 'Zura',
            'email' => 'zura@example.com',
            'status' => 'user',
            'description' => 'I am a description for Zura',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => time(),
            'end_date' => now()->addDays(10)
        ]);
        $john = User::factory()->create([
            'name' => 'John Smith',
            'email' => 'john@example.com',
            'status' => 'admin',
            'description' => 'I am a description for John',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => time(),
            'end_date' => now()->addDays(20)
        ]);

        // Crear proyectos vinculados a los usuarios creados
        Project::factory()
            ->count(5)
            ->hasTasks(5)
            ->create([
                'created_by' => $zura->id,
                'updated_by' => $john->id,
            ]);
    }
}
