<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoredevicesRequest;
use App\Http\Requests\UpdatedevicesRequest;
use App\Models\devices;
use Illuminate\Http\Client\Request;

class DevicesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        // $this->middleware('auth:api');
    }

    public function index()
    {
        $dev = devices::all();
        return response()->json(['message' => 'Dapat index device controller',
                                    'devices'=>$dev]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // $dataIn = request(['deviceId', 'deviceName', 'customer']);
        // $dev = devices::create($dataIn);
        return response()->json(['testmasuk' => request('customer')]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoredevicesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoredevicesRequest $request)
    {
        $request->validated();
        Devices::create([
            'deviceId' => $request->deviceId,
            'deviceName' => $request->deviceName,
            'customer' => $request->customer
        ]);
        return response()->json(['msg' => $request->deviceName]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\devices  $devices
     * @return \Illuminate\Http\Response
     */
    public function show(devices $devices)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\devices  $devices
     * @return \Illuminate\Http\Response
     */
    public function edit(devices $devices)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatedevicesRequest  $request
     * @param  \App\Models\devices  $devices
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatedevicesRequest $request, devices $devices)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\devices  $devices
     * @return \Illuminate\Http\Response
     */
    public function destroy(devices $devices, $id)
    {
        $test = devices::find($id);
        $test->delete();
        return response()->json(['msg' => $test->deviceName]);
    }
}
