<template>
    <img 
        :src="mainImg" 
        alt="Main-Img"
        class="mainImg"
    >
</template>

<script>
    export default {
        name: 'main-img',
        data(){
            return{
                mainImg: './img/main.png'
            }
        }
    }
</script>

<style scoped lang="scss">
    .mainImg{
        width: 100%;
    }
</style>
