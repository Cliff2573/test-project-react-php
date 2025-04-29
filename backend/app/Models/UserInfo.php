<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    protected $table = 'user_info'; // 告訴 Laravel 使用的資料表是 user_info

    protected $primaryKey = 'sn';   // 告訴 Laravel 主鍵是 sn，不是 id

    protected $fillable = ['username', 'phone'];
}
