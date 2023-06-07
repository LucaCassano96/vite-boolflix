<script> /* tolgo setup  */

/* iporto i vari componenti dell'app */

import axios from "axios"; /* dobbiamo importare axsios (con path breve) non è come SASS */
import { store } from "./store.js" /* importo lo store in app */

import AppHeader from './components/AppHeader.vue';
import MovieList from './components/MovieList.vue';

/* esporto i componenti su App */
export default{
  components: {
    AppHeader,
    MovieList,
  },
  data(){
    return{
      store, /*così abbiamo accesso allo store */
    }
  }
}
</script>

<template>

   <!-- inserisco in template di App tutti i componenti richiamati -->
 
  <AppHeader />
  <main>
    <MovieList/>
  </main>

</template>

<style lang="scss"> /* Inserisco lang per far funzionare il scss, qui tolgo lo scope  */
@use "src/styles/general.scss" as *; /* import general  */
@use "src/styles/partials/variables.scss" as*; /*import variables   */
 
</style>
