<template>
  <div :class="{header: true,'header-fixed':headerFixed}">
    <Navigation />
  </div>
</template>
<script>
export default {
  name: 'my-header',
  data(){
    return {
      headerFixed: false
    }
  },
  created () {
    window.onscroll = this.throttle(this.setHeader)
  },
  destroyed() {
    window.onscroll = null
  },
  methods: {
    setHeader () {
      if(document.documentElement.scrollTop > 0) {
        this.headerFixed = true
      } else {
        this.headerFixed = false
      }
    },
    throttle (fn, delay = 100) {
      let timer
      return function(){
        if(timer) return
        timer = setTimeout(()=>{
          fn()
          timer = null
        },delay)
      }
    }
  },
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
.header-fixed{
  position: fixed;
  background: rgba(255,255,255,0.8);
  box-shadow: 0px 2px 8px lightgrey;
}
@media screen and (min-width: 600px){
  // .header:hover{
  //   background: rgba(255,255,255,0.8);
  // }
}
</style>
