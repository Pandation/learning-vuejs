<template>
  <div id="app">
    <img alt="Vue logo" width="100" src="./assets/logo.png" />
    <HelloWorld msg="Learning Vue.js !" />
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue"

export default {
  name: "App",
  components: {
    HelloWorld,
    Header
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  margin-bottom: 20px;
  border: solid 1px darkgray;
  border-radius: 5px;
  width: 400px;
  padding: 20px;
}
.flex {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
</style>
