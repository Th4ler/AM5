<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCrudResource;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = User::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("email")) {
            $query->where("email", "like", "%" . request("email") . "%");
        }

        $users = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("User/Index", [
            "users" => UserCrudResource::collection($users),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("User/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        $data['email_verified_at'] = time();
        $data['password'] = bcrypt($data['password']);
        User::create($data);

        return to_route('user.index')
            ->with('success', 'Usuario creado.');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user, Task $task)
    {
        $tasks = Task::query()
        ->where(function ($query) {
            $query->where('created_by', auth()->id())
                  ->orWhere('updated_by', auth()->id());
        });

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $tasks->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $tasks->where("status", request("status"));
        }

        $tasks = $tasks->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("User/Show", [
            'user' => new UserCrudResource($user),
            'tasks' => TaskResource::collection($tasks),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return inertia('User/Edit', [
            'user' => new UserCrudResource($user),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        $password = $data['password'] ?? null;
        if ($password) {
            $data['password'] = bcrypt($password);
        } else {
            unset($data['password']);
        }
        $user->update($data);

        return to_route('user.index')
            ->with('success', "Fue actualizado el usuario \"$user->name\".");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $name = $user->name;
        $user->delete();
        return to_route('user.index')
            ->with('success', "El usuario \"$name\" fue eliminado.");
    }
}
