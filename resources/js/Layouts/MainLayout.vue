<template>
    <Link href="/listing"> All Listing </Link>&nbsp;
    <Link href="/listing/create"> New Listing </Link>
    <div v-if="flashSuccess" class="success">
        {{ flashSuccess }}
    </div>
    <Header
        class="border-b border-gray-200 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300"
    >
        <div class="container mx-auto">
            <nav class="p-4 flex items-center justify-between">
                <div>X</div>
                <div>Y</div>
                <div>Z</div>
            </nav>
        </div>
    </Header>
    <slot> Default </slot>
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
