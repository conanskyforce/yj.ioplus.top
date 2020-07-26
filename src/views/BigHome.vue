<template>
  <div class="big-home">
    <div 
      class="index-bg"
      :style="{'background-size': bigSize}">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      bigSize:''
    }
  },
  created () {
    this.setBig()
    window.addEventListener('resize',this.throttle(this.setBig))
  },
  destroyed() {
    window.removeEventListener('resize',this.throttle(this.setBig))
  },
  methods: {
    setBig(){
      console.log('setBig')
      if(document.documentElement.offsetWidth > 900) {
        this.bigSize = 'contain'
      } else {
        this.bigSize = 'cover'
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
<style lang="less">
.big-home {
  background-image: url(https://s3.pstatp.com/ee/feishu_website/static/img/header-bg.4db2d98100.svg);
  background-size: cover;
  .index-bg{
    background-image: url(https://s1.pstatp.com/ee/feishu_website/static/img/person.72b309fb65.png);
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 1200px;
    height: 580px;
    margin: 0 auto;
  }
}
</style>