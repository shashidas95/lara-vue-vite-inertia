<template>
    <div class="container">
        <form @submit.prevent="update">
            <div class="row">
                <div class="col-25">
                    <label for="beds">Beds</label>
                </div>
                <div class="col-75">
                    <input type="text" id="beds" v-model.number="form.beds" />
                    <div v-if="form.errors.beds">
                        {{ form.errors.beds }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="baths">Baths</label>
                </div>
                <div class="col-75">
                    <input type="text" id="baths" v-model.number="form.baths" />
                    <div v-if="form.errors.baths">
                        {{ form.errors.baths }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="area">Area</label>
                </div>
                <div class="col-75">
                    <input type="text" id="area" v-model.number="form.area" />
                    <div v-if="form.errors.area">
                        {{ form.errors.area }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="city">City</label>
                </div>
                <div class="col-75">
                    <input type="text" id="city" v-model="form.city" />
                    <div v-if="form.errors.city">
                        {{ form.errors.city }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="code">Code</label>
                </div>
                <div class="col-75">
                    <input type="text" id="code" v-model.number="form.code" />
                    <div v-if="form.errors.code">
                        {{ form.errors.code }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="street">Street</label>
                </div>
                <div class="col-75">
                    <input type="text" id="street" v-model="form.street" />
                    <div v-if="form.errors.street">
                        {{ form.errors.street }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="street_nr">Street No</label>
                </div>
                <div class="col-75">
                    <input
                        type="text"
                        id="street_nr"
                        v-model="form.street_nr"
                    />
                    <div v-if="form.errors.street_nr">
                        {{ form.errors.street_nr }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="price">Price</label>
                </div>
                <div class="col-75">
                    <input type="text" id="price" v-model="form.price" />
                    <div v-if="form.errors.price">
                        {{ form.errors.price }}
                    </div>
                </div>
            </div>

            <div class="row mt-5">
                <input type="submit" value="Update" as="button" />
            </div>
        </form>
    </div>
</template>
<script setup>
import { reactive } from "vue";
import { useForm } from "@inertiajs/vue3";
const props = defineProps({
    listing: Object,
});
const form = useForm({
    beds: props.listing.beds,
    baths: props.listing.baths,
    area: props.listing.area,
    city: props.listing.city,
    code: props.listing.code,
    street: props.listing.street,
    street_nr: props.listing.street_nr,
    price: props.listing.price,
});
const update = () => {
    form.put(route("listing.update", { listing: props.listing.id }));
};
</script>
<style scoped></style>
