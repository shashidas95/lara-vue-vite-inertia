import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';
import { ZiggyVue } from 'ziggy'
import '../css/app.css'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 250,

    // The color of the progress bar.
    color: '#29d',

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: false,
})

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = await pages[`./Pages/${name}.vue`]
        page.default.layout = page.default.layout || MainLayout
        return page

    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('DefaultLayout', MainLayout) // Set the default layout component
            .mount(el)
    },
});

