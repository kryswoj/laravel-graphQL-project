<?php

namespace Database\Factories;

use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'lead' => $this->faker->text(200),
            'content' => $this->faker->paragraphs(3, true),
            'user_id' => User::all()->random()->id,
            'topic_id' => Topic::all()->random()->id,
        ];
    }
}
