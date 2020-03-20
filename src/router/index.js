/*
 * 主路由
 * */
import Vue from 'vue'
import Router from 'vue-router'
import routerOrder from './routerOrder';
import routerUser from './routerUser';
let indexIndexPage = ()=>import(/*webpackChunkName:'index'*/ '@/views/index/index'); //首页

Vue.use(Router)

let routerInstance=new Router({
  routes: [
    ...routerOrder,
    ...routerUser,
    {
      path: '/',
      name: 'indexIndex',
      component: indexIndexPage,
      meta:{isReq:true}
    }
  ]
})

routerInstance.beforeEach((to,from,next)=>{
  console.log(to)
  next();
})

export default routerInstance;