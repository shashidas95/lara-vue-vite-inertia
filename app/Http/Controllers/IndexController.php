<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function Index()
    {
        return inertia("Index/Index", 
    ['message'=>"hello from laravel"]);
    }
    public function Show()
    {
        return inertia("Index/Show");
    }
}
