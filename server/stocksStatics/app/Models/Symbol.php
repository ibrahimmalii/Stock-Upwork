<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Symbol extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'keys'
    ];

    protected $casts = [
        'keys' => 'array'
    ];
}