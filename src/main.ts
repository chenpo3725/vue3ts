import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/index";
import App from "./App.vue";
import { createPinia } from "pinia";
import axios from "./utils/request";
import * as Icons from "@element-plus/icons-vue"; // （1）引入
import "@/styles/index.less";

const app = createApp(App);

app.config.globalProperties.$http = axios;
// 遍历注册全局icon
for (const icon in Icons) {
  app.component(icon, (Icons as any)[icon]); // （2） 全局注册
}

const pinia = createPinia();
app.use(ElementPlus).use(pinia).use(router).mount("#app");

// createApp(App).mount('#app')
