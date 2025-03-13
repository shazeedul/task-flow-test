<?php

namespace Modules\Permission\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Modules\Permission\DataTables\PermissionDataTable;
use Modules\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Constructor for the controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'permission:permission_management']);
        $this->middleware('request:ajax', ['only' => ['store', 'update', 'destroy', 'edit', 'onlyGroups']]);
        $this->middleware('strip_scripts_tag')->only(['store', 'update']);
        \cs_set('theme', [
            'title' => 'Permission Lists',
            'back' => \back_url(),
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Permission Lists',
                    'link' => false,
                ],
            ],
            'rprefix' => 'admin.permission',
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(PermissionDataTable $dataTable)
    {
        \cs_set('theme', [
            'description' => 'Display a listing of roles in Database.',
        ]);

        return $dataTable->render('permission::index');
    }

    public function onlyGroups()
    {
        $groups = Permission::groupList();

        return response()->success($groups, 'Permission groups fetched successfully.', 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255|unique:permissions,name',
            'group' => 'nullable|string|max:255',
        ]);

        $permission = Permission::create([
            'name' => implode('_', \explode(' ', Str::lower($data['name']))),
            'group' => $data['group'] ?? null,
        ]);

        return response()->success($permission, 'Permission created successfully.', 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \Modules\Permission\Models\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $permission = Permission::find($request->id);
        if (! $permission) {
            return response()->error(null, 'Permission not found.', 404);
        }

        return response()->success([
            'permission' => $permission,
            'groups' => Permission::groupList(),
        ], 'Permission data fetched successfully.', 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Modules\Permission\Models\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = $request->validate([
            'id' => 'required|exists:permissions,id',
            'name' => 'required|string|max:255|unique:permissions,name,'.$request->id.',id',
            'group' => 'nullable|string|max:255',

        ]);
        $permission = Permission::find($data['id']);
        $permission->update([
            'name' => implode('_', \explode(' ', Str::lower($data['name']))),
            'group' => $data['group'] ?? null,
        ]);
        $permission->syncPermissions($request->permissions ?? '');

        return response()->success($permission, 'Permission updated successfully.', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Permission $permission)
    {

        $permission->delete();

        return response()->success(null, 'Permission deleted successfully.', 200);
    }
}
