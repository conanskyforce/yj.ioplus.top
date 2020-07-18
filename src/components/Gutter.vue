<template>
<div class='gutter' :style="compGutter"></div>
</template>
<script>
export default {
  name: 'Gutter',
  props: {
    gutter: {
      type: String,
      default: '10'
    }
  },
  computed: {
    compGutter(){
      return {
        height: this.gutter+'px'
      }
    }
  },
}
</script>
<style scoped>
.gutter{
  overflow: hidden;
  width: 100%;
}
  
</style>