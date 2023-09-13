<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Box v-for="listing in listings" :key="listing.id">
            <div>
                <Link :href="route('listing.show', { listing: listing.id })">
                    <Price :price="listing.price" class="text-2xl font-bold" />
                    <ListingSpace :listing="listing" class="text-lg" />
                    <ListingAddress :listing="listing" class="text-gray-500" />
                </Link>
            </div>
            <div>
                <Link :href="route('listing.edit', listing.id)" as="button"
                    >Edit Listing</Link
                >
            </div>
            <div>
                <Link
                    :href="route('listing.destroy', listing.id)"
                    method="delete"
                    as="button"
                >
                    Delete</Link
                >
            </div>
        </Box>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

import { defineProps } from "vue";
import ListingAddress from "@/components/ListingAddress.vue";
const { listings } = defineProps(["listings"]); // Wrap listings in the props object
import Box from "@/Components/UI/Box.vue";
import ListingSpace from "@/Components/ListingSpace.vue";
import Price from "@/Components/Price.vue";
</script>
