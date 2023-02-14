<template>
    <img 
        :src="mainImg" 
        alt="Main-Img"
        class="mainImg"
    >
</template>

<script>
    export default {
        data(){
            return{
                mainImg: './public/img/main.png'
            }
        }
    }
</script>

<style scoped lang="scss">
    .mainImg{
        width: 100%;
    }
</style>
