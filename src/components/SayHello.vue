<template>
  <div class="">
    <h1>Say Hello to :</h1>
    <!-- <p><img :src="url" :alt="alt"></p> -->
    <p>{{ firstName }} {{name}}</p>
  </div>
</template>

<script>
export default {
  name: "SayHello",
  data() {
    return {
      firstName: "John",
      name: "Doe",
    };
  },
};
</script>
