import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/Login.vue'
import Register from './views/Register.vue'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: Home
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '登陆'
      },
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/registe',
      component: Register,
      meta: {
        title: "注册"
      }
    },
    {
      path: '/mine',
      component: () => import('./views/Mine.vue'),
      meta: {
        title: '我的'
      }
    },
    {
      path: '/shoppingcar',
      component: () => import('./views/shopbus.vue'),
      meta: {
        title: '我的购物车'
      }
    },
    {
      path: '/search',
      component: () => import('./views/shopcatagroy.vue'),
      meta:
      {
        title: '搜索'
      }
    },
    {
      path: '/shopinf',
      component: () => import('./views/shopinf.vue'),
      meta:
      {
        title: '店铺详情'
      }
    },
    {
      path: '/orderadmin',
      component: () => import('./views/ordermanager.vue'),
      meta:
      {
        title: '我的订单'
      }
    },
    {
      path: '/productinf',
      component: () => import('./views/productinf.vue'),
      meta:
      {
        title: '商品详情'
      }
    },
    {
      path: '/rate',
      component: () => import('./views/rate.vue'),
      meta:
      {
        title: '评价'
      }
    },
    {
      path: '/*',
      component: () => import('./views/404.vue'),
      meta: {
        title: '找不到页面'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router;