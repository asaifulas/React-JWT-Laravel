<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGatewaysRequest;
use App\Http\Requests\UpdateGatewaysRequest;
use App\Models\Gateways;

class GatewaysController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreGatewaysRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGatewaysRequest $request)
    {
        // if($request->validated());
        return response()->json(['msg' => $request->secretKey]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gateways  $gateways
     * @return \Illuminate\Http\Response
     */
    public function show(Gateways $gateways)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateGatewaysRequest  $request
     * @param  \App\Models\Gateways  $gateways
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGatewaysRequest $request, Gateways $gateways)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gateways  $gateways
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gateways $gateways)
    {
        //
    }
}
