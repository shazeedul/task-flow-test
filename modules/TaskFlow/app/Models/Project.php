<?php

namespace Modules\TaskFlow\Models;

use App\Models\User;
use App\Traits\ActionBtn;
use App\Traits\FormatTimestamps;
use App\Traits\WithCache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\TaskFlow\database\factories\ProjectFactory;

class Project extends Model
{
    use HasFactory;
    use FormatTimestamps;
    use WithCache;

    protected static $cacheKey = '_projects_';

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'title',
        'description',
        'deadline',
        'status',
    ];

    protected $casts = [
        'deadline' => 'datetime',
    ];

    /**
     * Status list.
     */
    public static function statusList(): array
    {
        return [
            'not_started' => 'Not Started',
            'in_progress' => 'In Progress',
            'completed' => 'Completed',
        ];
    }

    protected static function newFactory(): ProjectFactory
    {
        return ProjectFactory::new();
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    /**
     * Get the users associated with the project.
     */
    public function users()
    {
        return $this->belongsToMany(User::class)
            ->withPivot('role')
            ->withTimestamps();
    }

    /**
     * Get project managers for this project.
     */
    public function projectManagers()
    {
        return $this->belongsToMany(User::class)
            ->withPivot('role')
            ->wherePivot('role', 'project_manager');
    }

    /**
     * Get team members for this project.
     */
    public function teamMembers()
    {
        return $this->belongsToMany(User::class)
            ->withPivot('role')
            ->wherePivot('role', 'team_member');
    }
}
