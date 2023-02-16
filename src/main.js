import { createApp } from 'vue';
import './styles/style.scss';
import router from './router/router.js'
import App from './App.vue';
import components from './components';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .mount('#app')