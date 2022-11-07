<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoredevicesRequest;
use App\Http\Requests\UpdatedevicesRequest;
use App\Models\devices;

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
        return response()->json(['message' => 'Dapat index device controller']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoredevicesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoredevicesRequest $request)
    {
        //
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
    public function destroy(devices $devices)
    {
        //
    }
}
