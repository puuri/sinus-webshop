<template>
<!-- MODAL -->
  <div class="single-product">
    <h1>{{singleProductHeading}}</h1>
    <p>Här kommer en modal som visar en närmare beskrivning av produkten.
    </p>
    
    <p>{{getProductById}}</p>

     <router-link to="/shopCart" class="button">Take my money!</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        singleProductHeading: String
    }, 
     computed: {
       ...mapGetters([
         'getProductById'
       ])
     },
}
     
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
