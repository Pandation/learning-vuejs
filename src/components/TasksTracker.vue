<template>
  <div class="container">
    <header>
      <h1>{{ title }}</h1>
      <Button color="green" text="Add Task" />
    </header>
    <Tasks :tasks="tasks"/>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Tasks from "./Tasks.vue";

export default {
  name: "TasksTracker",
  props: {
    title: String,
  },
  data() {
    return {
      tasks : []
    }
  },
  created() {
    this.tasks = [
      {
        id : 1,
        text : 'RDV chez le docteur',
        day: "1er Octobre à 14h30",
        reminder : true,
      },
      {
        id : 2,
        text : 'Réunion de travail',
        day: "3 Octobre à 13h30",
        reminder : true,
      },
      {
        id : 3,
        text : 'Courses',
        day: "4 Octobre à 18h30",
        reminder : true,
      }
    ]
  },
  components: {
    Button,
    Tasks
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;
}
</style>
