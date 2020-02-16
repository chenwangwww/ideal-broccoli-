import Vue from 'vue'
import VueRouter from 'vue-router'
import ComHello from '../components/HelloWorld.vue'
import ComGrid from '../components/ComGrid.vue'
import ComLogin from '../components/ComLogin.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: ComLogin},
    {path: '/com-hello/:imageIndex', component: ComHello, props: true},
    {path: '/com-grid/:imageIndex', component: ComGrid, props: true}
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
  export default router;