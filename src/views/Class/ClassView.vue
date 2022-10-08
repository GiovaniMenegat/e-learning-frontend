<template>
  <div class="class">
    <Header />
    <div class="top-buttons">
      <router-link to="/" class="back-button">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
        <p>Voltar</p>
      </router-link>

      <div class="feedback-button-div">
        <button :class="['feedback negative', {'feedback-disabled': rating === 1}, {'feedback-cursor-default': rating !== null}]" @click="rateClassNegative" :disabled="rating === 1">
          <font-awesome-icon :icon="['fas', 'thumbs-down']" />
          Não Gostei
        </button>
        <button :class="['feedback positive', {'feedback-disabled': rating === 0}, {'feedback-cursor-default': rating !== null}]" @click="rateClassPositive" :disabled="rating === 0">
          <font-awesome-icon :icon="['fas', 'thumbs-up']" />
          Gostei
        </button>
      </div>
    </div>

    <div v-if="loading" class="class-body">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    
    <div v-if="!loading" class="class-body">
      <h2>{{classContent && classContent.name}}</h2>

      <div class="video-container">
        <iframe width="420" height="315"
          :src="`https://www.youtube.com/embed/${classContent && classContent.video_id}`">
        </iframe>
      </div>

      <p>{{classContent && classContent.description}}</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/HeaderHome.vue";
import api from "@/services/api";

export default {
  name: "ClassView",
  data() {
    return {
      loading: true,
      classContent: null,
      rating: null,
    }
  },
  components: {
    Header,
  },
  methods: {
    async getContent() {
      api
        .get(`/class/${this.$route.params.id}`)
        .then(({data}) => {
          this.classContent = data;
        })
        .catch((error) => {
            console.log(error);
        });
      
      api
        .get(`/rating/${this.$route.params.id}`,
        {
          headers: {
            Authorization: this.userToken
          }
        })
        .then(({data}) => {
          this.rating = data.rating;
        })
        .catch((error) => {
          this.rating = null;
            console.log(error);
        });
        
      this.loading = false;
    },
    async rateClassPositive() {
      if (this.rating === null) {
        api.post(`/rating/${this.$route.params.id}`, 
          {
            rating: 1
          }, 
          {
            headers: {
              Authorization: this.userToken
            }
          })
          .then(() => {
            this.rating = 1;
          })
          .catch((error) => {
              console.log(error);
          });
      }
    },
    async rateClassNegative() {
      if (this.rating === null) {
        api.post(`/rating/${this.$route.params.id}`, 
          {
            rating: 0
          }, 
          {
            headers: {
              Authorization: this.userToken
            }
          })
          .then(() => {
            this.rating = 0;
          })
          .catch((error) => {
              console.log(error);
          });
      }

    }
  },
  created() {
    this.getContent();
  },
  computed: {
    userToken() {
      return this.$store.state.token
    }
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

    .feedback-button-div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        margin-right: 8px;
        color: #ff6680;
      }

      .feedback {
        display: flex;
        align-items: center;
        background-color: #32373b;
        border: 1px solid #ff6680;
        padding: 10px;
        border-radius: 6px;
        color: #edf2ef;
        font-weight: 600;

        &:hover {
          background-color: #32373bd6;
          transition: background-color .15s ease-in-out;
        }

        &-cursor-default {
          cursor: initial;

          &:hover {
            background-color: #32373b;
          }
        }
        
        &-disabled {
          background: #808080;

          &:hover {
            background-color: #808080;
          }
        }
      }

      .negative {
        margin-right: 10px;
      }
    }

    &-body {
      margin: 30px 60px;
      text-align: center;

      h2 {
        font-size: 48px;
      }

      .video-container {
        overflow: hidden;
        position: relative;
        width:100%;
        margin: 60px auto;
        max-width: 700px;
      }

      .video-container::after {
        padding-top: 56.25%;
        display: block;
        content: '';
      }

      .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    @media screen and (max-width: 890px) {
      &-body {
        margin: 30px;

        h2 {
          font-size: 32px;
        }

      }
    }
    @media screen and (max-width: 450px) {
      .top-buttons {
        flex-direction: column;
      }
    }
  }
</style>