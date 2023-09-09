import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import MainLayout from './Layouts/MainLayout.vue';

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = await pages[`./Pages/${name}.vue`]
        page.default.layout = page.default.layout || MainLayout
        return page
        console.log(page);
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('DefaultLayout', MainLayout) // Set the default layout component
            .mount(el)
    },
});

