<script>
import { objectToString } from '@vue/shared';


/* faccio  export default e do un nome al mio componente*/
export default{
    name: "CardMovie",
    props: {
        detailsMovie: Object,
        detailSerie: Object,/* ci facciamo restituire da MovieList tramite details e le props un oggetto  */
    }
}

</script>

<template>

    <div class="cardMovie">
            <!-- stampiamo a schermo -->

        <h4>{{ detailsMovie.title }}</h4>   
        <div>{{ detailsMovie.original_title }}</div> 

            <!-- con un v-if stampo a schermo non la lingua ma la bandiera corrispondente -->

        <div v-if="detailsMovie.original_language === 'en'"><img src="https://static.vecteezy.com/ti/vettori-gratis/t2/2816608-bandiera-nazionale-americana-gratuito-vettoriale.jpg" alt="American Flag"></div>

        <div v-else-if="detailsMovie.original_language === 'fr'"><img src="https://m.media-amazon.com/images/I/51QJVTVYDWL._AC_.gif" alt="French Flag"></div>

        <div v-else-if="detailsMovie.original_language === 'it'"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png" alt="Italian Flag"></div>

        <div v-else-if="detailsMovie.original_language === 'es'"><img src="https://www.cosepercrescere.it/wp-content/uploads/2014/06/SPAGNA.jpg" alt="Spanish Flag"></div>

        <div v-else-if="detailsMovie.original_language === 'ko'"><img src="https://www.corriereasia.com/wp-content/uploads/2021/01/bandiera-corea-del-sud.jpg" alt="Korean Flag"></div>

        <div v-else-if="detailsMovie.original_language === 'hi'"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/280px-Flag_of_India.svg.png" alt="Indian Flag"></div>

        <div v-else-if="detailsMovie.original_language === 'de'"><img src="https://www.germania.life/wp-content/uploads/2017/12/bandierade-1024x615.jpg" alt="German Flag"></div>

        <div v-else-if="detailsMovie.original_language !== 'en'">{{detailsMovie.original_language}}</div>
        
        <div v-else ="detailsMovie.original_language === ''">unrecognized language</div> <!-- se la lingua non c'è viene scritto unrecognized language-->

        <!-- SERIETV -->
    </div>

    <div class="cardTvSeries">
        
        <h4>{{ detailSerie.name }}</h4>   
        <div>{{ detailSerie.original_name }}</div> 
    
    </div> 

</template>

<style lang="scss" scoped> /* includo con lang scss e metto scoped affinchè lo stile sia riferito a solo questo componente */
@use "src/styles/general.scss" as *; /* import general  */
@use "src/styles/partials/variables.scss" as*; /*import variables   */
 

.cardMovie, .cardTvSeries{
    border: 1px solid #000;
    margin: 5px;
    padding: 5px;
}
 
</style>