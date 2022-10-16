<template>
  <form @submit.prevent="signUp" v-if="!toggleFormProp">
  <div class="back-button animate pop">
    <font-awesome-icon :icon="['fas', 'chevron-left']" />
    <a href="#" @click="showLogin">Voltar</a>
  </div>

    <div :class="['name animate pop delay-1', {'form-group--error': $v.name.$error}]">
        <label for="name">Usuário</label>
        <input type="text" id="name" name="name" v-model="name" :class="{ 'input-error': (!$v.name.required || !$v.name.alpha) && $v.name.$dirty }">
        <span v-if="(!$v.name.required || !$v.name.alpha) && $v.name.$dirty" class="field-error">Nome inválido</span>
    </div>

    <div :class="['email animate pop delay-2', { 'form-group--error': $v.email.$error }]">
        <label for="email">E-mail</label>
        <input type="text" id="email" name="email" v-model="email" :class="{ 'input-error': (!$v.email.required || !$v.email.alpha) && $v.email.$dirty }">
        <span v-if="(!$v.email.required || !$v.email.alpha) && $v.email.$dirty" class="field-error">E-mail inválido</span>
    </div>

    <div :class="['password animate pop delay-3', { 'form-group--error': $v.password.$error }]">
        <label for="password">Senha</label>
        <input type="password" id="password" name="password" v-model="password" :class="{ 'input-error': (!$v.password.required && $v.password.$dirty) || (!$v.password.minLength && $v.password.$dirty) }">
        <span v-if="!$v.password.required && $v.password.$dirty" class="field-error">Senha inválida</span>
        <span v-if="!$v.password.minLength && $v.password.$dirty" class="field-error">A senha precisa ter no mínimo {{ $v.password.$params.minLength.min }} caracteres</span>
    </div>

    <button @click.prevent="signUp" class="sign-up-button animate pop delay-4">
        Cadastrar
    </button>
  </form>
</template>

<script>
import { required, minLength, email, alpha } from 'vuelidate/lib/validators';
import api from "@/services/api";

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
  validations: {
    name: {
      required,
      alpha,
      minLength: minLength(4)
    },
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
    signUp() {
      console.log('cadastrou');
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$v.$reset();

        api
          .post("/user", {name: this.name, email: this.email, password: this.password})
          .then(() => {
            this.$emit('toggle-form');
          })
          .catch((error) => {
              console.log(error);
          });
        
      }
    },
    showLogin() {
      this.$emit('toggle-form');
    }
  }
}
</script>

<style>
  
</style>