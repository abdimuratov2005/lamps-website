<template>
    <div 
        id="header" 
        class="header"
    >
        <div class="header__container">
            <div class="header__logo">
                <router-link to="/">
                    <logo />
                </router-link>
            </div>
            <div class="header__navbar nav">
                <navbar />
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
import Logo from './Logo.vue';


</script>