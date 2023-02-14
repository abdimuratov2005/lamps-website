<template>
    <div 
        id="header" 
        class="header"
        :class="{scrollActive : scrollToY}"
    >
        <div class="header__container">
            <div class="header__logo">
                <a href="#">
                    <Logo />
                </a>
            </div>
            <div class="header__navbar nav">
                <Navbar/>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from './Logo.vue';
    import Navbar from './Navbar.vue';

    export default {
        data(){
            return{
                scrollToY: document.body.scrollY > 0
            }
        },
        components: {
            Logo,
            Navbar
        },
    }
</script>