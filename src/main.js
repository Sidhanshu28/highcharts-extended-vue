// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue";
import App from "./App.vue";
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'
import Router from 'vue-router'

exportingInit(Highcharts)
Vue.use(HighchartsVue)
Vue.use(Router)

Vue.config.productionTip = true;

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
