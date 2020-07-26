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
    this.setHeader()
    this.setPC()
    window.addEventListener('scroll',this.throttle(this.setHeader))
    window.addEventListener('resize',this.throttle(this.setPC))
  },
  destroyed() {
    window.removeEventListener('scroll',this.throttle(this.setHeader))
    window.removeEventListener('resize',this.throttle(this.setPC))
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
      if(document.body.offsetWidth > 820) {
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
  position: absolute;
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
  // .header-fixed{
  //   position: fixed;
  //   background: rgba(255,255,255,1);
  //   box-shadow: 0px 2px 8px lightgrey;
  // }
}
</style>
