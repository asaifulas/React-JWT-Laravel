<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatedevicesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        if ($this->input('variable')){
            return [
                'variable'=>'required',
            ];
        }
        else{
            return [
                'deviceId'=>'required',
                'deviceName'=>'required',
                'customer'=>'required'
            ];
        }

    }
}
