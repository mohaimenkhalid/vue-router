
require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './route'

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    router
});
