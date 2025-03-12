<?php

namespace Modules\Language\Models;

use App\Traits\DataTableActionBtn;
use App\Traits\WithCache;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use DataTableActionBtn;
    use HasFactory;
    use WithCache;

    protected static $cacheKey = '__languages__';

    protected static $cacheKeys = [
        '_active_',
    ];

    protected $fillable = [
        'title',
        'code',
        'status',
    ];

    /**
     * Scope a query to only include active languages.
     *
     * @param  mixed  $query
     * @return mixed
     */
    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    /**
     * Scope a query to only include inactive languages.
     *
     * @param  mixed  $query
     * @return mixed
     */
    public function scopeInactive($query)
    {
        return $query->where('status', 0);
    }

    /**
     * get created at attribute
     */
    public function getCreatedAtAttribute(): string
    {
        return \date('d M, Y', \strtotime($this->attributes['created_at']));
    }

    /**
     * get updated at attribute
     */
    public function getUpdatedAtAttribute(): string
    {
        return \date('d M, Y', \strtotime($this->attributes['updated_at']));
    }
}
