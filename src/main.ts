import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import AlbumListVue from './components/AlbumList.vue';
import HomeVue from './components/Home.vue';

// Define your routes
const routes = [
	{ path: '/', component: HomeVue },
	{ path: '/store', component: AlbumListVue },
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
