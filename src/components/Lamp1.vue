<template>
    <img :src="lamp1" alt="Lamp">
</template>

<script>
    export default {
        name: 'lamp-1',
        data(){
            return{
                lamp1: './img/lamp1.png'
            }
        }
    }
</script>