<template>
    <div>Main Page</div>

    <div v-for="listing in listings" :key="listing.id">
        <div>
            <Link :href="`/listing/${listing.id}`">
                <ListingAddress :listing="listing" />
            </Link>
        </div>
        <div>
            <Link :href="`/listing/${listing.id}/edit`"> Edit</Link>
        </div>
        <div>
            <Link :href="`/listing/${listing.id}`" method="delete">
                Delete</Link
            >
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import { defineProps } from "vue";
import ListingAddress from "@/components/ListingAddress.vue";
const { listings } = defineProps(["listings"]); // Wrap listings in the props object
</script>
