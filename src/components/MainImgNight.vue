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
        border-radius: 20px;
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
