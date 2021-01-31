<template>
  <div id="app">
    <h1>Test for Dnipro Innovation Box</h1>
    <hr>
    <Header />
    <hr>
    <router-view />
  </div>
</template>

<script>
// Components
import Header from './components/Header.vue';

export default {
  // Components
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1070px;
  margin: 60px auto 0;
  padding: 0 30px;
}
</style>
