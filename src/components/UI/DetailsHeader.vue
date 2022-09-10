<template>
  <header>
    <h1>Disney Character Details</h1>
    <router-link class="button1" :to="prevPage ? prevPage : '/characters'">
      <font-awesome-icon icon="fa-solid fa-arrow-left" /> Characters
      List</router-link
    >
  </header>
</template>

<script>
export default {
  data() {
    return {
      prevPage: "",
    };
  },
  watch: {
    prevPage(value) {
      console.log(value);
    },
  },
  mounted() {
    this.prevPage = "";
  },
};
</script>

<style scoped>
.button1 {
  background-color: #006e99;
  border-radius: 10px;
  color: white;
  padding: 10px;
  /* margin-left: 15px; */
  text-decoration: none;
}

.button1:hover {
  background-color: #02425c;
}
</style>
