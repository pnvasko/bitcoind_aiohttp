import Vue from 'vue'
import VueRouter from 'vue-router'

let routes = [
  {
    path: '/',
    component: () => import('layouts/index-default'),
    children: [
      { name: 'index', path: '', component: () => import('pages/index') },
      { name: 'Error403', path: '/403', component: () => import('pages/errors/403.vue') },
      { name: 'Error404', path: '/404', component: () => import('pages/errors/404.vue') }
    ]
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/errors/404.vue')
  })
}

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
