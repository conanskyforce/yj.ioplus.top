<template>
  <div class="swiper-container">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img class="swiper-img" src="../assets/images/01.png" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img class="swiper-img" src="../assets/images/02.png" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img class="swiper-img" src="../assets/images/03.png" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img class="swiper-img" src="../assets/images/04.png" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img class="swiper-img" src="../assets/images/05.png" />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
      <div class="swiper-button-next" slot="button-next" @click="next"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "home-swiper",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  created() {
    console.log("swiper created...");
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    prev() {
      this.swiper.slidePrev();
    },
    next() {
      this.swiper.slideNext();
    }
  }
};
</script>
<style lang="less" scoped>
/* eslint-disable */
.swiper-container {
  height: 400px;
  background-color: #fff;
  .swiper {
    height: 100%;
  }
  .swiper-zoom-container /deep/ .swiper-img{
    object-fit: cover;
    height: 100%;
  }
}
@media screen and (min-width: 1120px){
  .swiper-container{
    height: 500px;
  }
}
@media screen and (max-width: 1100px){
  .swiper-container{
    height: 500px;
  }
}
@media screen and (max-width: 880px){
  .swiper-container{
    height: 300px;
  }
}
@media screen and (max-width: 480px){
  .swiper-container{
    height: 200px;
  }
}
</style>
