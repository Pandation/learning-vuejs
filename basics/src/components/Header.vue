<template>
  <nav>
    <router-link to="/user-generator">UserGenerator</router-link>
    <router-link to="/tasks-tracker">TasksTracker</router-link>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
nav {
  display: flex;
  width: 300px;
  justify-content: space-evenly;
}
a {
  text-decoration: none;
  font-weight: bold;
  font-size: 1.8em;
  margin: 20px;
  color: rgb(31, 156, 104);
  text-shadow: 0 -1px rgb(19, 41, 78);
  position: relative;
}

a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  transform-origin: 50% 0;
  transform: scaleX(0);
  transition: transform 0.2s linear;
  background-color: rgb(31, 156, 104);
}
.router-link-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scaleX(1);
  height: 3px;
  box-shadow: 0 2px 2px rgb(19, 41, 78);
}
</style>
