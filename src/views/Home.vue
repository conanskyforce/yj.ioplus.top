<template>
  <div class="home">
    <BigHome />
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
import BigHome from "@/views/BigHome.vue";
import Quote from "@/views/Quote.vue";

export default {
  name: "home",
  components: {
    BigHome,
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
