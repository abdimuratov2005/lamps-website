<template>
    <div 
        class="nav__icon"
        @click="menuBar =! menuBar"
        :class="{active: menuBar}"
    >
        
        <span></span>
    </div>
    <nav
        class="nav__body"
        :class="{active: menuBar}"
    >
        <ul class="nav__list">
            <li 
                class="nav__item" 
                v-for="navItem in navItems" 
                :key="navItem.id"
            >
                <a href="#" class="nav__link">
                    {{ navItem.value }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data(){
            return{
                menuBar: false,
                navItems: [
                    {id: 1, value: 'COLLESCTIONS'},
                    {id: 2, value: 'BLOG'},
                    {id: 3, value: 'ABOUT'},
                    {id: 4, value: 'CONTACTS'}
                ]
            }
        }
    }
</script>
