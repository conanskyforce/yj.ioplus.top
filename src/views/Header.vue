<template>
  <div class="header">
    <Navigation />
  </div>
</template>
<script>
export default {
  name: 'my-header'
}
</script>
<style lang="less" scoped>
// * {
//   border: solid 1px;
// }
.header {
  position: fixed;
  width: 100%;
  height: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  overflow: hidden;
  z-index: 2;
  transition: all 0.5s;
}
@media screen and (min-width: 600px){
  .header:hover{
    background: rgba(0,0,0,0.3);
  }
}
</style>
