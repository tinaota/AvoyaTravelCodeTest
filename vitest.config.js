import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: "jsdom",
        coverage: {
            provider: "istanbul", // or 'c8'
        },
        include: ["./**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        // setupFiles: "./tests/unit/setup/index.ts",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "."),
            "#app": path.resolve(
                __dirname,
                "./node_modules/nuxt/dist/app/index.d.ts"
            ),
            "#head": path.resolve(
                __dirname,
                "./node_modules/nuxt/dist/app/index.d.ts"
            ),
        },
    },
});
