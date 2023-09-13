<script setup>
// defineProps({
//   title: String,
//   likes: Number
// })
defineProps({
    listing: Object,
});
</script>
<template>
    <div>
        <span class="font-bold">{{ listing.beds }}</span> bds
        <span class="text-gray-400">| </span>
        <span class="font-bold">{{ listing.baths }}</span> ba
        <span class="text-gray-400">| </span>
        <span class="font-bold">{{ listing.area }}</span> m²
    </div>
</template>
