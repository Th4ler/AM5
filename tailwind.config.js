import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': '#FFFF29',
                'dark-grey': '#4A4A4A',
                'light-grey': '#B9B9B9',
                'background-color': '#f8f8f8',
                'lightBackground': '#f8f5fa', // Un gris claro y elegante
            },
        },
    },

    plugins: [forms],
};
