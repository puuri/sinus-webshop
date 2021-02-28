<template>
  <div class="account">
    <LoggedIn v-bind:loggedInHeading="'<LoggedIn />'"/>
    <LoginForm class="modal" v-bind:loginFormHeading="'<LoginForm />'"/>
    <Register v-bind:registerHeading="'<Register />'"/>
  </div>
</template>

<script>
import LoggedIn from '@/components/LoggedIn.vue'
import LoginForm from '@/components/LoginForm.vue'
import Register from '@/views/Register.vue'
export default {
    components: {
        LoggedIn,
        LoginForm,
        Register
    }
}
</script>
