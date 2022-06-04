import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import 'boxicons';

import { createPinia } from 'pinia';
import { dragscrollNext } from 'vue-dragscroll';

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.directive('dragscroll', dragscrollNext);

app.mount('#app');