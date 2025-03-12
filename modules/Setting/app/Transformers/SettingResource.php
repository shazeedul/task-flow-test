<?php

namespace Modules\Setting\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class SettingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $key = explode('.', $this->key);
        $currentKey = '';

        if (count($key) && isset($key[1])) {
            $currentKey = $key[1];
        }

        $value = $this->value;
        if (in_array($this->type, ['image', 'file']) && ! empty($this->value)) {
            $value = asset('storage/'.$this->value);
        }

        return [
            $currentKey => $value,
        ];
    }
}
