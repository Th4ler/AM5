# Descripción del proyecto

Proyecto de página web creado con React + Vite, implementando Bootstrap para la construcción de los distintos componentes del proyecto, y Laravel 11 como gestor de bases de datos.

Para clonar el repositorio en tu máquina local:

```sh
git clone https://github.com/Resikrys/am5-project.git
```
Para contribuir al repositorio remoto: 

```sh
git remote add origin https://github.com/Resikrys/am5-project.git
```

# Instalación proyecto React + Vite

Instala el paquete (React + vite) con tu gestor de paquetes favorito

```sh
 npm create vite@latest nombre-del-proyecto --template react
 cd nombre-del-proyecto
 npm install
 npm run dev
```

# Configuración del proyecto vite@latest

* 01: Abre CMD y seleccciona el directorio del proyecto -> cd nombre-del-proyecto
* 02: Selecciona el framework -> React
* 03: Selecciona la variante -> Javascript + SWC

# Dependencias adicionales instaladas

```sh
 npm install bootstrap
 npm install react-bootstrap bootstrap
 npm install react-router-dom
 npm install axios
 npm i bootstrap-icons
 npm install reactjs-flip-card
```

# Integración con Laravel 11
Para integrar Laravel 11 con el proyecto React + Vite instala Laravel 11 en un directorio separado utilizando Composer:

```sh
composer create-project --prefer-dist laravel/laravel nombre-del-proyecto-laravel
```

# Configuración de Laravel 11
* 01: Abre el archivo .env y configura la conexión a la base de datos.
* 02: Ejecuta las migraciones para crear las tablas por defecto en la base de datos:

```sh
php artisan migrate
```

* 03: Ejecuta el comando para una configuración rápida de la api.php:

```sh
php artisan install:api
```

* 04: De ser necesario, configura las cors dentro de config/cors.php. Puedes crearlo con el siguiente comando:

```sh
php artisan config:publish cors
```

# Git Basic Commands:
```sh
git clone https://github.com/Resikrys/am5-project.git
git remote add origin https://github.com/Resikrys/am5-project.git
git add -A
git commit -m "mensaje del commit"
git push origin main
```
