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
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  border: none;
}
</style>
