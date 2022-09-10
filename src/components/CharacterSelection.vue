<template>
  <page-buttons :page="page" :totalPages="totalPages"></page-buttons>
  <p v-if="!characters">Loading...</p>
  <ul v-else class="charactersList">
    <li v-for="character in characters" :key="character._id">
      <router-link :to="'/character/' + character._id">
        <div
          class="character-tile"
          :style="{
            backgroundImage: `url('${character.imageUrl}')`,
          }"
        >
          <h4>{{ character.name }}</h4>
        </div>
      </router-link>
    </li>
  </ul>
  <page-buttons :page="page" :totalPages="totalPages"></page-buttons>
</template>

<script>
import PageButtons from "./UI/PageButtons.vue";

export default {
  components: {
    PageButtons,
  },
  props: ["page"],
  data() {
    return {
      characters: null,
      totalPages: null,
    };
  },
  computed: {
    nextPage() {
      var pageUrl;
      if (this.page + 1 > this.totalPages) {
        pageUrl = `/characters/${this.totalPages}`;
      } else {
        pageUrl = `/characters/${parseInt(this.page) + 1}`;
      }

      return pageUrl;
    },
    prevPage() {
      var pageUrl;
      if (this.page - 1 < 1) {
        pageUrl = `/characters/1`;
      } else {
        pageUrl = `/characters/${parseInt(this.page) - 1}`;
      }
      return pageUrl;
    },
  },
  watch: {
    page() {
      this.getCharacters();
    },
  },
  methods: {
    getCharacters() {
      fetch(`https://api.disneyapi.dev/characters?page=${this.page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.characters = data.data;
          this.totalPages = data.totalPages;
        });
    },
  },
  mounted() {
    this.getCharacters();
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
}

li {
  flex-basis: 25%;
  transition: all 0.1s ease-out;
}

li div.character-tile {
  background-color: rgb(255, 255, 255);
  position: relative;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
}

li div.character-tile:before {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
}

div.character-tile:hover:before {
  opacity: 1;
}

div.character-tile h4 {
  margin: 0;
  color: white;
  font-size: 25px;
  text-align: center;
  text-decoration: none;
  opacity: 0;
  transform: translateY(50%);
  transition: all 0.15s ease-in-out 0.15s;
}

div.character-tile:hover h4 {
  transform: translateY(0);
  opacity: 1;
}

@media (min-width: 767px) {
}

@media (max-width: 766px) {
  li {
    flex-basis: 50%;
  }

  li div.character-tile:before {
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
    opacity: 1;
  }

  div.character-tile h4 {
    display: block;
    opacity: 1;
    position: absolute;
    bottom: 20px;
    transform: translateY(0);
  }
}
</style>
