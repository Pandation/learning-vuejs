<template>
  <div class="container">
    <h1>User Generator</h1>
    <h2>{{ firstName }} {{ name }}</h2>
    <img :class="gender"  :src="picture" :alt="firstName" />
    <h3>Email : {{ email }}</h3>
    <button :class="gender" @click="getNewUser()">Generate another one !</button>
  </div>
</template>

<script>
export default {
  name: "UserGenerator",
  data() {
    return {
      firstName: "John",
      name: "Doe",
      email : 'johndoe@gmail.com',
      picture : "https://randomuser.me/api/portraits/men/10.jpg",
      gender: "male",
    };
  },
  methods: {
    async getNewUser() {
      const json = await fetch("https://randomuser.me/api/");
      const datas = (await json.json()).results[0];
        this.firstName = datas.name.first;
        this.name = datas.name.last;
        this.gender = datas.gender;
        this.picture = datas.picture.large;
        this.email = datas.email;
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
h3 {
    font-weight: normal;
}
img {
  border-radius: 50%;
  border: solid #333 5px;
  margin-bottom: 1rem;
}

.male {
    border-color: steelblue;
    background-color: steelblue;
    
}

.female {
    border-color: pink;
    background-color: pink;
    color: #333;
    
}

button {
    font-weight: bold;
    color: #FFF;
    padding: 15px;
}
</style>
