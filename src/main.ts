import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// import store from "./store"
import { vantPlugins } from './plugins/vant'
import 'lib-flexible'
import { Toast } from "vant";
import '@/assets/css/iconfont.css'

const app = createApp(App);

app.config.globalProperties.$toast = Toast;

app
  .use(router)
  .use(vantPlugins)
  .use(Toast)
  .mount('#app')
