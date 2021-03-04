<template>
<div class="wrapper">
    
    
    <div class="oneProduct">
        <p>{{title}} {{price}}kr</p>
    <h5>{{shortDesc}}</h5>
</div>


</div>
</template>

<script>
export default {
    components: {

    }, 
    props: {
        product: Array,
        title: String,
        price: Number,
        shortDesc: String,
        
    }
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