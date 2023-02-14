<template>
    <div id="main__property" class="main__property property">
        <router-view />
        <nav class="property__nav nav-property">
            <ul class="nav-property__list">
                <li 
                    class="nav-property__item"
                >
                    <router-link to="/lamp1">
                        <Lamp1 class="smallLamp"/>
                    </router-link>
                </li>
                <li 
                    class="nav-property__item"
                >
                    <router-link to="/lamp2">
                        <Lamp2 class="smallLamp"/>
                    </router-link>
                </li>
                <li 
                    class="nav-property__item"
                >
                    <router-link to="/lamp3">
                        <Lamp3 class="smallLamp"/>
                    </router-link>
                </li>
            </ul>
            <div class="day-night">
                <router-link to="">
                    <li class="sun">
                        <Sun />
                    </li>
                </router-link>
                <router-link to="">
                    <li class="night">
                        <Night />
                    </li>
                </router-link>
            </div>
        </nav>
    </div>
    
</template>

<script>
import Lamp1 from '../components/Lamp1.vue';
import Lamp2 from '../components/Lamp2.vue';
import Lamp3 from '../components/Lamp3.vue';
import Night from '../components/Night.vue';
import Sun from '../components/Sun.vue';
import MainProperty1 from '../pages/MainProperty1.vue';

    export default {
    components: { Lamp1, Lamp2, Lamp3, Sun, Night, MainProperty1 }
}
</script>

<style>
    .nav-property__item{
        
    }
    .smallLamp{
        width: 34px;
        height: 125px;
    }
</style>