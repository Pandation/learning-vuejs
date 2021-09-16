<template>
  <nav>
      <router-link to="/user-generator">UserGenerator</router-link>
      <router-link to="/tasks-tracker">TasksTracker</router-link>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
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
    }

    .active {
      text-decoration: underline;
    }

</style>