<template>
    <div
        class="property__info"
        v-for="lamp in store.lamps_3"
        :key="lamp.id"
        >
        <div>
            <strong>Material: </strong>
            {{ lamp.material }}
        </div>
        <br>
        <div>
            <strong>Dimensions (cm): </strong>
            {{ lamp.dimensions }}
        </div>
        <br>
        <div>
            <strong>Net Weight: </strong>
            {{ lamp.weight }}
        </div>
        <br>
        <div>
            <strong>Electrification: </strong>
            <br>
            {{ lamp.electrification }}
        </div>
    </div>
    <div class="property__img">
        <lamp-3 />
    </div>
</template>

<script setup>
import { useGlobalStore } from '../stores';
import Lamp3 from '../components/Lamp3.vue';
const store = useGlobalStore()
</script>

<style>
        
</style>