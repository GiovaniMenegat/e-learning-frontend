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

    <h6 v-if="errorMessage" class="login-error">{{errorMessage}}</h6>
    
    <button @click.prevent="login" class="animate pop delay-3 login-button">
        Entrar
    </button>

    <p class="create-account animate pop delay-4">Não tem conta? <a href="#" @click="showSignUp">Cadastre-se</a></p>
  </form>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';
import api from "@/services/api";

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
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
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$v.$reset();

        api
          .post("/user/login", {email: this.email, password: this.password})
          .then(({data}) => {
            this.$store.dispatch('setUser', data.name);
            this.$store.dispatch('setToken', data.token);
            this.$router.push({name: 'home'}) 
          })
          .catch(({response}) => {
              this.errorMessage = response.data.message;
          });
        
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