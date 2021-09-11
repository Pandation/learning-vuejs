<template>
  <div id="app">
    <img alt="Vue logo" width="100" src="./assets/logo.png" />
    <HelloWorld msg="Learning Vue.js !" />
    <div class="flex"><UserGenerator />
    <TasksTracker title="Task Tracker" /></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import UserGenerator from "./components/UserGenerator.vue";
import TasksTracker from "./components/TasksTracker.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    UserGenerator,
    TasksTracker,
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
