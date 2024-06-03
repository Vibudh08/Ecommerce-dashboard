<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function addProduct(Request $req)
    {
        $product = new Product;
        $product->name = $req->name;
        $product->description = $req->description;
        $product->price = $req->price;
        $product->file_path = $req->file("file")->store("products");
        $product->save();
        return $product;
    }
    function list()
    {
        $result = Product::all();
        return $result;
    }
    function delete($id)
    {
        $result = Product::where('id', $id)->delete();
        if ($result) {
            return ["result" => "Product has been deleted"];
        }
    }
    function getProduct($id)
    {
        $result = Product::find($id);
        return $result;
    }
    function updateProduct($id, Request $req)
    {
        $product = Product::find($id);
        // return $req->input();
        $product->name = $req->name;
        $product->description = $req->description;
        $product->price = $req->price;
        if ($req->file('file')) {
            $product->file_path = $req->file("file")->store("products");
        }
        $product->save();
        return $product;
    }
    function search($key)
    {
        if($key){
            return Product::where('name', 'LIKE', "%$key%")->get();
        }
        else{
            return "";
        }
    }
}
