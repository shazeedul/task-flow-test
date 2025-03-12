<?php

namespace Modules\Role\Models;

use App\Traits\FormatTimestamps;
use App\Traits\WithCache;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Permission\Models\Role as SpatieRole;

class Role extends SpatieRole
{
    use FormatTimestamps;
    use HasFactory;
    use WithCache;

    protected static $cacheKey = '__role___';

    protected $fillable = [
        'name',
        'guard_name',
    ];
}
