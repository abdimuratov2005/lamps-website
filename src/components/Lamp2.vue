<template>
    <img :src="lamp2" alt="Lamp" class="lamp2">
</template>

<script>
    export default {
        data(){
            return{
                lamp2: './public/img/lamp2.png'
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