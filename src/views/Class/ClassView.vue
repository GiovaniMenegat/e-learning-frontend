<template>
  <div class="class">
    <Header />
    <div class="top-buttons">
      <router-link to="/" class="back-button">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
        <p>Voltar</p>
      </router-link>

      <button class="done-button">
        <font-awesome-icon :icon="['fas', 'check']" />
        Concluído
      </button>
    </div>

    <div v-if="loading" class="class-body">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    
    <div v-if="!loading" class="class-body">
      <PrismicRichText :field="classContent.title" />
      
      <PrismicEmbed :field="classContent.embed" />

      <PrismicRichText :field="classContent.content" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/HeaderHome.vue";

export default {
  name: "ClassView",
  data() {
    return {
      loading: true,
      classContent: null,
    }
  },
  components: {
    Header,
  },
  methods: {
    async getContent() {
      const { data } = await this.$prismic.client.getByUID('class', String(this.$route.params.slug));
      this.loading = false;
      this.classContent = data;
    }
  },
  created() {
    this.getContent();
  }
}
</script>

<style lang="scss">
  @import "../../styles/layout/globals";
  .class {

    .top-buttons {
      margin: 30px 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .back-button {
        display: flex;
        align-items: center;
        text-decoration: none;
        width: fit-content;

        svg {
          color: $font;
          margin-right: 8px;
        }
        p {
          margin: 16px 0;
          color: $font;
          font-weight: 700;
          outline: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .done-button {
        background-color: #00800069;
        border: 1px solid #003a00;
        padding: 10px;
        border-radius: 6px;
        color: #000;

        &:hover {
          background-color: #008000a1;
          transition: background-color .15s ease-in-out;
        }
      }
    }

    &-body {
      margin: 30px 60px;
      text-align: center;

      h2 {
        font-size: 48px;
      }

      iframe {
        width: 700px;
        height: 500px;
        margin: 60px;
      }
    }
  }
</style>