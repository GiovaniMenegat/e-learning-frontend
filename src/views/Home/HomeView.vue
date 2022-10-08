<template>
  <div class="home">
    <Header />

    <main class="home-body">

      <div class="search">
        <input 
          type="text"
          placeholder="Pesquise pelo título"
          v-model="searchText"
        >
      </div>

      <div class="cards" v-if="!loading && filteredCards && filteredCards.length > 0">
        <ClassCard 
          v-for="(card, index) in filteredCards" 
          :key="index" 
          :id="card.id"
          :title="card.name" 
          :content="card.description"
          :keyTexts="card.tags"
          :rating="card.ratings[0]"
        />
      </div>

      <div class="loading" v-else-if="loading">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
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
import api from "@/services/api";

export default {
  name: 'HomeView',
  data() {
    return {
      cards: null,
      searchText: '',
      arrayFiltrado: null,
      loading: true
    }
  },
  components: {
    Header,
    ClassCard
  },
  methods: {
    async getContent() {
      api
          .get("/class",
          {
            headers: {
              Authorization: this.userToken
            }
          })
          .then(({data}) => {
            this.cards = data.classes;
          })
          .catch((error) => {
              console.log(error);
          });

      this.loading = false;
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
          if (card.name.toLowerCase().includes(this.searchText.toLowerCase())) {
            filteredArray.push(card);
          } else {
            return this.cards;
          }
        });

        return filteredArray;
      }
    },
    userToken() {
      return this.$store.state.token
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

      .empty-message {
        h6 {
          font-size: 28px;
          margin-top: 40px;
        }
      }
    }
  }
</style>
