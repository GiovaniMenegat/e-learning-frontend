<template>
  <router-link class="router-link" :to="`/aula/${id}`">
    <div class="class-card">
      <div class="class-card-img">
        <img :src="require(`@/assets/${image}.svg`)" :alt="`${title}`">
      </div>
      
      <div class="class-card-text">
        <h2>{{title}}</h2>
        <p>{{content}}</p>

        <div class="class-card-key-text">
          <!-- <p 
            v-for="(key, index) in keyTexts" 
            :key="index"
          >
            {{key.key_text}}
          </p> -->
        </div>

      </div>
    </div>
  </router-link>
</template>
<script>
import slugify from "@/helpers/helpers";

export default {
  name: "ClassCard",
  data() {
    return {
      image: slugify(this.title)
    }
  },
  props: {
    id: Number,
    title: String,
    // image: Object,
    content: String,
    keyTexts: String
  }
}
</script>
<style lang="scss">
  .class-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    max-width: 870px;
    min-height: 187px;
    margin: 30px;
    box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.10);
    background: #fff;
    padding: 30px;
    cursor: pointer;
    border-top-left-radius: 10px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 10px;

    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    &:hover {
      -webkit-transform: scale(1.03);
      transform: scale(1.03);
    }

    &-img {
      margin-right: 20px;

      img {
        max-width: 80px;
      }
    }

    &-text {

      h2 {
        font-size: 28px;
        margin-bottom: 12px;
      }

      p {
        color: #6a6a6a;
      }
    }

    &-key-text {
      display: flex;
      align-items: center;
      margin-top: 25px;

      p {
        font-size: 16px;
        color: #a3a3a3;
        transition: color 0.2s;

        & + p {
          margin-left: 14px;
        }

        &:hover {
          color: #6a6a6a;
        }
      }

    }

    @media screen and (max-width: 600px) {
      &-text {
        h2 {
          font-size: 18px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
</style>