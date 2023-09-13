<template>
    <div class="container">
        <form @submit.prevent="create" method="post">
            <div class="grid grid-cols-6 gap-4">
                <div class="col-span-2">
                    <label class="label">Beds</label>
                    <input
                        type="text"
                        id="beds"
                        class="input"
                        v-model.number="form.beds"
                    />

                    <div v-if="form.errors.beds" class="input-error">
                        {{ form.errors.beds }}
                    </div>
                </div>

                <div class="col-span-2">
                    <label class="label">Baths</label>
                    <input
                        type="text"
                        id="baths"
                        class="input"
                        v-model.number="form.baths"
                    />
                    <div v-if="form.errors.baths" class="input-error">
                        {{ form.errors.baths }}
                    </div>
                </div>

                <div class="col-span-2">
                    <label class="label">Area</label>
                    <input
                        type="text"
                        id="area"
                        class="input"
                        v-model.number="form.area"
                    />
                    <div v-if="form.errors.area" class="input-error">
                        {{ form.errors.area }}
                    </div>
                </div>

                <div class="col-span-2">
                    <label class="label">City</label>
                    <input
                        type="text"
                        id="city"
                        class="input"
                        v-model.number="form.city"
                    />
                    <div v-if="form.errors.city" class="input-error">
                        {{ form.errors.city }}
                    </div>
                </div>
                <div class="col-span-2">
                    <label class="label">Code</label>
                    <input
                        type="text"
                        id="code"
                        class="input"
                        v-model.number="form.code"
                    />
                    <div v-if="form.errors.code" class="input-error">
                        {{ form.errors.code }}
                    </div>
                </div>
                <div class="col-span-2">
                    <label class="label">Street</label>
                    <input
                        type="text"
                        id="street"
                        class="input"
                        v-model.number="form.street"
                    />
                    <div v-if="form.errors.street" class="input-error">
                        {{ form.errors.street }}
                    </div>
                </div>
                <div class="col-span-2">
                    <label class="label">Street No</label>
                    <input
                        type="text"
                        id="street_nr"
                        class="input"
                        v-model.number="form.street_nr"
                    />
                    <div v-if="form.errors.street_nr" class="input-error">
                        {{ form.errors.street_nr }}
                    </div>
                </div>
                <div class="col-span-2">
                    <label class="label">price</label>
                    <input
                        type="text"
                        id="price"
                        class="input"
                        v-model.number="form.price"
                    />
                    <div v-if="form.errors.price" class="input-error">
                        {{ form.errors.price }}
                    </div>
                </div>

                <div class="col-span-6">
                    <button type="submit" class="btn-primary">Create</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
import { reactive } from "vue";
import { useForm } from "@inertiajs/vue3";
const form = useForm({
    beds: 0,
    baths: 0,
    area: 0,
    city: null,
    code: 0,
    street: null,
    street_nr: 0,
    price: 0,
});
const create = () => {
    form.post(route("listing.store"));
};
</script>
<style scoped></style>
