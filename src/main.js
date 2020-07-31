import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import homePage from './componentes/__index.vue'
import TerminauxPage from './componentes/__terminaux.vue'
import TarifsPage from './componentes/__tarifs.vue'
import ServicePage from './componentes/__service.vue'

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: homePage },
        { path: '/terminaux', component: TerminauxPage },
        { path: '/tarifs', component: TarifsPage },
        { path: '/nos-services', component: ServicePage }
    ]
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})