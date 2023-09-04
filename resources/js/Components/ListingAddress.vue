<script setup>
defineProps({
    listing: Object,
});
</script>
<template>
    <span>
        {{ listing.street_nr }}, {{ listing.street }}, {{ listing.city }},{{
            listing.code
        }}, for $ {{ listing.price }}
    </span>
</template>
