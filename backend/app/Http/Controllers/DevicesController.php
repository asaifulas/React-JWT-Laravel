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
        $this->middleware('auth:api');
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
        //return
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
    public function update(UpdatedevicesRequest $request, devices $devices, $id)
    {
        // $devices->update($request->validated());
        devices::find($id)->update($request->validated());

        if ($request->variable)return response()->json(['msg' => 'Variable Updated']);

        else return response()->json(['msg' => $request->deviceName]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\devices  $devices
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $device = devices::find($id);
        $device->delete();
        return response()->json(['msg' => $device->deviceName]);
    }

    public function addvariable(devices $devices, $id)
    {
        // $devices->update($request->validated());
        // devices::find($id)->update($request->validated());
        return response()->json(['msg' => 'test']);
    }
}
