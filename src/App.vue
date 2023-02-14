<template>
  <div id="app" class="app">
    <Header />
    <Main />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  export default {
    components: {
    Header,
    Main
}
  }
</script>

<style>
    .app{
      background: #DBEEEE;
      max-width: 1600px;
      margin: 0 auto;
      overflow: hidden;
    }
</style>