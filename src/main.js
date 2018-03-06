// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App";
import router from "./router";
import store from "./store/";
import axios from 'axios';

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
    "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
  },
  proxy: {
    host: "localhost",
    port: "8080"
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
