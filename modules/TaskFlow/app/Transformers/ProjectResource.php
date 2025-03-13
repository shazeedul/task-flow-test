<?php

namespace Modules\TaskFlow\Transformers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'status' => ucfirst(str_replace('_', ' ', $this->status)),
            'tasks' => TaskResource::collection($this->tasks),
        ];
    }
}
