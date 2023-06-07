<script>

/* MovieList diventa padre di CardMovie */
import CardMovie from './CardMovie.vue';

/* faccio  export default e do un nome al mio componente*/
export default{
    name: "MovieList",
    components: { /* includo il figlio CardMovie  */
        CardMovie  
    } 
}

</script>

<template>

    <section>
        MovieList:

        <div>
            <CardMovie/>
        </div>
    </section>

</template>

<style lang="scss" scoped> /* includo con lang scss e metto scoped affinchè lo stile sia riferito a solo questo componente */
@use "src/styles/general.scss" as *; /* import general  */
@use "src/styles/partials/variables.scss" as*; /*import variables   */
 

</style>