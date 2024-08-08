import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // Vue 3 has no way to automatically detect if SSR is used — so nuxt,
        // gridsome, and other SSR frameworks must manually set the ssr option
        // to true in order to properly render the application.
        ssr: true,
        components,
        directives,
    });
    app.vueApp.use(vuetify);
});
