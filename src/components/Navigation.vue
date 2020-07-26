<template>
  <nav class="navigation">
    <ul class="left">
      <li class="left logo">
        <span>Tomotech</span>
      </li>
      <li class="left img">
        <img src="../assets/images/logo.png" alt="logo" />
      </li>
    </ul>
    <ul v-if="isPC || true" class="right">
      <li>产品</li>
      <li>DEMO</li>
      <li>价格</li>
      <li>关于</li>
    </ul>
    <div v-if="false" class="right-mobile">
      <span class="icon-menu"></span>
      <ul :class="{'right-ul':true, 'show-sub':showSub}">
        <li>产品</li>
        <li>DEMO</li>
        <li>价格</li>
        <li>关于</li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'navigation',
  props: {
    isPC: Boolean
  },
  data() {
    return {
      showSub: false
    }
  },
  methods: {
    showSubMenu () {

    }
  },
}
</script>

<style lang="less" scoped>
nav.navigation {
  max-width: 1200px;
  margin: auto;
  overflow:hidden;
  display: flex;
  justify-content: space-around;
  ul {
    padding-left: 40px;
    padding-right: 40px;
    list-style-type: none;
    margin: auto;
    li{
      color: rgba(17,31,51,.6);
      font-size: 18px;
      &:hover{
        color: #3370ff;
      }
    }
  }
  ul.right {
    padding-right: 120px;
  }
  ul.left {
    float: left;
    li {
      float: left;
      height: 20px;
      position: relative;
      padding: 10px;
      color: grey;
      line-height: 1;
      transition: 0.2s all linear;
      cursor: pointer;
      img {
        height: 40px;
        transition: all .3s;
      }
      img:hover {
        transform: scale(1.3);
      }
      &:active{
        color: lightgrey;
      }
    }
    li.logo:active {
      color: steelblue;
    }
    li:nth-child(even) {
      height: 40px;
      padding: 0px;
    }
  }
  ul.right {
    float: right;
  }
  .right li {
    height: 20px;
    position: relative;
    float: left;
    padding: 10px;
    line-height: 1;
    margin-right: 10px;
    transition: 0.2s all linear;
    cursor: pointer;
  }

  .right li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 2px solid #fff;
    transition: 0.2s all linear;
  }

  .right li:hover::before {
    width: 100%;
    top: 0;
    left: 0;
    transition-delay: 0.1s;
    border-bottom-color: #fff;
    z-index: -1;
  }

  .right li:hover ~ li::before {
    left: 0;
  }

  .right li:active {
    color: lightgrey;
  }
  .right-ul {
    display: none;
  }
}
@media screen and (max-width: 600px){
  ul.right {
    display: none;
  }
  nav.navigation ul.left {
    padding-left: 20px;
    li{
      padding-left: 0px;
    }
  }
}
</style>