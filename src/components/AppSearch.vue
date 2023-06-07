<script>
import { store } from "./../store.js" /* importo store anche in AppSearch */

/* faccio  export default e do un nome al mio componente > sarà figlio di App*/
export default{
    name: "AppSearch",
    data(){
    return{
      store, /*così abbiamo accesso allo store */
    }
  }
}

</script>

<template>

    <form> <!-- mi costruisco il form dove l'utente cercherà i film -->

        <input type="text" placeholder="cerca film" v-model.trim="store.searchMovie"> <!-- con il v-model è agganciato ai data che sono nello store in questo caso con searchMovie, con trim evitiamo che gli spazi lasciati dall'utente nello scrivere nell'imput vadano a impedire la ricerca-->
        <button type="submit" @click.prevent="$emit('mysearch')">Search</button> <!-- dal componente AppSearch al click emetto un evento (mysearch) che può essere intercettato dal padre in questo caso App, con prevent gli inibiamo di inviare il form -->

    </form>

</template>

<style lang="scss" scoped> /* includo con lang scss e metto scoped affinchè lo stile sia riferito a solo questo componente */
@use "src/styles/general.scss" as *; /* import general  */
@use "src/styles/partials/variables.scss" as*; /*import variables   */
 
 
</style>