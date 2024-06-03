<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    function register(Request $req){
        $user = new User;
        $user->name = $req->name;
        $user->email = $req->email;
        $user->password = Hash::make($req->password);
        $user->save();
        return $user;
    }
    function login(Request $request){
        $email = $request->email;
        $password = $request->password;

        $user = User::where('email', $email)->first();
        if ($email == $user->email and Hash::check($password, $user->password)) {
            return $user;
        }
        else{
            return "wrong";
        }
    }

}
