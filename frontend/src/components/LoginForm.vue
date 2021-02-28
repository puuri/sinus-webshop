<template>
<!-- MODAL -->
  <div class="login-form">
    <h1>{{ loginFormHeading }}</h1>
    <p>Om användaren inte är inloggad, visas här login-formuläret (i en modal)
    </p>
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
<style scoped lang="scss">

</style>