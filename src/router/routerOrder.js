/*
 * 子路由
 * */
let layoutI = ()=>import(/*webpackChunkName:'order'*/ '@/layouts/layoutI');
let pageOrderIndex = ()=>import(/*webpackChunkName:'order'*/ '@/views/order/index');

export default [{
    path:"/order",
    // name:"order",
    component:layoutI,
    children:[{
        path:'',
        name:"orderIndex",
        component:pageOrderIndex
    }]
}]