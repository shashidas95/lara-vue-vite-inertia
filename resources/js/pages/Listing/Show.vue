<template>
    <div class="grid grid-cols-12 gap-4">
        <Box class="col-span-7 flex items-center w-full">
            <div class="text-center w-full font-medium text-gray-500">
                No Images
            </div>
        </Box>
        <Box class="col-span-5">
            <Price :price="listing.price" class="text-2xl font-bold" />
            <ListingSpace :listing="listing" class="text-lg" />
            <ListingAddress :listing="listing" class="text-gray-500" />
        </Box>
    </div>
</template>
<script setup>
import { Link } from "@inertiajs/vue3";
import ListingAddress from "@/components/ListingAddress.vue";
import ListingSpace from "@/components/ListingSpace.vue";
import Price from "@/components/Price.vue";

defineProps({
    listing: Object,
});
</script>
