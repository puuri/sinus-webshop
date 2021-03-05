<template>
<!-- MODAL -->

    <div class="login-form">
    <h1>{{ loginFormHeading }}</h1>
    <p>Om användaren inte är inloggad, visas här login-formuläret (i en modal)
    </p>
    <form>    
    <input id="email" placeholder="Email">
    <input id="password" placeholder="Password">
    <button>Sign In</button>
    </form>
  </div>
  
</template>

<script>
export default {
  props: {
    loginFormHeading: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
  display: block;
}

input, textarea {
  display: block;
  width: 400px;
  margin: 10px;
  padding: 20px 10px;
  border-radius: 10px;
  border-width: 1px;
}

button{
  border-style: solid;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  padding: 15px 50px 15px 50px;
}

</style>