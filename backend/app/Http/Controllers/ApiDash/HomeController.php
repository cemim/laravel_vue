<?php

namespace App\Http\Controllers\ApiDash;

use App\Http\Controllers\Controller;
use App\Models\Models\Client;
use App\Models\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {        
        $clients = Client::all();

        $products = Product::all();
        header('Content-Type: application/json'); 


        return response()->json([
            'clients' => $clients,
            'products' => $products,
        ], options: JSON_PRETTY_PRINT);
    }
}
