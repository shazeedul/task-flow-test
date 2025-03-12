<?php

namespace Modules\TaskFlow\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\TaskFlow\Database\factories\TaskAttachmentFactory;

class TaskAttachment extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'task_id',
        'path',
        'name',
    ];

    public function task()
    {
        return $this->belongsTo(Task::class);
    }
}
