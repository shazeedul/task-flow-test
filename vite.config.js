import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

export default defineConfig(() => {
    dotenv.config();
    return {
        plugins: [
            laravel({
                input: ["resources/sass/app.scss", "resources/js/app.js"],
                refresh: true,
            }),
            react(),
        ],
    };
});
