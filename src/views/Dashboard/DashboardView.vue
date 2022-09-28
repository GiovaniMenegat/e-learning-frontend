<template>
  <div class="dashboard">
    <Header />
    <main class="dashboard-body">
      <h1>Seu perfil de programador</h1>
      
      <div class="dashboard-recommendation" v-if="!showCourses">
        <h3>Sua trilha na programação começa aqui</h3>

        <p>
          Complete todas as aulas e diga se você gostou do conteúdo ou não. Após 
          isso iremos recomendar um caminho para você seguir.
        </p>

        <h6>{{message}}</h6>

        <div class="steps">
          <div class="step">
            <img class="main-img" :src="require('@/assets/dashboard/first.svg')" alt="Primeiro passo">
            Acesse a plataforma
          </div>
          <hr>
          <div class="step">
            <img class="main-img" :src="require('@/assets/dashboard/second.svg')" alt="Segundo passo">
            Assista às aulas
          </div>
          <hr>
          <div class="step">
            <img class="main-img" :src="require('@/assets/dashboard/third.svg')" alt="Terceiro passo">
            Avalie o conteúdo
          </div>
          <hr>
          <div class="step">
            <img class="main-img" :src="require('@/assets/dashboard/fourth.svg')" alt="Quarto passo">
            Venha conhecer seu perfil!
          </div>
        </div>
      </div>

      <div class="dashboard-recommendation" v-else>

        <h4>Seu perfil é:</h4>

        <h3>{{recommendation}}</h3>
        
        <div class="courses" v-if="recommendation === 'Front-end'">
          <p>Para o front-end, recomendamos os cursos da Codecademy.</p>

          <a href="https://join.codecademy.com/learn/learn-html/" target="_blank" rel="noopener noreferrer">Curso de HTML</a>
          <a href="https://www.codecademy.com/learn/learn-css" target="_blank" rel="noopener noreferrer">Curso de CSS</a>
          <a href="https://join.codecademy.com/learn/introduction-to-javascript/" target="_blank" rel="noopener noreferrer">Curso de Javascript</a>
        </div>

        <div class="courses" v-if="recommendation === 'Back-end'">
          <p>Para o back-end, recomendamos os cursos da Alura.</p>

          <a href="https://www.alura.com.br/formacao-js-backend" target="_blank" rel="noopener noreferrer">Curso de formação JavaScript para back-end</a>
        </div>

        <div class="courses" v-if="recommendation === 'Fullstack'">
          <p>
            Para o fullstack, você precisa aprender tanto front-end como 
            back-end. Para isso, recomendamos os cursos da Codecademy para 
            conteúdos de front-end, e cursos da Alura para conteúdos de 
            back-end.
          </p>

          <a href="https://join.codecademy.com/learn/learn-html/" target="_blank" rel="noopener noreferrer">Curso de HTML</a>
          <a href="https://www.codecademy.com/learn/learn-css" target="_blank" rel="noopener noreferrer">Curso de CSS</a>
          <a href="https://join.codecademy.com/learn/introduction-to-javascript/" target="_blank" rel="noopener noreferrer">Curso de Javascript</a>

          <a href="https://www.alura.com.br/formacao-js-backend" target="_blank" rel="noopener noreferrer">Curso de formação JavaScript para back-end</a>
        </div>
        
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/HeaderHome.vue";
import api from "@/services/api";

export default {
  name: 'DashboardView',
  data() {
    return {
      recommendation: null,
      message: null,
      showCourses: false
    }
  },
  components: {
    Header,
  },
  methods: {
    async getRecommendation() {
      api
        .get("/rating/recommendation",
        {
          headers: {
            Authorization: this.userToken
          }
        })
        .then(({data}) => {
          this.recommendation = data;
          this.showCourses = true;
        })
        .catch((error) => {
          this.message = error.response.data.message;
        });
    },
    showRecommendation() {
      if (this.recommendation === "frontend") {
        return true
      }
    }
  },
  mounted() {
    this.getRecommendation();
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
  .dashboard {

    &-body {
      padding: 30px 60px;
      text-align: center;

      h1 {
        margin-bottom: 50px;
      }
      
      .dashboard-recommendation {
        h3 {
          margin: 30px 0;
        }

        h6 {
          margin: 70px;
          font-size: 18px;
        }
        
        .steps {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;

          .step {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 200px;
            width: 250px;

            img {
              height: 80%;
            }
          }

          hr {
            height: 145px;
          }
        }
      }
    }

    @media screen and (max-width: 925px) {
      &-body {
        .steps {
          hr {
            height: 1px;
            width: 200px;
            margin: 30px 0;
          }
        }
      }
    }
  }
</style>