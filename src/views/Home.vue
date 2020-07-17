<template>
  <div class="home">
    <Header />
    <Swiper />
    <Quote />
  </div>
</template>

<script>
import Swiper from "@/views/Swiper.vue";
import Header from "@/views/Header.vue";
import Quote from "@/views/Quote.vue";

export default {
  name: "home",
  components: {
    Swiper,
    Header,
    Quote
  }
};
</script>

<style lang="less" scoped></style>
