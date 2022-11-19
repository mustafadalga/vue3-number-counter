import { createApp } from 'vue'
import App from './App.vue'
import numberCounter from "vue3-number-counter";

const app = createApp(App);
app.use(numberCounter);
app.mount('#app')
