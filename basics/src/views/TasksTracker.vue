<template>
  <div class="container">
    <header>
      <h1>Tasks Tracker</h1>
      <Button @btn-click="toggleAddTask" :color="shownAdd ? 'red': 'green'" :text="shownAdd ? 'Close': 'Add Task'" />
    </header>
    <div v-if="shownAdd"><add-task @add-task="addTask"/></div>

    <Tasks
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggleReminder="toggleReminder"
    />
  </div>
</template>

<script>
import AddTask from "../components/AddTask.vue";
import Button from "../components/Button.vue";
import Tasks from "../components/Tasks.vue";

export default {
  name: "TasksTracker",
  data() {
    return {
      tasks: [],
      shownAdd: false,
    };
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "RDV chez le docteur",
        day: "1er Octobre à 14h30",
        reminder: true,
      },
      {
        id: 2,
        text: "Réunion de travail",
        day: "3 Octobre à 13h30",
        reminder: true,
      },
      {
        id: 3,
        text: "Courses",
        day: "4 Octobre à 18h30",
        reminder: true,
      },
    ];
  },
  methods: {
    toggleAddTask() {
      this.shownAdd = !this.shownAdd
    },
    addTask(task) {
      this.tasks = [...this.tasks, { ...task, id: this.tasks.length + 1 }];
    },
    deleteTask(id) {
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleReminder(id) {
      console.log({ id: id - 1, task: this.tasks });
      this.tasks[id - 1].reminder = !this.tasks[id - 1].reminder;
    },
  },
  components: {
    Button,
    Tasks,
    AddTask,
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
