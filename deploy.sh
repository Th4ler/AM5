#!/bin/bash

# Elimina la carpeta build en la carpeta public
rm -rf public/build

# Ejecuta npm run build para generar una nueva versión de la aplicación
/usr/bin/npm run build
