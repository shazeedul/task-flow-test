<?php

namespace App\Traits;

trait GenerateCode
{
    public function generateCode(
        $length = 7,
        string $pad_string = '0',
        int $pad_type = STR_PAD_LEFT
    ) {
        $lastVendor = $this->orderBy('id', 'desc')->first();
        if (! $lastVendor) {
            return str_pad(1, $length, $pad_string, $pad_type);
        }
        $new_id = $lastVendor->id + 1;
        $length = $length - strlen($new_id);

        return str_pad($new_id, $length, $pad_string, $pad_type);
    }
}
