<template>
<div class="wrapper">
    
    
    <div class="oneProduct">
        <p>{{title}} {{price}}kr</p>
    <h5>{{shortDesc}}</h5>
    <button class="button is-success"
        @click="addToCart(product)">Add to Cart</button>
</div>




</div>

</template>


<script>

export default {
    components: {

    }, 
    methods: {
        addToCart(product) {
        this.$store.commit('addToCart', product);
    }
    },
    props: {
        product: Array,
        title: String,
        price: Number,
        shortDesc: String,
        
    },
    computed: {
        
    },
    data(){return{
       
    }},
}
</script>

<style scoped>
* {
    margin: 0;
    display: block;
    
}

.wrapper{
    flex: 0 1 auto;
    flex-direction: row;
    border-style: solid;
    margin-top: 5vh;
    
}

.oneProduct{
    width: 35vh;
    height: 40vh;
    
}


</style>