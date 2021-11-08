import { createApp } from "vue"
import { createPinia } from "pinia"
import ElementPlus, { ElMessage } from "element-plus"
import vant, { Toast } from "vant"
import App from "./App.vue"
import router from "./router/index"
import store from "./store/index"

import "element-plus/lib/theme-chalk/index.css"
// import './styles/reset.css';
// import './styles/common.css';

const app = createApp(App)

app.config.globalProperties.$toast = (msg: string) => {
  return Toast(msg)
}
app.config.globalProperties.$msg = (msg: string) => {
  return ElMessage(msg)
}

app
  .use(store)
  .use(createPinia())
  .use(router)
  .use(vant)
  .use(ElementPlus)
  .mount("#app")
