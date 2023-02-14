import { createApp } from 'vue';
import './styles/style.scss';
import router from './router/router.js'
import App from './App.vue';

createApp(App).use(router).mount('#app')
