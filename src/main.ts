import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = { template: '<div>Home</div>' };
const Store = { template: '<div>Store</div>' };

const routes = [
	{ path: '/', component: Home },
	{ path: '/store', component: Store },
];

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHashHistory(),
	routes, // short for `routes: routes`
});

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);

app.mount('#app');
