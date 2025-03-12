<?php

namespace Modules\Language;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class Localizer
{
    /**
     * The cached localization data.
     *
     * @var array
     */
    protected $localData = [];

    /**
     * Get the path to the localization file for the given locale.
     *
     * @return string
     */
    public function getLocalizePath(string $locale)
    {
        return config('language.path').'/'.$locale.'.json';
    }

    /**
     * Create the localization file for the given locale.
     */
    public function createLocalizeFile(string $locale, ?string $builder_local = null): void
    {
        // get localize path
        $localizePath = $this->getLocalizePath($locale);
        //
        if ($builder_local) {
            $locale = $this->getLocalizeData($builder_local);
        } else {
            $locale = [];
        }
        File::put($localizePath, json_encode($locale));
    }

    public function updateLocalizeFile(string $old_locale, string $new_local, ?string $builder_local = null): void
    {
        if ($builder_local && $builder_local != $new_local) {
            $this->deleteLocalizeFile($new_local);
            $this->createLocalizeFile($new_local, $builder_local);

            return;
        }
        // get localize path
        $localizePath = $this->getLocalizePath($old_locale);
        $new_localizePath = $this->getLocalizePath($new_local);
        // check if localize file exists
        if (! File::exists($localizePath)) {
            // create localize file
            File::put($localizePath, json_encode([]));
        }
        // rename localize file
        File::move($localizePath, $new_localizePath);
    }

    /**
     * Delete the localization file for the given locale.
     */
    public function deleteLocalizeFile(string $locale): void
    {
        // get localize path
        $localizePath = $this->getLocalizePath($locale);
        // delete localize file
        File::delete($localizePath);
    }

    /**
     * Get the localization data for the given locale.
     *
     * @return mixed
     */
    public function getLocalizeData(string $locale)
    {
        // check if locale data is empty
        if (empty($this->localData[$locale])) {
            // get localize path
            $localizePath = $this->getLocalizePath($locale);
            // check if localize file exists
            if (! File::exists($localizePath)) {
                // create localize file
                File::put($localizePath, json_encode([]));
            }
            // get localize data
            $this->localData[$locale] = json_decode(File::get($localizePath), true);

        }

        return $this->localData[$locale];
    }

    /**
     * Get the localized value for the given key.
     */
    public function localize(string $key, ?string $default_value = null, ?string $locale = null): string
    {
        // get locale
        $locale = $locale ?? app()->getLocale();
        // get localize data
        $local = $this->getLocalizeData($locale);
        // format key
        $formattedKey = $this->formatKey($key);

        // Find the key in the localized data, or use the default value if not found.
        if (array_key_exists($formattedKey, $local) === false) {
            // If the key is not found, store the default value in the localization file.
            $value = $default_value ?? $this->keyToValue($formattedKey);
            // Store the default value in the localization file.
            $this->storeLocal($key, $value, $locale);
        } else {
            // If the key is found, use the localized value.
            $value = $local[$formattedKey];
        }

        return $value;
    }

    /**
     * Format the given key.
     */
    public function formatKey(string $key): string
    {
        // trim white space
        $formattedKey = trim($key);
        // remove special characters
        $formattedKey = preg_replace('/[.,\/\\\\\s-]|(["\'])/', '_', $formattedKey);
        // remove multiple underscore
        $formattedKey = preg_replace('/_+/', '_', $formattedKey);
        // remove underscore from start and end
        $formattedKey = trim($formattedKey, '_');
        // lowercase
        $formattedKey = strtolower($formattedKey);

        return $formattedKey;
    }

    /**
     * Convert the given key to a value.
     */
    public function keyToValue(string $key): string
    {
        // remove Undersore to space and uc first
        return ucfirst(str_replace('_', ' ', $key));
    }

    /**
     * Store the given key and value in the localization file for the given locale.
     */
    public function storeLocal(string $key, ?string $value = null, ?string $locale = null): void
    {
        // get locale
        $locale = $locale ?? app()->getLocale();
        // get localize path
        $localizePath = $this->getLocalizePath($locale);
        // format key
        $formattedKey = $this->formatKey($key);
        // get localize data
        $local = $this->getLocalizeData($locale);

        // If the value is not provided, use the formatted key as the value.
        $value = $value ?? $formattedKey;

        // Update the localization data.
        $local[$formattedKey] = htmlentities($value, ENT_QUOTES, 'UTF-8');

        // Write the updated data back to the file.
        File::put($localizePath, json_encode($local));

        // Update the cached data for this locale.
        $this->localData[$locale] = $local;
    }

    /**
     * Store the given key and value in the localization file for the given locale.
     */
    public function bulkStore(array $local, ?string $locale = null): void
    {
        // get locale
        $locale = $locale ?? app()->getLocale();
        // get localize path
        $localizePath = $this->getLocalizePath($locale);
        // get localize data
        $localData = $this->getLocalizeData($locale);
        // marge two array
        $local = array_merge($localData, $local);
        // Write the updated data back to the file.
        File::put($localizePath, json_encode($local));
        // Update the cached data for this locale.
        $this->localData[$locale] = $local;
    }

    /**
     * Delete the given key from the localization file for the given locale.
     */
    public function deleteLocal(string $key, ?string $locale = null): void
    {
        // get locale
        $locale = $locale ?? app()->getLocale();
        // get localize path
        $localizePath = $this->getLocalizePath($locale);
        // format key
        $formattedKey = $this->formatKey($key);
        // get localize data
        $local = $this->getLocalizeData($locale);

        // Remove the key from the localization data.
        unset($local[$formattedKey]);

        // Write the updated data back to the file.
        File::put($localizePath, json_encode($local));

        // Update the cached data for this locale.
        $this->localData[$locale] = $local;
    }

    /**
     * Get the localized value for the given key.
     */
    public function autoTranslate(string $source_local, string $target_local)
    {
        try {
            // source local data
            $source_local_data = $this->getLocalizeData($source_local);
            // target local data
            $target_local_data = $this->getLocalizeData($target_local);
            $pattern = ' || ';
            //
            $transalate_data = [];
            $format_local = null;
            foreach ($source_local_data as $key => $value) {
                $value_length = Str::length($value);
                $format_local_length = Str::length($format_local);
                // check $format_local length is higer then 700
                if ($format_local_length >= 720 || ($value_length + $format_local_length) >= 800) {
                    $transalate_data = $this->translateAndCpmprased($source_local, $target_local, $format_local, $pattern, $transalate_data);
                    $format_local = null;
                } else {
                    $format_local .= $pattern;
                    $format_local .= $value;
                }
            }
            $transalate_data = $this->translateAndCpmprased($source_local, $target_local, $format_local, $pattern, $transalate_data);
            $i = 0;
            foreach ($source_local_data as $key => $value) {
                $source_local_data[$key] = str_replace('|', '', $transalate_data[$i] ?? $value);
                $i++;
            }
            $localizePath = $this->getLocalizePath($target_local);
            File::put($localizePath, json_encode($source_local_data));
        } catch (\Throwable $th) {
            throw $th;
        }

    }

    /**
     * Get the localized value for the given key.
     *
     * @param  mixed  $source_local
     * @param  mixed  $target_local
     * @param  mixed  $text
     * @param  mixed  $pattern
     * @param  mixed  $trans_comprased
     * @return mixed
     */
    private function translateAndCpmprased($source_local, $target_local, $text, $pattern = ' || ', $trans_comprased = []): array
    {
        $tr = new \Stichoza\GoogleTranslate\GoogleTranslate();
        $tr->setSource($source_local == $target_local ? null : $source_local);
        $tr->setTarget($target_local);
        $trans = $tr->translate($text);
        $trans_array = explode($pattern, $trans);

        return array_merge($trans_comprased, $trans_array);
    }
}
