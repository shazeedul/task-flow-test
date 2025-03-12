<?php

namespace Modules\Language\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class LanguageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->whenHas('title'),
            'slug' => $this->whenHas('slug'),
            'status' => $this->whenHas('status'),
        ];
    }
}
