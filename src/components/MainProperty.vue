<template>
    <div id="main__property" class="main__property property">

        <router-view />

        <nav class="property__nav nav-property">

            <ul class="nav-property__list" >

                <router-link
                    to="/lamp1"
                    @click="store.changeImgActive1"
                >
                    <li class="nav-property__item">
                        <lamp-1 class="smallLamp"/>
                    </li>
                </router-link>

                <router-link
                    to="/lamp2"
                    @click="store.changeImgActive2"
                >
                    <li class="nav-property__item">
                        <lamp-2 class="smallLamp"/>
                    </li>
                </router-link>

                <router-link 
                    to="/lamp3" 
                    @click="store.changeImgActive3"
                >
                    <li class="nav-property__item">
                        <lamp-3 class="smallLamp"/>
                    </li>
                </router-link>

            </ul>

            <div class="day-night">

                <li class="sun" @click="store.sunMode">
                    <my-sun />
                </li>

                <li class="night" @click="store.nightMode">
                    <my-night />
                </li>

            </div>
            
        </nav>
    </div>
    
</template>

<script setup>
import Lamp1 from './Lamp1.vue';
import Lamp2 from './Lamp2.vue';
import Lamp3 from './Lamp3.vue';
import MyNight from './Night.vue';
import MySun from './Sun.vue';
import { useGlobalStore } from '../stores';
const store = useGlobalStore()
</script>

<style scoped lang="scss">
    .smallLamp{
        width: 34px;
        height: 125px;
        @media (max-width: 767.98px){
            width: 25px;
            height: 90px;
        }
    }
</style>