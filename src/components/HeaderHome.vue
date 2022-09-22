<template>
  <div class="header">
    <img class="header-img" alt="e.learning logo" src="@/assets/elearning.png">
    
    <div class="header-right desktop">
      <a href="#" class="header-about">Sobre nós</a>
      
      <div @click="showLogoutMenu" @mouseleave="hideLogoutMenu">
        <p class="header-name">{{userName}}</p>

        <a href="#" class="header-logout" v-if="showLogout" @click.prevent="logout">
          Sair
        </a>
      </div>
      
    </div>

    <div class="header-right mobile" @click="toggleMobileMenu">
      <font-awesome-icon :icon="['fas', 'bars']" />
      

      <div class="menu-drodown" v-if="showMenu">
        <p>{{userName}}</p>

        <a href="#">Sobre nós</a>

        <a href="#" @click.prevent="logout">Sair</a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderHome",
  data() {
    return {
      showLogout: false,
      showMenu: false
    }
  },
  methods: {
    showLogoutMenu() {
      this.showLogout = true;
    },
    hideLogoutMenu() {
      this.showLogout = false;
    },
    toggleMobileMenu() {
      this.showMenu = !this.showMenu;
    },
    logout() {
      this.$router.push({ name: 'login'});
      this.$store.dispatch('setToken', '');
      this.$store.dispatch('setUser', '');
    }
  },
  computed: {
    userName() {
      return this.$store.state.user
    }
  }
}
</script>

<style lang="scss">
  @import "../styles/layout/globals";
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: 500;
    padding: 30px 60px;
    border-bottom: 1px solid $black;

    &-img {
      width: 130px;
    }

    &-right {
      display: flex;
      align-items: center;
      justify-content: space-between;

      position: relative;
      .header-name {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
      
      .header-about {
        margin-right: 64px;
        text-decoration: none;
        color: $font;
        font-weight: 400;
        outline: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    &-logout {
      position: absolute;
      right: 0;
      background: $white;
      top: 20px;
      width: 50%;
      text-align: end;
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;
      box-shadow: 0px 0px 6px 0px black;
      padding: 10px;

      text-decoration: none;
      color: $font;
      font-weight: 400;
      outline: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .menu-drodown {
      position: absolute;
      right: 0;
      background: $white;
      top: 20px;
      width: 50vw;
      text-align: center;
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;
      box-shadow: 0px 0px 6px 0px black;
      padding: 10px;
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
        color: $font;
        font-weight: 400;
        outline: none;
      }
    }
    

    .mobile {
      display: none;
    }
    
    @media screen and (max-width: 600px) {
      .desktop {
        display: none;
      }
      .mobile {
        display: block;
      }
    }
  }
</style>