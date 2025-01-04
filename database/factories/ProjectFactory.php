<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Obtener un usuario aleatorio para 'created_by' y 'updated_by'
        $user = User::inRandomOrder()->first();

        return [
            'name' => fake()->sentence(),
            'description' => fake()->realText(),
            'due_date' => fake()->dateTimeBetween('now', '+1 year'),
            'status' => fake()->randomElement(['pending', 'in_progress', 'completed']),
            'image_path' => fake()->imageUrl(),
            'created_by' => $user->id,
            'updated_by' => $user->id,
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
}
