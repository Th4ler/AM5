<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use Inertia\Inertia;

use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:50',
            'apellido' => 'required|string|max:50',
            'email' => 'required|email',
            'telefono' => 'required|string|max:15',
            'mensaje' => 'required|string|max:500',
        ]);

        // Opcional: Enviar email
        Mail::to('thaler.toro@gmail.com')->send(new ContactFormMail($validated));

        return redirect()->back()->with('success', 'Mensaje enviado correctamente');
    }
}
