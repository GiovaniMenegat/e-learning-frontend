<template>
  <div class="login">
    <div class="login-left">

      <h1>Bem vindo ao</h1>
      <img alt="e.learning logo" src="@/assets/elearning.png">
      
      <form action="">
        <div class="email">
            <label for="email">Usuário</label>
            <input type="text" id="email" name="email" v-model="email">
        </div>

        <div class="password">
            <label for="password">Senha</label>
            <input type="password" id="password" name="password" v-model="password">
        </div>

        <a href="#" class="forgot-password">Esqueci minha senha</a>

        <button @click.prevent="login">
            Entrar
        </button>
      </form>
    </div>
    <div class="login-right">
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginView',
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

<style lang="scss">
    @import "../../styles/layout/globals";
  .login {
    display: flex;
    width: 100vw;
    height: 100vh;

    &-left {
      width: 50vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      form {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        div {
          display: flex;
          flex-direction: column;
          label {
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 500;
          }

          input {
            width: 250px;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid $black;

            &:focus {
              border: 1px solid $pink;
            }
          }

          & + div {
            margin-top: 16px;
          }
        }

        .forgot-password {
          font-size: 14px;
          text-align: end;
          text-decoration: none;
          margin: 8px 0;
          color: $pink;
        }
      }
    }
    
    &-right {
      background-color: $black;
      width: 50vw;
    }
  }
</style>