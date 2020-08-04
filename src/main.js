import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueCarousel from 'vue-carousel'
import homePage from './routers/__index.vue'
import TerminauxPage from './routers/__terminaux.vue'
import TarifsPage from './routers/__tarifs.vue'
import ServicePage from './routers/__service.vue'
import Accessoires from './routers/__Accessoires.vue'
import AboutPage from './routers/__Apropos.vue'
import ExpertisePage from './routers/__Expertise.vue'
import ContactPage from './routers/__Contact.vue'
import NewsPage from './routers/__News.vue'
import LoginPage from './routers/__Login.vue'

Vue.use(VueRouter)
Vue.use(VueCarousel)

let router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: homePage },
        { path: '/terminaux', component: TerminauxPage },
        { path: '/tarifs', component: TarifsPage },
        { path: '/nos-services', component: ServicePage },
        { path: '/accessoires', component: Accessoires },
        { path: '/about', component: AboutPage },
        { path: '/expertise', component: ExpertisePage },
        { path: '/contact', component: ContactPage },
        { path: '/news', component: NewsPage },
        { path: '/se-connecter', component: LoginPage }
    ]
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})