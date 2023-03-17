<template>
    <img :src="store.nightIcon" alt="Night">
</template>

<script setup>
import { useGlobalStore } from '../stores';
const store = useGlobalStore()
</script>

<style>
        
</style>