<template>
    <Link href="/"> Main Page </Link>&nbsp;
    <Link href="/hello"> Show page </Link>
    <slot>Default</slot>
</template>
<script setup>
import { Link } from "@inertiajs/vue3";
</script>
