import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Hello from "@/components/Hello";
import Mytable from "@/components/Mytable";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/hello",
      name: "Hello",
      component: Hello
    },
    {
      path: "/table",
      name: "Mytable",
      component: Mytable
    }
  ]
});
