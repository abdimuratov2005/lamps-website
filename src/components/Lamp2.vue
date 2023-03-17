<template>
    <img :src="store.lamp2" alt="Lamp" class="lamp2">
</template>

<script setup>
import { useGlobalStore } from '../stores';
const store = useGlobalStore()
</script>

<style>
    .lamp2{
        width: 158px;
        height: 580px;
    }
</style>