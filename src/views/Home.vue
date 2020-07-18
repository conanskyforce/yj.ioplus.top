<template>
  <div class="home">
    <Header />
    <Swiper />
    <GradLoading />
    <Quote />
    <GradText />
    <GradButton />
  </div>
</template>

<script>
import Swiper from "@/views/Swiper.vue";
import Header from "@/views/Header.vue";
import Quote from "@/views/Quote.vue";
import GradLoading from '../components/GradLoading'
import GradText from '../components/GradText'
import GradButton from '../components/GradButton'

export default {
  name: "home",
  components: {
    Swiper,
    Header,
    Quote,
    GradLoading,
    GradText,
    GradButton
  }
};
</script>

<style lang="less" scoped></style>
