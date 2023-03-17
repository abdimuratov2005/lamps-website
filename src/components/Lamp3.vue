<template>
    <img :src="store.lamp3" alt="Lamp" class="lamp3">
</template>

<script setup>
import { useGlobalStore } from '../stores';
const store = useGlobalStore()
</script>

<style>
    .lamp3{
        width: 158px;
        height: 580px;
    } 
</style>