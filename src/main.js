import Vue from 'vue';
import './plugins/vuetify'
import App from './App'

Vue.config.productionTip = false;
// eslint-disable-next-line
const app = new Vue({
	render : function(h) {
		return h(App);
	}
}).$mount('#app');
