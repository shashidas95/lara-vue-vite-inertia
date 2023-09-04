<template>
    <Link  href="/"> mainlayout </Link>&nbsp;
    <Link  href="/hello"> showlayout </Link>
    <slot></slot>
</template>
<script setup>
import {Link} from '@inertiajs/vue3'
</script>
