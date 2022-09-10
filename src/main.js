import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import TheHeader from "./components/UI/TheHeader.vue";
import TheHome from "./pages/TheHome.vue";
import CharacterSelection from "./components/CharacterSelection.vue";
import ListHeader from "./components/UI/ListHeader.vue";
import CharacterDetails from "./components/CharacterDetails.vue";
import DetailsHeader from "./components/UI/DetailsHeader.vue";
import DataLoader from "./components/UI/DataLoader.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faArrowRight, faArrowLeft);

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", components: { header: TheHeader, default: TheHome } },
    {
      path: "/characters/:page",
      components: { header: ListHeader, default: CharacterSelection },
      props: true,
    },
    { path: "/characters", redirect: "/characters/1" },
    {
      path: "/character/:id",
      components: { header: DetailsHeader, default: CharacterDetails },
      props: true,
    },
    {
      // Details Page Tester
      path: "/tester",
      redirect: "/character/309",
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("data-loader", DataLoader);

app.mount("#app");
