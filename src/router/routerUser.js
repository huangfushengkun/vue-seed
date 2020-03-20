/*
 * 子路由
 * */
 let layoutI = () =>import(/*webpackChunkName:'user'*/ "@/layouts/layoutI"); 
 let pageIndexUser = ()=>import( /*webpackChunkName:'user'*/ "@/views/user/index");

 export default [{
     path:'/login',
     name:'userLogin',
     component:pageIndexUser
 }]