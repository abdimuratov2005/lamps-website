<template>
    <div 
        class="nav__icon"
        @click="store.activeMenu"
        :class="{active: store.menuBar}"
    >
        <span></span>
    </div>
    <nav
        class="nav__body"
        :class="{active: store.menuBar}"
    >
        <ul class="nav__list">
            <li 
                class="nav__item" 
                v-for="navItem in store.navItems" 
                :key="navItem.id"
            >
                <a href="#" class="nav__link">
                    {{ navItem.value }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useGlobalStore } from '../stores';
const store = useGlobalStore()
</script>
