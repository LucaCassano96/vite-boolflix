
/*Lo store ci da una base dati comune a tutti i componenti della nostra applicazione. */

/* Per farlo funzionare

.Importiamo lo store in APP.vue e lo rendiamo
disponibile dentro data().

 */

import { reactive } from "vue"

export const store = reactive({
    api_selection_movies: "https://api.themoviedb.org/3/search/movie?api_key=1915c1891add63daa2fa25ac738dd697",



    moviesList: [], /* Arrey popolato di film dopo la ricerca dell'utente */
    searchMovie: "", /*riferimento per il v-model, settiamo sringa vuota così rimane il placeholder come indicazione per l'utente */
    apiParameter: "&query", /* settiamo il parametro finale dell'api che andremo a mettere nel metodo */


    api_selection_tvSeries: "https://api.themoviedb.org/3/search/tv?api_key=1915c1891add63daa2fa25ac738dd697",

    seriesList: [],
    /* Arrey popolato di film dopo la ricerca dell'utente */
    /*riferimento per il v-model, settiamo sringa vuota così rimane il placeholder come indicazione per l'utente */



});


/* https://api.themoviedb.org/3/search/tv?api_key=1915c1891add63daa2fa25ac738dd697&query=scrubs */
/* 1915c1891add63daa2fa25ac738dd697 */


