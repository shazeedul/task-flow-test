<?php

namespace App\Notifications\LaravelBackup;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Storage;
use Spatie\Backup\Notifications\Notifications\BackupWasSuccessfulNotification as SpatieBackupWasSuccessfulNotification;

class BackupWasSuccessfulNotification extends SpatieBackupWasSuccessfulNotification
{
    public function toMail(): MailMessage
    {
        // Disk initialization
        $disk = Storage::disk($this->event->backupDestination->diskName());
        // Mail message initialization
        $mailMessage = (new MailMessage())
            ->from(config('backup.notifications.mail.from.address', config('mail.from.address')), config('backup.notifications.mail.from.name', config('mail.from.name')))
            ->subject(trans('backup::notifications.backup_successful_subject', ['application_name' => $this->applicationName()]))
            ->line(trans('backup::notifications.backup_successful_body', ['application_name' => $this->applicationName(), 'disk_name' => $this->diskName()]));
        // check if backup file size is less than 24MB
        if ($disk->size($this->event->backupDestination->newestBackup()->path()) <= 25165824) {
            $mailMessage->attach(config('filesystems.disks.'.$this->event->backupDestination->diskName().'.root').'/'.$this->event->backupDestination->newestBackup()->path());
        }
        $this->backupDestinationProperties()->each(function ($value, $name) use ($mailMessage) {
            $mailMessage->line("{$name}: $value");
        });

        return $mailMessage;
    }
}
