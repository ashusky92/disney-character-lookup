<template>
  <div class="loader-container">
    <div class="loader"></div>
    <div class="inner-loader"></div>
  </div>
</template>

<style scoped>
div.loader-container {
  position: relative;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.loader {
  animation: spin 2s linear infinite;
  border: 10px solid #006e993c;
  border-top: 10px solid #006e99;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  position: relative;
}

div.inner-loader {
  animation: spin 2s linear infinite reverse;
  border: 7px solid #006e993c;
  border-bottom: 7px solid #006e99;
  border-radius: 50%;
  height: 75px;
  width: 75px;
  position: absolute;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
