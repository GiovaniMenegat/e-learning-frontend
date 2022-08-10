<template>
  <form action="">
    <div class="name animate pop">
        <label for="name">Usuário</label>
        <input type="text" id="name" name="name" v-model="name">
    </div>

    <div class="email animate pop">
        <label for="email">Usuário</label>
        <input type="text" id="email" name="email" v-model="email">
    </div>

    <div class="password animate pop delay-1">
        <label for="password">Senha</label>
        <input type="password" id="password" name="password" v-model="password">
    </div>

    <button @click.prevent="signUp" class="animate pop delay-3">
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
  methods: {
    signUp() {
      console.log('cadastrou');
    }
  }
}
</script>
<style>
  
</style>