<template>
    <div>Main Page</div>
    <div v-for="listing in listings" :key="listing.id">
        <Link :href="`/listing/${listing.id}`">
            <ListingAddress :listing="listing" />
        </Link>
    </div>
</template>
<!-- <script setup>
import { Link } from "@inertiajs/vue3";
import  MainLayout  from '@/Layouts/MainLayout.vue'
import ListingAddress from "@/components/ListingAddress.vue";
defineProps({
    listings: Array,
});
</script> -->

<script setup>
import { Link } from "@inertiajs/vue3";
import { defineProps } from "vue";
import ListingAddress from "@/components/ListingAddress.vue";
const { listings } = defineProps(["listings"]); // Wrap listings in the props object
</script>
