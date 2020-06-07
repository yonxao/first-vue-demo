// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  // index.html 的<div id="app"></div>
  el: "#app",
  // router,
  router: router,
  // 声明有哪些组件
  // components: { App },
  components: { App: App },
  // 使用哪个组件，使用 App 模板
  template: "<App/>"
});
