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

    public function create(Request $request)
    {
        Log::info('Received create request with data: ' . json_encode($request->all()));  // 記錄新增請求的資料

        $user = new UserInfo();
        $user->username = $request->input('username');
        $user->phone = $request->input('phone');
        $user->save();

        return response()->json([
            'message' => 'User created successfully',
            'data' => $user
        ], 201);
    }

    public function update(Request $request, $sn)
    {
        Log::info('Received update request for user with SN: ' . $sn);  // 記錄更新請求的 SN 參數

        // 查詢使用者
        $user = UserInfo::where('sn', $sn)->first();

        // 如果使用者不存在，回傳 404
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // 更新使用者資料
        $user->username = $request->input('username', $user->username);
        $user->phone = $request->input('phone', $user->phone);
        $user->save();

        // 回傳更新成功訊息
        return response()->json([
            'message' => 'User updated successfully',
            'data' => $user
        ], 200);
    }

    public function delete($sn)
    {
        Log::info('Received delete request for user with SN: ' . $sn);  // 記錄刪除請求的 SN 參數

        // 查詢使用者
        $user = UserInfo::where('sn', $sn)->first();

        // 如果使用者不存在，回傳 404
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // 刪除使用者
        $user->delete();

        // 回傳刪除成功訊息
        return response()->json(['message' => 'User deleted successfully'], 200);
    }

}
