import {createRouter, createWebHistory} from "vue-router";
import UserGenerator from "@/views/UserGenerator.vue";
import TasksTracker from "@/views/TasksTracker.vue";

const routes = [
  {
    path: "/user-generator",
    component: UserGenerator,
  },
  {
    path: "/tasks-tracker",
    component: TasksTracker,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
