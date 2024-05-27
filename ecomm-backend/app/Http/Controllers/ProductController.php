<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function addProduct(Request $req){
        $product = new Product;
        $product->name = $req->name;
        $product->description = $req->description;
        $product->price = $req->price;
        $product->file_path = $req->file("img")->store("products");
        $product->save();
        return $product;
    }
}

