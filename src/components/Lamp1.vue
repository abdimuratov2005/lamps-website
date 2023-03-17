<template>
    <img :src="store.lamp1" alt="Lamp">
</template>

<script setup>
import { useGlobalStore } from '../stores';
const store = useGlobalStore()
</script>