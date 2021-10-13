<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StockPropertie;

class StockPropertieController extends Controller
{
    public function index(){
        $properties = StockPropertie::all();

        return $properties;
    }

    public function create(Request $request){
        // dd($request);
        // Angular
        $data = StockPropertie::create([
            'title' => $request->title,
            'comment' =>$request->comment
        ]);


        return $data;
    }

    public function update(Request $request ,$id){

        $updatedProperty = StockPropertie::find($id)->update([
            'title' => $request->title,
            'comment' =>$request->comment
        ]);

        $property = StockPropertie::find($id);


        return $property;
    }


    public function delete(){

    }
}
