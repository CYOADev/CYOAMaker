import Vue from 'vue'
import VueCroppie from 'vue-croppie'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueCroppie);

new Vue({
	render: h => h(App)
}).$mount('#app')
