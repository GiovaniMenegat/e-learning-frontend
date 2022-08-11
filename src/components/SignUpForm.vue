<template>
  <form action="" v-if="!toggleFormProp">
  <div class="back-button animate pop">
    <font-awesome-icon :icon="['fas', 'chevron-left']" />
    <a href="#" @click="showLogin">Voltar</a>
  </div>
    
    <div class="name animate pop delay-1">
        <label for="name">Usuário</label>
        <input type="text" id="name" name="name" v-model="name">
    </div>

    <div class="email animate pop delay-2">
        <label for="email">E-mail</label>
        <input type="text" id="email" name="email" v-model="email">
    </div>

    <div class="password animate pop delay-3">
        <label for="password">Senha</label>
        <input type="password" id="password" name="password" v-model="password">
    </div>

    <button @click.prevent="signUp" class="sign-up-button animate pop delay-4">
        Cadastrar
    </button>
  </form>
</template>

<script>
export default {
  name: 'SugnUpForm',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  props: {
    toggleFormProp: Boolean
  },
  methods: {
    signUp() {
      console.log('cadastrou');
    },
    showLogin() {
      this.$emit('toggle-form');
    }
  }
}
</script>

<style>
  
</style>