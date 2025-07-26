<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $fillable = [
        'owner_id',
        'name',
        'subdomain',
        'country',
        'state',
        'city',
        'address',
        'email',
        'phone',
        'principal_name',
        'principal_email',
        'principal_phone'
    ];

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function admins()
    {
        return $this->hasMany(User::class)->where('is_school_admin', true);
    }
}
