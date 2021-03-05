import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import HomeCompo from './components/Home'
import AboutCompo from './components/About'
const router=[
    {
        path:"/",
        component:HomeCompo
    },
    {
        path:"/about",
        component:AboutCompo
    },

];

export default new VueRouter({
    router,
    mode:"history"
})
