<script>
import { store } from "./../store.js"
import CardSerieTv from './CardSerieTv.vue';


export default{
    name: "SerieTvList",
    components: { 
        CardSerieTv  
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
        
        <div>
            <h2>SerieTvList</h2> 
            <CardSerieTv v-for="(serie, index) in  store.seriesList" :detailSerie="serie" :key="index"/> 
        </div>
        
    </section>

</template>

<style lang="scss" scoped> /* includo con lang scss e metto scoped affinchè lo stile sia riferito a solo questo componente */
@use "src/styles/general.scss" as *; /* import general  */
@use "src/styles/partials/variables.scss" as*; /*import variables   */
 

</style>