<template>
  <div :class="{header: true,'header-fixed':headerFixed}">
    <Navigation :isPC="isPC" />
  </div>
</template>
<script>
export default {
  name: 'my-header',
  data(){
    return {
      headerFixed: false,
      isPC: true
    }
  },
  created () {
    window.onscroll = this.throttle(this.setHeader)
    window.onresize = this.throttle(this.setPC)
  },
  destroyed() {
    window.onscroll = null
    window.onresize = null
  },
  methods: {
    setHeader () {
      if(document.documentElement.scrollTop > 0) {
        this.headerFixed = true
      } else {
        this.headerFixed = false
      }
    },
    setPC () {
      if(document.body.offsetWidth > 880) {
        this.isPC = true
      } else {
        this.isPC = false
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
  background: rgba(255,255,255,1);
  box-shadow: 0px 2px 8px lightgrey;
}
@media screen and (min-width: 600px){
  // .header:hover{
  //   background: rgba(255,255,255,0.8);
  // }
}
</style>
