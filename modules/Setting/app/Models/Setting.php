<?php

namespace Modules\Setting\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'group',
        'key',
        'display_name',
        'value',
        'type',
        'details',
        'note',
        'order',
    ];

    public const TYPES = [
        'text' => 'Text Box',
        'text_area' => 'Text Area',
        'rich_text_box' => 'Rich Textbox',
        'code_editor' => 'Code Editor',
        'checkbox' => 'Check Box',
        'radio_btn' => 'Radio Button',
        'select_dropdown' => 'Select Dropdown',
        'file' => 'File',
        'image' => 'Image',
        'color' => 'Color',
    ];

    /**
     * Get the image Path attribute.
     */
    protected function details(): \Illuminate\Database\Eloquent\Casts\Attribute
    {
        return \Illuminate\Database\Eloquent\Casts\Attribute::make(
            get: fn($value) => \json_decode($value, true) ?? [],
        );
    }

    /**
     * Return the Highest Order Menu Item.
     *
     * @param  number  $parent  (Optional) Parent id. Default null
     * @return number Order number
     */
    public function highestOrderSetting($settingGroup = null)
    {
        $order = 1;
        $item = $this->where('group', '=', $settingGroup)->orderBy('order', 'DESC')
            ->first();
        if (! is_null($item)) {
            $order = intval($item->order) + 1;
        }

        return $order;
    }
}
