import Vue from 'vue';
import App from './App';
import axios from './extend/uni-request-axios.js';
import store from './store/index.js';
// import cmdIcon from './components/cmd-icon.vue';
import jslinq from './extend/jslinq.js';
import utils from './utils/comm.js';

// Vue.component('cmdIcon',cmdIcon)

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$store = store;
Vue.prototype.$jslinq = jslinq;
Vue.prototype.$utils = utils;

App.mpType = 'app';

const app = new Vue({
  ...App
});
app.$mount();
