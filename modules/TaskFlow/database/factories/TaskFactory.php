<?php

namespace Modules\TaskFlow\database\factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\TaskFlow\Models\Project;

class TaskFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\TaskFlow\Models\Task::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'project_id' => $this->faker->randomElement(Project::pluck('id')),
            'title' => $this->faker->words(3, true),
            'description' => $this->faker->paragraph,
            'priority' => $this->faker->randomElement(['low', 'medium', 'high']),
            'status' => $this->faker->randomElement(['not_started', 'in_progress', 'completed']),
            'assigned_to' => 3,
        ];
    }
}
