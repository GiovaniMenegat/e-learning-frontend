<template>
  <div id="app">
    <keep-alive>
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    document.title = "e.learning"; 
  }
}
</script>

<style lang="scss">
  @import "./styles/layout/globals";
</style>
