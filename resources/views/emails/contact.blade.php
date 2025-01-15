<x-mail::message>
# Nuevo Mensaje de Contacto

Se ha recibido un nuevo mensaje a través del formulario de contacto:

<x-mail::panel>
**Detalles del contacto:**

Nombre: {{ $data['nombre'] }} {{ $data['apellido'] }}
Email: {{ $data['email'] }}
Teléfono: {{ $data['telefono'] }}
</x-mail::panel>

<x-mail::panel>
**Mensaje:**
{{ $data['mensaje'] }}
</x-mail::panel>

<x-mail::table>
| Campo | Valor |
| ----- | ----- |
| Fecha | {{ now()->format('d/m/Y H:i:s') }} |
| IP | {{ request()->ip() }} |
</x-mail::table>

Gracias,<br>
{{ config('app.name') }}
</x-mail::message>