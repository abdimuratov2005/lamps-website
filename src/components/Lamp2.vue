<template>
    <img :src="lamp2" alt="Lamp" class="lamp2">
</template>

<script>
    export default {
        name: 'lamp-2',
        data(){
            return{
                lamp2: './img/lamp2.png'
            }
        }
    }
</script>

<style>
    .lamp2{
        width: 158px;
        height: 580px;
    }
</style>