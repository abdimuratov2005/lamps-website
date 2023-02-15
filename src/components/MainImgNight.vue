<template>
    <img 
        :src="mainImgNight" 
        alt="Main-Img-Night"
        class="mainImgNight"
    >
</template>

<script>
    export default {
        name: 'main-img-night',
        data(){
            return{
                mainImgNight: './img/main-night.png'
            }
        }
    }
</script>

<style scoped lang="scss">
    .mainImgNight{
        width: 100%;
    }
</style>
