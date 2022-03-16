import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// import store from "./store"
import { vantPlugins } from './plugins/vant'
import 'lib-flexible'
import { Toast } from "vant";
import axios from 'axios'
import '@/assets/css/iconfont.css'
const echarts = require("echarts");
require("echarts/lib/chart/map");
require("echarts/map/js/china");

const app = createApp(App);

app.config.globalProperties.$toast = Toast;
app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$axios = axios;

app
  .use(router)
  .use(vantPlugins)
  .use(Toast)
  .mount('#app')
