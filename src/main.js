import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "normalize.css"
require("swiper/swiper-bundle.css");
const requireComponent = require.context(
  './components',
  // 是否查询其子目录
  false,
  /\.vue$/
)
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = capitalizeFirstLetter(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
    //因为得到的filename格式是: './BasesupplierSearch.vue', 所以这里我们去掉头和尾，只保留真正的文件名
  )
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
