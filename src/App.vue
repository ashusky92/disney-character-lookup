<template>
  <router-view name="header" />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

* {
  font-family: arial, sans-serif;
  box-sizing: border-box;
}

#app {
  max-width: 992px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 100vh;
}

header h1 {
  font-family: "Satisfy", cursive;
}
</style>
