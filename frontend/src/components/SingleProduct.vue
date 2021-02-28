<template>
<!-- MODAL -->
  <div class="single-product">
    <h1>{{singleProductHeading}}</h1>
    <p>Här kommer en modal som visar en närmare beskrivning av produkten.
    </p>
  </div>
</template>

<script>
export default {
    props: {
        singleProductHeading: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
