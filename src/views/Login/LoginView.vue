<template>
  <div class="welcome">
    <div class="welcome-left">

      <h1 class="animate pop">Bem vindo ao</h1>
      <img class="animate pop" alt="e.learning logo" src="@/assets/elearning.png">
      
      <LoginForm />
      <SignUpForm />
      
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
  components: {
    LoginForm,
    SignUpForm
}
}
</script>

<style lang="scss">
    @import "../../styles/layout/globals";
  .welcome {
    display: flex;
    width: 100vw;
    height: 100vh;

    &-left {
      width: 50vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 54px;
      }

      img {
        margin: 30px 0;
      }

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
            border: 1px solid #9f9f9f;

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
          margin: 16px 0;
          color: $pink;
          font-weight: 700;
          outline: none;

          &:hover {
            text-decoration: underline;
          }
        }

        button {
          background: $black;
          color: #fff;
          height: 42px;
          border: 1px solid $black;
          border-radius: 6px;
          font-weight: 700;
          font-size: 16px;

          &:hover {
            opacity: 0.8;
            webkit-transition: opacity .15s ease-in-out;
            -moz-transition: opacity .15s ease-in-out;
            -ms-transition: opacity .15s ease-in-out;
            -o-transition: opacity .15s ease-in-out;
            transition: opacity .15s ease-in-out;
          }
        }

        .create-account {
          font-size: 14px;
          text-align: center;
          margin-top: 16px;

          a {
            text-decoration: none;
            color: $pink;
            font-weight: 700;
            outline: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    
    &-right {
      background-color: $black;
      width: 50vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: $white;

      h2 {
        font-size: 3vw;
        margin: 26px 0;
      }

      p {
        max-width: 600px;
        text-align: center;
        font-size: 1.8vw;
      }
    }

    @media screen and (max-width: 992px) {
      &-left {
        width: 100vw;
      }

      &-right {
        display: none;
      }
    }
  }
</style>