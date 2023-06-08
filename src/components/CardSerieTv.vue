<script>


export default{
    name: "CardSerieTv",
    props: {
        detailSerie: Object,
    },
    
}

</script>

<template>

        <!-- SERIETV -->

    <div class="cardTvSeries">
        
        <h4>{{ detailSerie.name }}</h4>   
        <div>{{ detailSerie.original_name }}</div> 
        <div>{{ detailSerie.vote_average }}</div>

        <div v-if="detailSerie.original_language !== ''"><img :src="'src/assets/' + detailSerie.original_language + '.jpg'" alt="unrecognized language"></div>
        <div v-else ="detailSerie.original_language === ''">unrecognized language</div> 

        <div v-if="detailSerie.origin_country.length === 0"></div> 
        <div v-else="detailSerie.origin_country.length !== 0">{{ detailSerie.origin_country[0] }}</div>
       <!--  <div v-if="detailSerie.vote_average  % 2 ===0">{{ detailSerie.vote_average }}</div>
        <div v-else-if="detailSerie.vote_average % 2 !==0"></div> -->
    </div> 

</template>

<style lang="scss" scoped> 
@use "src/styles/general.scss" as *; 
@use "src/styles/partials/variables.scss" as*; 
 

    .cardTvSeries{
    border: 1px solid #000;
    margin: 5px;
    padding: 5px;
    img{
        width: 300px;
    }
}
 
</style>