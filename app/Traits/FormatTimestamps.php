<?php

namespace App\Traits;

trait FormatTimestamps
{
    /**
     * Format User Created At.
     */
    public function getCreatedAtAttribute(): string
    {
        return \date('d M, Y', \strtotime($this->attributes['created_at']));
    }

    /**
     * Format User Updated At.
     */
    public function getUpdatedAtAttribute(): string
    {
        return \date('d M, Y', \strtotime($this->attributes['updated_at']));
    }
}
