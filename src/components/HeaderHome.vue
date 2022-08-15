<template>
  <div class="header">
    <img class="header-img" alt="e.learning logo" src="@/assets/elearning.png">
    
    <div class="header-right">
      <a href="#">Sobre nós</a>
      
      <p>Giovani Menegat</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderHome"
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
      a {
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
  }
</style>