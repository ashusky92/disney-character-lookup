<template>
  <div class="character-details">
    <data-loader v-if="loading"></data-loader>
    <div v-else class="character-info">
      <img
        v-if="character.imageUrl"
        :src="character.imageUrl"
        :alt="character.name"
      />
      <img v-else src="../assets/no-image.png" alt="No Image Available" />
      <h1>{{ character.name }}</h1>
      <div class="character-data">
        <div v-if="alliesCount > 0" class="allies">
          <h3>Allies</h3>
          <ul>
            <li v-for="ally in character.allies" :key="ally">
              <a :href="`https://google.com/search?q=${ally}`">
                {{ ally }}
              </a>
            </li>
          </ul>
        </div>
        <div v-if="enemiesCount > 0" class="enemies">
          <h3>Enemies</h3>
          <ul>
            <li v-for="enemy in character.enemies" :key="enemy">
              <a
                :href="`https://www.google.com/search?q=${enemy}`"
                target="_blank"
              >
                {{ enemy }}</a
              >
            </li>
          </ul>
        </div>
        <div v-if="tvShowsCount > 0" class="shows">
          <h3>TV Shows</h3>
          <ul>
            <li v-for="show in character.tvShows" :key="show">
              <a :href="`https://www.google.com/search?q=${show}`">
                {{ show }}
              </a>
            </li>
          </ul>
        </div>
        <div v-if="filmsCount > 0" class="movies">
          <h3>Movies</h3>
          <ul>
            <li v-for="film in character.films" :key="film">
              <a
                :href="`https://www.google.com/search?q=${film}`"
                target="_blank"
              >
                {{ film }}
              </a>
            </li>
          </ul>
        </div>
        <div v-if="shortFilmsCount > 0" class="movies">
          <h3>Short Films</h3>
          <ul>
            <li v-for="film in character.shortFilms" :key="film">
              <a
                :href="`https://www.google.com/search?q=${film}`"
                target="_blank"
              >
                {{ film }}
              </a>
            </li>
          </ul>
        </div>
        <div v-if="videoGamesCount > 0" class="videoGames">
          <h3>Video Games</h3>
          <ul>
            <li v-for="game in character.videoGames" :key="game">
              <a
                :href="`https://www.google.com/search?q=${game}`"
                target="_blank"
                >{{ game }}</a
              >
            </li>
          </ul>
        </div>
        <div v-if="parkAttractionsCount > 0" class="attractions">
          <h3>Park Attractions</h3>
          <ul>
            <li
              v-for="attraction in character.parkAttractions"
              :key="attraction"
            >
              <a
                :href="`https://www.google.com/search?q=${attraction}`"
                target="_blank"
              >
                {{ attraction }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      loading: true,
      character: new Object(),
      alliesCount: 0,
      enemiesCount: 0,
      tvShowsCount: 0,
      filmsCount: 0,
      shortFilmsCount: 0,
      parkAttractionsCount: 0,
      videoGamesCount: 0,
    };
  },
  watch: {
    character(value) {
      this.tvShowsCount = value.tvShows.length;
      this.filmsCount = value.films.length;
      this.shortFilmsCount = value.shortFilms.length;
      this.parkAttractionsCount = value.parkAttractions.length;
      this.videoGamesCount = value.videoGames.length;
      this.alliesCount = value.allies.length;
      this.enemiesCount = value.enemies.length;
    },
  },
  computed: {
    noData() {
      if (
        this.tvShowsCount < 1 &&
        this.filmsCount < 1 &&
        this.shortFilmsCount < 1 &&
        this.parkAttractions < 1 &&
        this.videoGamesCount < 1 &&
        this.alliesCount < 1 &&
        this.enemiesCount < 1
      ) {
        return true;
      }
      return false;
    },
  },
  mounted() {
    fetch(`https://api.disneyapi.dev/characters/${this.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.character = data;
        this.loading = false;
      });
  },
};
</script>

<style scoped>
.character-data {
  --color1: rgb(98, 204, 240);
  --color2: rgb(255, 154, 171);
}

h1 {
  text-align: center;
}

img {
  max-width: 250px;
  margin: 0 auto;
  display: block;
  border-radius: 50%;
}

.character-data {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.character-data div {
  background-color: var(--color2);
  border-radius: 10px;
  flex-basis: 48%;
  margin: 5px;
  padding: 10px;
}

.character-data div ul {
  display: flex;
  flex-flow: row wrap;
  list-style: none;
}

.character-data div ul li a {
  background-color: var(--color1);
  color: rgb(24, 24, 24);
  padding: 5px;
  margin: 0 5px;
  line-height: 35px;
  text-decoration: none;
  border-radius: 5px;
}

.character-data div:nth-child(odd) ul li a {
  background-color: var(--color2);
}

.character-data div ul li a:hover {
  background-color: rgb(255, 255, 255);
}

.character-data div:nth-child(odd) {
  background-color: var(--color1);
}

.character-data div h3 {
  text-align: center;
}

@media (max-width: 766px) {
  .character-data div {
    flex-basis: 100%;
    margin: 0 0 5px;
  }
}
</style>
