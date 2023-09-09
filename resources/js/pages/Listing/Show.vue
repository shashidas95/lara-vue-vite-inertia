<template>
    <div>Show page</div>
    <Link href="/listing">Index</Link>
    <div>
        <ListingAddress :listing="listing" />
    </div>
</template>
<script setup>
import { Link } from "@inertiajs/vue3";
import ListingAddress from "@/components/ListingAddress.vue";

defineProps({
    listing: Object,
});
</script>
