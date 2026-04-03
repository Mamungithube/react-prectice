// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'navy-blue': '#1A3765', // বাটন এবং হেডারের জন্য
                'brand-blue': '#1D4ED8', // সোশ্যাল বাটনের জন্য
            },
        },
    },
    plugins: [],
}