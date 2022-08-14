<template>
  <form action="" v-if="toggleFormProp">
    <div class="email animate pop">
        <label for="email">Usuário</label>
        <input type="text" id="email" name="email" v-model="email" :class="{ 'input-error': (!$v.email.required || !$v.email.alpha) && $v.email.$dirty }">
        <span v-if="(!$v.email.required || !$v.email.alpha) && $v.email.$dirty" class="field-error">E-mail inválido</span>
    </div>

    <div class="password animate pop delay-1">
        <label for="password">Senha</label>
        <input type="password" id="password" name="password" v-model="password" :class="{ 'input-error': (!$v.password.required && $v.password.$dirty) || (!$v.password.minLength && $v.password.$dirty) }">
        <span v-if="!$v.password.required && $v.password.$dirty" class="field-error">Senha inválida</span>
        <span v-if="!$v.password.minLength && $v.password.$dirty" class="field-error">A senha precisa ter no mínimo {{ $v.password.$params.minLength.min }} caracteres</span>
    </div>

    <a href="#" class="forgot-password animate pop delay-2">Esqueci minha senha</a>

    <button @click.prevent="login" class="animate pop delay-3">
        Entrar
    </button>

    <p class="create-account animate pop delay-4">Não tem conta? <a href="#" @click="showSignUp">Cadastre-se</a></p>
  </form>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  props: {
    toggleFormProp: Boolean
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    login() {
      console.log('logou');
      this.$v.$touch();

      if (!this.$v.$invalid) {
        console.log(`Email: ${this.email}, Password: ${this.password}`);
      }
    },
    showSignUp() {
      this.$emit('toggle-form');
    }
  }
}
</script>

<style lang="">
  
</style>