<template>
    <MainLayout>
        <Link href="/hello">show</Link>
        <div>{{ message }}</div>
    </MainLayout>
</template>
<script setup>
import MainLayout from "../../Layouts/MainLayout.vue";
import { Link } from "@inertiajs/vue3";

defineProps({
    message: String,
});
</script>
