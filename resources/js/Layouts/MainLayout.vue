<template>
    <header
        class="border-b border-gray-200 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300 w-full"
    >
        <div class="mx-auto">
            <nav
                class="sticky top-0 bg-gradient-to-r from-indigo-500 to-rose-900 p-4 w-full flex items-center justify-between"
            >
                <div class="btn-primary">
                    <Link :href="route('listing.index')"> All Listing </Link>
                </div>
                <div
                    class="text-xl text-indigo-600 dark:text-indigo-300 font-medium text-center"
                >
                    <Link class="text-zinc-200" :href="route('listing.index')">
                        Laravel-Vue-Vite-Inertia
                    </Link>
                </div>
                <div class="btn-primary">
                    <Link :href="route('listing.create')"> +New Listing </Link>
                </div>
            </nav>
        </div>
    </header>

    <main class="container mx-auto p-4">
        <div
            v-if="flashSuccess"
            class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-800 p-2 text-center"
        >
            {{ flashSuccess }}
        </div>
        <slot> Default </slot>
    </main>
</template>
<script setup>
import { computed } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
const page = usePage();

const flashSuccess = computed(() => page.props.flash.success);
</script>

<style scoped>
.success {
    background-color: green;
    color: white;
}
</style>
