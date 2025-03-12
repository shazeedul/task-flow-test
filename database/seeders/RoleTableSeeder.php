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
            'Employee' => [
                'employee_management',
            ],
            'Vehicle Management' => [
                'vehicle_management',
                'vehicle_type_management',
                'vehicle_division_management',
                'vehicle_rta_office_management',
                'vehicle_ownership_type_management',
                'document_type_management',
                'legal_document_management',
            ],
            'Vehicle Requisition' => [
                'vehicle_requisition_type_management',
                'vehicle_requisition_management',
                'vehicle_requisition_purpose_management',
                'vehicle_route_management',
                'pick_drop_requisition',
            ],
            'Vehicle Insurance' => [
                'vehicle_insurance_company_management',
                'vehicle_insurance_recurring_period_management',
                'insurance_management',
            ],
            'Refueling' => [
                'fuel_type_management',
                'fuel_station_management',
                'refueling_management',
                'refueling_requisition_management',
            ],
            'Inventory' => [
                'inventory_category_management',
                'inventory_location_management',
                'inventory_parts_management',
                'inventory_parts_usage_management',
                'inventory_vendor_management',
                'expense_management',
                'expense_type_management',
                'trip_type_management',
                'inventory_stock_management',
            ],
            'Vehicle Maintenance' => [
                'vehicle_maintenance_management',
                'vehicle_maintenance_type_management',
            ],
            'Purchase' => [
                'purchase_management',
            ],
            'Report' => [
                'report_management',
                'employee_report',
                'driver_report',
                'vehicle_report',
                'vehicle_requisition_report',
                'pickdrop_requisition_report',
                'refuel_requisition_report',
                'purchase_report',
                'expense_report',
                'maintenance_report',
            ],
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
        ];
        $roles = [
            'User' => [],
        ];

        $administrator = Role::create(['name' => 'Administrator']);

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
            ], [
                'name' => 'User',
                'email' => 'user@gmail.com',
                'password' => Hash::make('user'),
                'email_verified_at' => now(),
                'status' => 'Active',
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }

        if (count($users)) {
            User::find(1)->assignRole('Administrator');
            User::find(2)->assignRole('User');
        }
    }
}
