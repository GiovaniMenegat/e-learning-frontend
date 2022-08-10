<template>
  <form action="">
    <div class="email animate pop">
        <label for="email">Usuário</label>
        <input type="text" id="email" name="email" v-model="email">
    </div>

    <div class="password animate pop delay-1">
        <label for="password">Senha</label>
        <input type="password" id="password" name="password" v-model="password">
    </div>

    <a href="#" class="forgot-password animate pop delay-2">Esqueci minha senha</a>

    <button @click.prevent="login" class="animate pop delay-3">
        Entrar
    </button>

    <p class="create-account animate pop delay-4">Não tem conta? <a href="#">Cadastre-se</a></p>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log('logou');
    }
  }
}
</script>

<style lang="">
  
</style>