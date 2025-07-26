<?php

namespace App\Http\Controllers;

use App\Models\School;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class SchoolRegistrationController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            // Owner validation
            'owner.name' => 'required|string|max:255',
            'owner.email' => 'required|string|email|max:255|unique:users,email',
            'owner.password' => 'required|string|min:8|confirmed',
            'owner.phone' => 'nullable|string|max:20',

            // School validation
            'school.name' => 'required|string|max:255',
            'school.subdomain' => 'required|string|max:50|unique:schools,subdomain',
            'school.country' => 'required|string|max:100',
            'school.state' => 'nullable|string|max:100',
            'school.city' => 'nullable|string|max:100',
            'school.address' => 'nullable|string|max:255',
            'school.email' => 'required|email|max:255',
            'school.phone' => 'nullable|string|max:20',
            'school.principal_name' => 'required|string|max:255',
            'school.principal_email' => 'required|email|max:255',
            'school.principal_phone' => 'nullable|string|max:20',

            // Admin validation
            'admin.name' => 'required|string|max:255',
            'admin.email' => 'required|email|max:255|unique:users,email',
            'admin.password' => 'required|string|min:8|confirmed',
            'admin.phone' => 'nullable|string|max:20',

            'terms' => 'accepted',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create owner account
        $owner = User::create([
            'name' => $request->input('owner.name'),
            'email' => $request->input('owner.email'),
            'password' => Hash::make($request->input('owner.password')),
            'phone' => $request->input('owner.phone'),
        ]);

        // Create school
        $school = School::create([
            'owner_id' => $owner->id,
            'name' => $request->input('school.name'),
            'subdomain' => Str::slug($request->input('school.subdomain')),
            'country' => $request->input('school.country'),
            'state' => $request->input('school.state'),
            'city' => $request->input('school.city'),
            'address' => $request->input('school.address'),
            'email' => $request->input('school.email'),
            'phone' => $request->input('school.phone'),
            'principal_name' => $request->input('school.principal_name'),
            'principal_email' => $request->input('school.principal_email'),
            'principal_phone' => $request->input('school.principal_phone'),
            'admin_name' => $request->input('admin.name'),
            'admin_email' => $request->input('admin.email'),
            'admin_password' => Hash::make($request->input('admin.password')),
            'admin_phone' => $request->input('admin.phone'),
        ]);

        return response()->json([
            'message' => 'Registration successful',
            'user' => $owner,
            'school' => $school
        ], 201);
    }
}
