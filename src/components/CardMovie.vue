<script>
import { objectToString } from '@vue/shared';


/* faccio  export default e do un nome al mio componente*/
export default{
    name: "CardMovie",
    props: {
        details: Object, /* ci facciamo restituire da MovieList tramite details e le props un oggetto  */
    }
}

</script>

<template>

    <div>

        <h4>{{ details.title }}</h4>

    </div>

</template>

<style lang="scss" scoped> /* includo con lang scss e metto scoped affinchè lo stile sia riferito a solo questo componente */
@use "src/styles/general.scss" as *; /* import general  */
@use "src/styles/partials/variables.scss" as*; /*import variables   */
 
 
</style>