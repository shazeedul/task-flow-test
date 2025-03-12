<?php

namespace Modules\Permission\Models;

use App\Traits\FormatTimestamps;
use App\Traits\WithCache;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Permission\Models\Permission as SpatiePermission;

class Permission extends SpatiePermission
{
    use FormatTimestamps;
    use HasFactory;
    use WithCache;

    protected $fillable = ['name', 'group', 'guard_name'];

    protected static $cacheKey = '__permission___';

    public static function groupList()
    {
        return self::select('group')->distinct()->pluck('group');
    }

    public static function groups()
    {
        $permissions = self::cacheData();
        $groupData = [];
        foreach ($permissions as $s) {
            $groupData[$s->group][] = $s;
        }

        return $groupData;
    }
}
