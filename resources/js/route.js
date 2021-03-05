import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './components/Home'
import About from './components/About'
const router=[
    {
        path:"/",
        component:Home
    },
    {
        path:"/about",
        component:About
    },

];

export default new VueRouter({
    router,
    mode:"history"
})
