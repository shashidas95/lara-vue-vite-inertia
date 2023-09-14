<template>
    <div class="flex flex-col-reverse md:grid md:grid-cols-12 gap-4">
        <Box class="md:col-span-7 flex items-center w-full">
            <div class="text-center w-full font-medium text-gray-500">
                No Images
            </div>
        </Box>
        <div class="md:col-span-5 flex flex-col gap-4">
            <Box>
                <template #header> Basic Info </template>
                <Price :price="listing.price" class="text-2xl font-bold" />
                <ListingSpace :listing="listing" class="text-lg" />
                <ListingAddress :listing="listing" class="text-gray-500" />
            </Box>
            <Box>
                <template #header> Monthly Payment </template>
                <div class="text-gray-500 dark:text-gray-400 mt-1">
                    <label class="label">{{ interestRate }} %</label>
                    <input
                        v-model.number="interestRate"
                        type="range"
                        class="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-lg cursor-pointer appearance-none"
                        min="0.1"
                        max="30"
                        step="0.1"
                    />
                </div>
                <div class="text-gray-500 dark:text-gray-400 mt-1">
                    <label class="label">{{ duration }} Years</label>
                    <input
                        v-model.number="duration"
                        type="range"
                        min="3"
                        max="35"
                        step="1"
                        class="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-lg cursor-pointer appearance-none"
                    />
                </div>
                <div class="text-gray-600 dark:text-gray-300 mt-2">
                    <label class="label">Your Monthly Installments</label>
                    <Price :price="monthlyPayment" class="text-2xl" />
                </div>
            </Box>
        </div>
    </div>
</template>
<script setup>
import { Link } from "@inertiajs/vue3";
import ListingAddress from "@/components/ListingAddress.vue";
import ListingSpace from "@/components/ListingSpace.vue";
import Price from "@/components/Price.vue";
import Box from "@/components/UI/Box.vue";
import { ref, computed } from "vue";
import { useMonthlyPayment } from "@/composables/useMonthlyPayment";

const props = defineProps({
    listing: Object,
});
const interestRate = ref(2.5);
const duration = ref(25);

const { monthlyPayment } = useMonthlyPayment(
    props.listing.price,
    interestRate,
    duration
);
</script>
