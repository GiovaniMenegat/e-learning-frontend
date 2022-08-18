<template>
  <div class="home">
    <Header />

    <main class="home-body">
      <ClassCard 
        v-for="card in cards" 
        :key="card.id" 
        :title="card.data.title" 
        :image="card.data.image" 
        :video="card.data.embed" 
        :content="card.data.content"
      />

    </main>
  </div>
</template>

<script>
import Header from "@/components/HeaderHome.vue";
import ClassCard from "@/components/ClassCard.vue";

export default {
  name: 'HomeView',
  data() {
    return {
      cards: null,
    }
  },
  components: {
    Header,
    ClassCard
  },
  methods: {
    async getContent() {
      const { results } = await this.$prismic.client.query(
        this.$prismic.predicate.at('document.type','class')
      );
      this.cards = results;
    }
  },
  created() {
    this.getContent();
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
