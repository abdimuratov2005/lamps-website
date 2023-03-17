import { createApp } from 'vue';
import './styles/style.scss';
import router from './router/router.js'
import App from './App.vue';
import { createPinia } from 'pinia'

const app = createApp(App);

app
    .use(createPinia())
    .use(router)
    .mount('#app')