import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
    target: 'static', // default is 'server'
    app: {
        baseURL: '/'
    },
    modules: ['@nuxtjs/tailwindcss'],
});
