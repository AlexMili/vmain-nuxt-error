import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // Default value, not needed then but just in case
    ssr: true,
    // import styles
    plugins: [
        "@/plugins/vuetify",
    ],
    devtools: { enabled: true },

    // enable takeover mode
    typescript: { shim: false },

    build: { transpile: ["vuetify"] },
    vite: {
        vue: { template: { transformAssetUrls } },
    },
    routeRules: {
        "/": { prerender: true, },
    },
    compatibilityDate: "2024-07-16",
});
