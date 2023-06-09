<script >

/* faccio  export default e do un nome al mio componente*/
export default {
    name: "CardMovie",
    props: {
        detailsMovie: Object,
        /* ci facciamo restituire da MovieList tramite details e le props un oggetto  */
    },
 
}

</script>

<template>
    <div class="cardMovie">
    <!-- stampiamo a schermo -->
    <h4>{{ detailsMovie.title }}</h4>
    <div>{{ detailsMovie.original_title }}</div>

    <img v-if="detailsMovie.poster_path !== null" :src="`https://image.tmdb.org/t/p/w342${detailsMovie.poster_path}`" alt="img" />

    <img v-else="detailsMovie.poster_path === null" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png" alt=">immagine di copertina mancante">


    <div>{{ detailsMovie.vote_average }}</div>
    
    <div v-if="detailsMovie.original_language !== ''"><img :src="'src/assets/' + detailsMovie.original_language + '.jpg'" alt="unrecognized language"></div>
    <div v-else ="detailsMovie.original_language === ''">unrecognized language</div>  <!-- se la lingua non c'è viene scritto unrecognized language-->

   
        

    </div>
</template>

<style lang="scss" scoped> /* includo con lang scss e metto scoped affinchè lo stile sia riferito a solo questo componente */
 @use "src/styles/general.scss" as *;
 /* import general  */
 @use "src/styles/partials/variables.scss" as*;
 /*import variables   */


 .cardMovie,
 .cardTvSeries {
     border: 1px solid #000;
     margin: 5px;
     padding: 5px;

     img{
        width: 300px;
     }
 }
</style>