<template>
  <div class="button-container">
    <p>Page {{ page }} of {{ totalPages }}</p>
    <router-link v-if="page > 1" class="prevButton" :to="prevPage">
      <font-awesome-icon icon="fa-font-solid fa-arrow-left" />
    </router-link>
    <router-link class="nextButton" :to="nextPage">
      <font-awesome-icon icon="fa-font-solid fa-arrow-right" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["page", "totalPages"],
  computed: {
    nextPage() {
      return `/disney-character-lookup/characters/${parseInt(this.page) + 1}`;
    },
    prevPage() {
      var pageUrl;
      if (this.page - 1 < 1) {
        pageUrl = `/disney-character-lookup/characters/1`;
      } else {
        pageUrl = `/disney-character-lookup/characters/${
          parseInt(this.page) - 1
        }`;
      }
      return pageUrl;
    },
  },
};
</script>

<style scoped>
.button-container a {
  background-color: #006e99;
  border-radius: 5px;
  color: white;
  display: inline-block;
  min-width: 75px;
  padding: 10px 5px;
  text-align: center;
  text-decoration: none;
}

.button-container a:hover {
  background-color: #083e54;
}

.button-container .prevButton {
  margin-right: 15px;
}

@media (max-width: 766px) {
  div.button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .button-container p {
    flex-basis: 100%;
    text-align: center;
  }
}
</style>
