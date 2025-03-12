<?php

namespace App\Models;

use App\Traits\ActionBtn;
use App\Traits\FormatTimestamps;
use App\Traits\WithCache;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Sanctum\HasApiTokens;
use Modules\Auth\Traits\HasProfilePhoto;
use Spatie\Permission\Traits\HasRoles;
use Modules\TaskFlow\Models\Project;

class User extends Authenticatable
{
    use ActionBtn;
    use FormatTimestamps;
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use HasRoles;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use WithCache;

    protected static $cacheKey = '_users_';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'profile_photo_path',
        'phone',
        'gender',
        'age',
        'address',
        'status',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
    ];

    /**
     * Status list.
     */
    public static function statusList(): array
    {
        return [
            'Pending' => 'Pending',
            'Active' => 'Active',
            'Suspended' => 'Suspended',
        ];
    }

    /**
     * Gender List.
     */
    public static function genderList(): array
    {
        return [
            'Male' => 'Male',
            'Female' => 'Female',
            'Others' => 'Others',
        ];
    }

    /**
     * Get all projects that the user is part of.
     */
    public function projects()
    {
        return $this->belongsToMany(Project::class)
            ->withPivot('role')
            ->withTimestamps();
    }

    /**
     * Get projects where user is a project manager.
     */
    public function managedProjects()
    {
        return $this->belongsToMany(Project::class)
            ->withPivot('role')
            ->wherePivot('role', 'project_manager');
    }

    /**
     * Get projects where user is a team member.
     */
    public function teamProjects()
    {
        return $this->belongsToMany(Project::class)
            ->withPivot('role')
            ->wherePivot('role', 'team_member');
    }
}
