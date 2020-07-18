<template>
  <div class="card">
    <div class="left">
      <img
        src="https://d3r49iyjzglexf.cloudfront.net/illustrations/switch-from-jenkins-6970e1be53e7adf682ecf62483f9c5544d8d2d53af98136f3f96375cba2ae610.png"
        alt="card"
      />
    </div>
    <article class="right">
      <header>
        CI that’s built for the cloud.
        Make the switch from Jenkins.
      </header>
      <Gutter />
      <div class="content" >With CircleCI, teams get faster builds, shorter feedback cycles, and simplified pipeline maintenance.</div>
      <Gutter />
      <GradButton text="Start Your Journey" />
    </article>
  </div>
</template>
<script>
import GradButton from "./GradButton";
export default {
  components: {
    GradButton
  }
};
</script>
<style lang="less" scoped>
.card {
  display: flex;
  justify-content: center;
  .left,
  .right {
    flex-shrink: 1;
    width: 50%;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 80%;
      max-height: 80%;
    }
  }
  .right {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    header {
      font-size: 2em;
      margin-top: 20px;
    }
    button {
      min-width: 50%;
    }
  }
}
@media screen and (max-width: 750px) {
  .card {
    flex-direction: column;
    align-items: center;
    .left,
    .right {
      flex-shrink: 1;
      width: 80%;
    }
  }
}
</style>