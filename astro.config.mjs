// @ts-check
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://draaniracastro.com',
    output: "static", // Esto le dice a Astro que construya HTML puro (perfecto para GitHub Pages)
    
    // Mantenemos tus configuraciones visuales intactas
    vite: {
        plugins: [
            tailwindcss(),
            Icons({
                compiler: "astro",
            }),
        ],
    }
});