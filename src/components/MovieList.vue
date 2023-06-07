<script>
import { store } from "./../store.js" /* importo store anche in MovieList */

/* MovieList diventa padre di CardMovie */
import CardMovie from './CardMovie.vue';

/* faccio  export default e do un nome al mio componente*/
export default{
    name: "MovieList",
    components: { /* includo il figlio CardMovie  */
        CardMovie  
    },
    data(){
    return{
      store, /*così abbiamo accesso allo store (leggo nello store)*/
    }
  }
}

</script>

<template>

    <section>
        MovieList

        <div>
            <CardMovie v-for="(movie, index) in  store.moviesList" :details="movie" :key="index"/> <!-- una volta popolato l'Arrey di film dobbiamo estrarre dall'arrey gli elementi che ci interessano > dobbiamo poi passare con le prop movie all'oggetto figlio quindi cardMovie, key è utile al browser > Vue utilizza queste chiavi per sapere quali elementi HTML rimuovere o aggiornare e se è necessario crearne di nuovi. -->
        </div>
    </section>

</template>

<style lang="scss" scoped> /* includo con lang scss e metto scoped affinchè lo stile sia riferito a solo questo componente */
@use "src/styles/general.scss" as *; /* import general  */
@use "src/styles/partials/variables.scss" as*; /*import variables   */
 

</style>