<template>
    <img 
        :src="store.mainImg" 
        alt="Main-Img"
        class="mainImg"
    >
</template>

<script setup>
import { useGlobalStore } from '../stores';
const store = useGlobalStore()
</script>

<style scoped lang="scss">
    .mainImg{
        width: 100%;
        @media (max-width: 1400px){
            height: 1200px;
            width: 93vw;
        }
        @media (max-width: 1023.98px){
            width: 100%;
        }
        @media (max-width: 767.98px){
            height: 800px;
        }
        @media (max-width: 574.98px){
            height: 600px;
        }
        @media (max-width: 400px){
            height: 500px;
        }
        @media (max-width: 350px){
            height: 400px;
        }
    }
</style>
