<template>
<!-- MODAL -->
  <div class="shop-cart">
    <h1>{{shopCartHeading}}</h1>
    <p>Här kommer en modal som visar kundens valda produkter.
    </p>
    <p>
      <router-link to="/checkout">Take my money!</router-link>
    </p>
      <ProductItem v-bind:productItemHeading="'<ProductItem />'"/>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
export default {
  components: {
    ProductItem
  },
  props: {
    shopCartHeading: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
