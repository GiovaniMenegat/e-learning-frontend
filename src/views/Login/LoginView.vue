<template>
  <div class="welcome">
    <div class="welcome-left">

      <h1 class="animate pop">Bem vindo ao</h1>
      <img class="animate pop" alt="e.learning logo" src="@/assets/elearning.png">
      
      <LoginForm @toggle-form="toggleFormOnClick" :toggleFormProp="toggleForm" />
      <SignUpForm @toggle-form="toggleFormOnClick" :toggleFormProp="toggleForm"/>
      
    </div>
    <div class="welcome-right">

      <img class="animate glow delay-1" alt="vector welcome" src="@/assets/vector-welcome.png">

      <h2 class="animate glow delay-2">Aprenda da melhor forma</h2>
      <p class="animate glow delay-3">Entre na plataforma e dê seu primeiro passo na programação.</p>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import SignUpForm from "@/components/SignUpForm.vue";

export default {
  name: 'WelcomeView',
  data(){
    return {
      toggleForm: true
    }
  },
  components: {
    LoginForm,
    SignUpForm
  },
  methods: {
    toggleFormOnClick() {
      this.toggleForm = !this.toggleForm;
    }
  }
}
</script>

<style lang="scss" src="./index.scss">
</style>