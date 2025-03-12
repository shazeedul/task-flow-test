<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Modules\Permission\Models\Permission;
use Modules\Role\Models\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'General' => [],
            'Dashboard' => [],
            'User' => [
                'user_management',
                'role_management',
                'permission_management',
            ],
            'Setting' => [
                'setting_management',
                'mail_setting_management',
                'env_setting_management',
                'language_setting_management',
            ],
            'Project' => [
                'project_management',
                'view_project',
                'create_project',
                'edit_project',
                'delete_project',
                'update_project_status',
            ],
            'Task' => [
                'task_management',
                'view_task',
                'create_task',
                'edit_task',
                'delete_task',
                'update_task_status',
            ],
        ];
        $roles = [
            'Project Manager' => [
                'project_management',
                'view_project',
                'create_project',
                'edit_project',
                'delete_project',
                'task_management',
                'view_task',
                'create_task',
                'edit_task',
                'delete_task',
                'update_task_status',
            ],
            'Team Member' => [
                'task_management',
                'view_task',
                'update_task_status',
            ],
        ];

        $administrator = Role::create(['name' => 'Admin']);

        foreach ($permissions as $group => $groups) {

            foreach ($groups as $permission) {
                Permission::create([
                    'name' => $permission,
                    'group' => $group,
                ])->assignRole($administrator);
            }
        }

        foreach ($roles as $role => $permissions) {
            $role = Role::create(['name' => $role]);
            $role->givePermissionTo($permissions);
        }

        $users = [
            [
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('admin'),
                'email_verified_at' => now(),
                'status' => 'Active',
            ],
            [
                'name' => 'Project Manager',
                'email' => 'manager@gmail.com',
                'password' => Hash::make('manager'),
                'email_verified_at' => now(),
                'status' => 'Active',
            ],
            [
                'name' => 'Team Member',
                'email' => 'member@gmail.com',
                'password' => Hash::make('member'),
                'email_verified_at' => now(),
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }

        if (count($users)) {
            User::find(1)->assignRole('Admin');
            User::find(2)->assignRole('Project Manager');
            User::find(3)->assignRole('Team Member');
        }
    }
}
