<template>
  <div id="app">
    <div class="nav">
      <div class="logo">
        <img src="@/assets/sinus-logo.svg" alt="Logo">
        </div>
        <div class="links">
      <router-link to="/" class="a">Produkter</router-link> 
      <router-link to="/account" class="a">Mitt konto</router-link> 
      <router-link to="/cart" class="a"><img src="@/assets/icon-bag-black.svg" alt=""></router-link>
    </div></div>
    <router-view/>
  </div>
</template>



<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
     
    }
  }
}
.modal {
  color: red;
}

.logo{
  width: 13vh;
  display:flex;

}

.nav{
  display: flex;
  flex-direction: row;
  width: 900px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 6vh;
  
}

.links{
  display: flex; 
  justify-content: center;
  align-items: flex-start;
}

.a{
  margin: 1vh;
  cursor: pointer;
  text-decoration: none;
  color: black;
}

</style>
