<template>
    <Link href="/listing"> Main Page </Link>&nbsp;
    <Link href="/hello"> Show page </Link>
    <div v-if="flashSuccess">
        {{ flashSuccess }}
    </div>
    <slot> default </slot>
</template>
<script setup>
import { computed } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
const page = usePage();
const flashSuccess = computed(() => page.props.value.flash.success);
</script>
