<template>
<!-- MODAL -->
  <div class="single-product">
    <h1>{{singleProductHeading}}</h1>
    <p>Här kommer en modal som visar en närmare beskrivning av produkten.
    </p>

    <p>{{product}}</p>
<!--870HVE1qIZ4lb3Kf-->
     <router-link to="/shopCart" class="button">Take my money!</router-link>
  </div>
</template>

<script>

export default {
    props: {
        singleProductHeading: String
    }, 
     computed: {
       product(){
         return this.$store.getters.getProductById(this.id)
       }
     },
     data(){return{
       id: "870HVE1qIZ4lb3Kf",
     }}
}
     
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
