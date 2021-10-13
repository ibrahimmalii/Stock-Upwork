<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockPropertie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'comment'
    ];
}
