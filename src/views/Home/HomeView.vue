<template>
  <div class="home">
    <Header />

    <main class="home-body">
      <ClassCard />
      <ClassCard />
      <ClassCard />
    </main>
  </div>
</template>

<script>
import Header from "@/components/HeaderHome.vue";
import ClassCard from "@/components/ClassCard.vue";

export default {
  name: 'HomeView',
  components: {
    Header,
    ClassCard
  }
}
</script>

<style lang="scss">
  .home {

    &-body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
