<template>
  <div class="product-list">
    <ProductItem v-bind:productItemHeading="'<ProductItem />'" />
    <SingleProduct class="modal" v-bind:singleProductHeading="'<SingleProduct />'"/>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
import SingleProduct from '@/components/SingleProduct.vue'
export default {
    components: {
        ProductItem,
        SingleProduct
    }
}
</script>