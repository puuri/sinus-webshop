<template>
  <div class="product-item">
    <h1>{{ productItemHeading }}</h1>
    <p>Här kommer info om en enskild produkt.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    productItemHeading: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>