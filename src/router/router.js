import Vue from 'vue'
import VueRouter from 'vue-router'
import ComHello from '../components/HelloWorld.vue'
import ComGrid from '../components/ComGrid.vue'
import ComLogin from '../components/ComLogin.vue'
import ComDetail from '../components/ComDetail.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: ComLogin},
    {path: '/com-detail', component: ComDetail},
    {path: '/com-hello', component: ComHello},
    {path: '/com-grid', component: ComGrid}
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
  export default router;