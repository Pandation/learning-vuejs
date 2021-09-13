<template>
  <button @click="$emit('btn-click')" :style="{ background: color }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
};
</script>

<style scoped>
button {
  color: white;
  padding: 7px 15px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
