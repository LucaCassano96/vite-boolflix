<script>
/* tolgo setup  */
/* iporto i vari componenti dell'app */


import axios from "axios"; /* dobbiamo importare axsios (con path breve) non è come SASS */
import { store } from "./store.js" /* importo lo store in app */

import AppHeader from './components/AppHeader.vue';
import MovieList from './components/MovieList.vue';
import SerieTvList from './components/SerieTvList.vue';
import AppSearch from './components/AppSearch.vue';

/* esporto i componenti su App */
export default {
  components: {
    AppHeader,
    MovieList,
    AppSearch,
    SerieTvList,
  },
  data() {
    return {
      store, /*così abbiamo accesso allo store */
    }
  },
  methods: {
    getMovie() {

      let variablesMovies = store.api_selection_movies; /* parametrizzo  store.api_selection_movies e lo inserisco in una variabile che riutilizzo nella chiamata axios*/

      if (store.searchMovie !== "") { /* metto una condizione per far si che solo quando l'utente scrive qualcosa e searchMovie è !== da vuoto si aggiunge il nome dei film e la chiamata va a buon fine */
        variablesMovies += `${store.apiParameter}=${store.searchMovie}` /* compongo cio che passerò nella chiamata,  variablesMovies> il link dell'API, store.apiParameter> &query, store.searchMovie> ciò che ha scritto l'utente nell'input */
      }

      axios.get(variablesMovies) /* faccio partire una chiamata axios collegandomi nello store e al link dell'API (leggo nello store)*/
        .then(res => { /* mi ritorna res che è l'oggetto completo quello che ci interessa è res.data.results e me lo vado a salvare nell'arrey store.moviesList (scrivo nello store)*/
          store.moviesList = res.data.results
        })

      /* /////////////////////////////////////////////////// */

      /* seconda chiamata axios per le serie tv stessi passaggi */

      let variablesTvSeries = store.api_selection_tvSeries;

      if (store.searchMovie !== "") {
        variablesTvSeries += `${store.apiParameter}=${store.searchMovie}`
      }

      axios.get(variablesTvSeries)
        .then(res => {
          store.seriesList = res.data.results
        })

        .catch(err => { /* in questo modo possiamo andarci ad intercettare eventuali errori */
          console.log(err);
        })
    }
  },
  created() {
    this.getMovie(); /* created è tipo mounted created() è ottimo per chiamare le API, mentre mounted() è ottimo per fare qualsiasi cosa dopo che gli elementi DOM sono stati caricati completamente. */
  }
}
</script>

<template>
  <!-- inserisco in template di App tutti i componenti richiamati -->

  <AppHeader />

  <AppSearch @mysearch="getMovie" />
  <!-- collego ad App l'emit fatto dal figlio in AppSearch all'arrivo della search viene chiamato il metodo getMovie-->
  <main>
    <MovieList />
    <SerieTvList />
  </main>
  
</template>

<style lang="scss"> /* Inserisco lang per far funzionare il scss, qui tolgo lo scope  */
 @use "src/styles/general.scss" as *;
 /* import general  */
 @use "src/styles/partials/variables.scss" as*;
 /*import variables   */
</style>
