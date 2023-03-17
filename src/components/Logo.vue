<template>
    <img 
        :src="store.logo" 
        alt="Logo-Ease" 
        class="logo"
    >
</template>

<script setup>
import { useGlobalStore } from '../stores';
const store = useGlobalStore();

</script>

<style scoped lang="scss">
    .logo{
        @media (max-width: 1023.98px) {
            max-width: 180px;
        }
        @media (max-width: 767.98px) {
            max-width: 150px;
        }
    }
</style>