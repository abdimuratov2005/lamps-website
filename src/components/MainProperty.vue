<template>
    <div id="main__property" class="main__property property">

        <router-view />

        <nav class="property__nav nav-property">

            <ul class="nav-property__list">

                <router-link to="/lamp1" @click="changeImgActive1">
                    <li class="nav-property__item">
                        <lamp-1 class="smallLamp"/>
                    </li>
                </router-link>

                <router-link to="/lamp2" @click="changeImgActive2">
                    <li class="nav-property__item">
                        <lamp-2 class="smallLamp"/>
                    </li>
                </router-link>

                <router-link to="/lamp3" @click="changeImgActive3">
                    <li class="nav-property__item">
                        <lamp-3 class="smallLamp"/>
                    </li>
                </router-link>

            </ul>

            <div class="day-night">

                <li class="sun" @click="sun">
                    <my-sun />
                </li>

                <li class="night" @click="night">
                    <my-night />
                </li>

            </div>
            
        </nav>
    </div>
    
</template>

<script>
    export default {
        name: "main-property",
        methods: {
            changeImgActive1(){
                this.$emit('changeImgActive1')
            },
            changeImgActive2(){
                this.$emit('changeImgActive2')
            },
            changeImgActive3(){
                this.$emit('changeImgActive3')
            },
            sun(){
                this.$emit('sun')
            },
            night(){
                this.$emit('night')
            }
        }
    }
</script>

<style scoped>
    .smallLamp{
        width: 34px;
        height: 125px;
    }
</style>