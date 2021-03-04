<template>
  <div class="product-item">
    <h1>{{ productItemHeading }}</h1>
   
<div class="product">
  <div v-for="prod in products" :key="prod.id">
          <div class="title"><h1>{{prod.title}}</h1> </div>
          <p>{{prod.price}} kr</p>
</div>
  </div>
  
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: {
    productItemHeading: String
  },
  computed: {
      ...mapState([
        'products'

      ])
    },
    mounted: function(){
      this.$store.dispatch('loadProducts')
    },

   
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >


</style>