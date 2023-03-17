<template>
    <img :src="store.sunIcon" alt="Sun">
</template>

<script setup>
import { useGlobalStore } from '../stores';
const store = useGlobalStore()
</script>

<style>
        
</style>