<template>
  <nav>
      <a href="/user-generator">UserGenerator</a>
      <a href="/tasks-tracker">TasksTracker</a>
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

</style>