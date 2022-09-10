<template>
  <p>
    Thank you for taking the time to check out this little project. The data
    that can be seen within the Disney Characters list come from a disney
    fan-made API, which can be found here:
    <a href="https://disneyapi.dev/" target="_blank">https://disneyapi.dev/</a>
  </p>

  <router-link class="disney-entry" to="/characters">
    <span> Continue to Disney Characters </span>
    <font-awesome-icon icon="fa-solid fa-arrow-right" />
  </router-link>
</template>

<style scoped>
.disney-entry {
  background-color: #006e99;
  border-radius: 10px;
  color: white;
  padding: 10px;
  text-decoration: none;
  margin: 15px auto 0;
  width: 293px;
  display: block;
  text-align: center;
  position: relative;
  transition: all 0.15s ease-in;
}

.disney-entry .fa-arrow-right {
  position: absolute;
  opacity: 0;
  right: 15%;
  top: 50%;
  transform: translate(-10%, -50%);
  transition: all 0.15s ease-in;
}

.disney-entry:hover .fa-arrow-right {
  right: 5%;
  opacity: 1;
}
</style>
