<template>
    <main id="main" class="main">
        <div class="main__container">
            
            <div class="main__content">
                <div class="main__title">
                    Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and Kazimir Malevich.<br><br>Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look like a small art objects in your house.
                </div>
                <main-property />
            </div>
            
            <div class="main__img">
                <main-img class="sunny"
                    v-if="store.sun"
                />
                <main-img-night class="dark"
                    v-if="store.night"
                />
                <div v-if="store.img1">
                    <lamp-1
                        :class="$style.changeInImg"
                        style="top: -70px;"
                    />
                </div>
                <div v-if="store.img2">
                    <lamp-2
                        :class="$style.changeInImg"
                        style="top: -30px;"
                    />
                </div>
                <div v-if="store.img3">
                    <lamp-3
                        :class="$style.changeInImg"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import Lamp1 from './Lamp1.vue';
import Lamp2 from './Lamp2.vue';
import Lamp3 from './Lamp3.vue';
import MainImgNight from './MainImgNight.vue'
import MainImg from './MainImg.vue';
import MainProperty from './MainProperty.vue';
import { useGlobalStore } from '../stores';
const store = useGlobalStore();


</script>

<style lang="scss" module>
    .changeInImg{
        width: 98px;
        height: 360px;
        position: absolute;
        left: 230px;
        top: -150px;
        @media (max-width: 1400px){
            left: 300px;
            height: 400px;
            width: 100px;
        }
        @media (max-width: 1023.98px){
            left: 230px;
        }
        @media (max-width: 767.98px){
            left: 150px;
            top: -80px;
            height: 250px;
            width: 70px;
        }
        @media (max-width: 574.98px){
            left: 100px;
            top: -130px;
        }
        @media (max-width: 400px){
            left: 70px;
            width: 60px;
            height: 230px;
        }
        @media (max-width: 350px){
            width: 50px;
            height: 200px;
        }
    }
</style>