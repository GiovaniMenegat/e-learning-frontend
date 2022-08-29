<template>
  <div class="home">
    <Header />

    <main class="home-body">

      <div class="search">
        <input 
          type="text"
          placeholder="Pesquise pela palavra-chave"
          v-model="searchText"
        >
      </div>
      
      <div class="cards" v-if="filteredCards.length > 0">
        <ClassCard 
          v-for="(card, index) in filteredCards" 
          :key="index" 
          :slugs="card.slugs[0]"
          :title="card.data.title" 
          :image="card.data.image"
          :content="card.data.content"
          :keyTexts="card.data.key_field"
        />
      </div>
      <div class="empty-message" v-else>
        <h6>Não encontramos um resultado para sua busca :(</h6>
      </div>

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
      searchText: '',
      arrayFiltrado: null
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
  },
  computed: {
    filteredCards() {
      if(!this.searchText){
        return this.cards;
      } else {
        let filteredArray = [];

        this.cards.filter(card => {
          card.data.key_field.map(tag => {
            if (tag.key_text1.includes(this.searchText.toLowerCase())) {
              filteredArray.push(card);
            } else if (!tag.key_text1.includes(this.searchText.toLowerCase())) {
              return this.cards;
            } else {
              return this.cards;
            }
          })
        });

        return filteredArray;
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../../styles/layout/globals";
  .home {
    &-body {
      display: flex;
      flex-direction: column;
      align-items: center;

      .search {
        width: 100vw;
        text-align: end;
        padding: 30px 60px;

        input {
          width: 250px;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #9f9f9f;

          &:focus {
            border: 1px solid $pink;
          }
        }
      }
    }
  }
</style>
