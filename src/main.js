import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css"; // 引入css文件
import "nprogress/nprogress.css";
import App from "./App.vue";
import router from "./router";
import { serverUrl } from "@/utils/tools";

Vue.filter("dalImg", (val) => {
  if (val) {
    if (val.startsWith("http")) {
      return val;
    } else {
      return serverUrl + val;
    }
  } else {
    return "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2388634225,2417364686&fm=26&gp=0.jpg";
  }
});

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
