<?php

namespace App\Traits;

trait DataTableActionBtn
{
    /**
     * Get action button
     *
     * @return string
     */
    public function actionBtn(array $option = [
        'show' => true,
        'edit' => true,
        'delete' => true,
    ])
    {
        $actionBtn = '<div class="btn-group" role="group" aria-label="Action Buttons">';
        if (isset($option['show'])) {
            if ($option['show'] === true) {
                $actionBtn .= '<a href="javascript:void(0);" class="btn btn-success btn-sm my-1 mx-1" onclick="'."axiosModal('".route(config('theme.rprefix').'.show', $this->id).'\')"><i class="fa fa-eye"></i></a>';
            } else {
                $actionBtn .= $option['show'];
            }
        }

        if (isset($option['edit'])) {
            if ($option['edit'] === true) {
                $actionBtn .= '<a href="javascript:void(0);" class="btn btn-secondary btn-sm my-1 mx-1" onclick="'."axiosModal('".route(config('theme.rprefix').'.edit', $this->id).'\')"><i class="fa fa-edit"></i></a>';
            } else {
                $actionBtn .= $option['edit'];
            }
        }
        if (isset($option['delete'])) {
            if ($option['delete'] === true) {
                $actionBtn .= '<a href="javascript:void(0);" class="btn btn-danger btn-sm m-auto" onclick="'."delete_modal('".route(config('theme.rprefix').'.destroy', $this->id).'\')"  title="'.localize('Delete').'"><i class="fa fa-trash"></i></a>';
            } else {
                $actionBtn .= $option['delete'];
            }
        }

        $actionBtn .= '</div>';

        // show, edit and delete key unset
        unset($option['edit'], $option['delete'], $option['show']);
        // for other action
        foreach ($option as $value) {
            $actionBtn .= $value;
        }

        return $actionBtn;
    }
}
