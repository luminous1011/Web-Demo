import { createApp,  } from 'vue'
import App from "./App.vue";
import router from "./router";
import 'amfe-flexible'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import './style.less'

const app=createApp(App)

app.use(router)
app.use(Antd)

app.mount('#app')
