import { createApp } from "vue"
import { createPinia } from "pinia"
import ElementPlus, { ElMessage } from "element-plus"
import Varlet from "@varlet/ui"
import App from "./App.vue"
import router from "./router/index"

import "@varlet/ui/es/style.js"
import "element-plus/lib/theme-chalk/index.css"
// import './styles/reset.css';
// import './styles/common.css';

const app = createApp(App)

// app.config.globalProperties.$toast = (msg: string) => {
//   return Toast(msg)
// }
app.config.globalProperties.$msg = (msg: string) => {
  return ElMessage(msg)
}

app
  .use(createPinia())
  .use(router)
  .use(Varlet)
  .use(ElementPlus)
  .mount("#app")
