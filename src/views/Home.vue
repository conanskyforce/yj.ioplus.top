<template>
  <div class="home">
    <Swiper />
    <div class="content">
      <GradLoading />
      <Quote />
      <!-- <GradText /> -->
      <Gutter gutter="20" />
      <GradCard />
      <Gutter gutter="20" />
      <GradButton />
      <Gutter gutter="100" />
    </div>
  </div>
</template>

<script>
import Swiper from "@/views/Swiper.vue";
import Quote from "@/views/Quote.vue";

export default {
  name: "home",
  components: {
    Swiper,
    Quote,
  }
};
</script>

<style lang="less" scoped>
.content{
  max-width: 1200px;
  margin: auto;
}
</style>
