export default defineNuxtConfig({
    target: 'static', // default is 'server'
    app: {
        baseURL: '/exists.dev/' // baseURL: '/<repository>/'
    },
    modules: ['@nuxtjs/tailwindcss'],
});
