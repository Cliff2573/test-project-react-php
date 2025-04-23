<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use App\Models\UserInfo;

class UserController extends Controller
{
    public function search(Request $request)
    {
        Log::info('Received search request with query: ' . $request->query('search'));  // 記錄搜尋請求的查詢參數

        $searchQuery = $request->query('search');  // 取得搜尋參數
        $users = UserInfo::where('username', 'like', '%' . $searchQuery . '%')->get();
        return response()->json($users);
    }
}
