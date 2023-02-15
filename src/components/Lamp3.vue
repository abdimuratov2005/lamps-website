<template>
    <img :src="lamp3" alt="Lamp" class="lamp3">
</template>

<script>
    export default {
        name: 'lamp-3',
        data(){
            return{
                lamp3: './img/lamp3.png'
            }
        }
    }
</script>

<style>
    .lamp3{
        width: 158px;
        height: 580px;
    } 
</style>