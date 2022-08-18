<template>
  <div class="class-card">

    <div class="class-card-img">
      <PrismicImage :field="image" />
    </div>
    
    <div class="class-card-text">
      <PrismicRichText :field="title" />
      <PrismicRichText :field="content" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ClassCard",
  props: {
    title: Array,
    image: Object,
    video: Object,
    content: Array
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