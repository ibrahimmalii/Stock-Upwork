<?php

namespace App\Http\Controllers;

use App\Models\KeyStatistics;
use Illuminate\Http\Request;

class KeyStatisticsController extends Controller
{
    public function create(Request $request){

        $company = new KeyStatistics();

        // $company->name = 'ibrahim';
        $company = $request;
        // $company->name->company_type = $request->data;

        // $company->save();
        return $request;

        dd($request);
        return $request->data;
        return $request;
    }


}
