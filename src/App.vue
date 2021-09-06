<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <header>
      <h1>CECI EST MON HEADER</h1>
    </header>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <footer><h1>CECI EST MON FOOTER</h1></footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
