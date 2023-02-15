<template>
    <div id="main__property" class="main__property property">

        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component"></component>
            </transition>
        </router-view>

        <nav class="property__nav nav-property">

            <ul class="nav-property__list">

                <router-link to="/lamp1">
                    <li class="nav-property__item">
                        <lamp-1 class="smallLamp"/>
                    </li>
                </router-link>

                <router-link to="/lamp2">
                    <li class="nav-property__item">
                        <lamp-2 class="smallLamp"/>
                    </li>
                </router-link>

                <router-link to="/lamp3">
                    <li class="nav-property__item">
                        <lamp-3 class="smallLamp"/>
                    </li>
                </router-link>

            </ul>

            <div class="day-night">

                <router-link to="">
                    <li class="sun">
                        <sun />
                    </li>
                </router-link>

                <router-link to="">
                    <li class="night">
                        <night />
                    </li>
                </router-link>

            </div>
        </nav>
    </div>
    
</template>

<script>
    export default {
        name: "main-property",
    }
</script>

<style>
    .smallLamp{
        width: 34px;
        height: 125px;
    }
    .page-opacity-enter-active,
    .page-opacity-leave-active{
        transition: .6s ease all;
    }
    .page-opacity-enter-from,
    .page-opacity-leave-to{
        opacity: 0;
    }
    
</style>