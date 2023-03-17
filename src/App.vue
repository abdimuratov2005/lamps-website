<template>
  <div id="app" class="app">
    <Header />
    <my-main />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import MyMain from './components/Main.vue';
</script>

<style>
    .app{
      background: #DBEEEE;
      max-width: 1600px;
      margin: 0 auto;
      overflow: hidden;
    }
</style>