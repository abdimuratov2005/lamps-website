<template>
    <main id="main" class="main">
        <div class="main__container">
            <div class="main__content">
                <MainText />
                <MainProperty />
            </div>
            <div class="main__img">
                <MainImg class="mainImage"/>
                <Lamp1
                    class="changeInImg"
                    :class="{changeImg : changeImgActive}"
                />
            </div>
        </div>
    </main>
</template>

<script>
    import MainProperty from '../components/MainProperty.vue';
    import Lamp1 from './Lamp1.vue';
    import MainImg from './MainImg.vue';
    import MainText from './MainText.vue';
    export default {
        components:{
            MainText,
            MainImg,
            MainProperty,
            Lamp1
        }   
    }
</script>

<style lang="scss">
    .main__img{
        position: relative;
    }
    .changeInImg{
        width: 98px;
        height: 360px;
        position: absolute;
        left: 200px;
        top: 0;
    }
</style>