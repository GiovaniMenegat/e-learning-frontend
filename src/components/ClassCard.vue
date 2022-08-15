<template>
  <div class="class-card">

    <div class="class-card-img">
      <img class="" alt="vector welcome" src="@/assets/vector-welcome.png"/>
    </div>
    
    <div class="class-card-text">
      <h3>classcard</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, quam quod 
        quidem officia vitae similique excepturi beatae mollitia.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClassCard"
}
</script>
<style lang="scss">
  .class-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    max-width: 1000px;
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

      h3 {
        font-size: 28px;
        margin-bottom: 12px;
      }

      p {
        color: #6a6a6a;
      }
    }
  }
</style>