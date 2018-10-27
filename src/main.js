import Vue from 'vue';
import './plugins/vuetify'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;
Vue.use(VueRouter)

const Home = () => import('./views/Home');
const Stage = () => import('./views/Stage');

const router = new VueRouter({
    mode: 'history',
    routes: [
    	{
            path: '/',
            name: 'home',
            component: Home
        },
        {
        	path: '/stage',
        	name: 'stage',
        	component: Stage
        }
    ],
});
// eslint-disable-next-line
const app = new Vue({
	render : function(h) {
		return h(App);
	},
    router
}).$mount('#app');
