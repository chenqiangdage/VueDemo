import Vue from 'vue'
import VueRouter from 'vue-router'
 
import Home from '../views/Home' 
import Login from '../views/Login' 
import Regist from '../views/Regist' 
import ForgetPwd from '../views/ForgetPwd' 
import ShopCar from '../views/ShopCar'
import CompanyDetail from '../views/CompanyDetail'
import AddressList from '../components/AddressList'
import AddressEdit from '../components/AddressEdit'
import CompanyAuth from '../views/CompanyAuth'
import CompanyContactAuth from '../views/CompanyContactAuth'
import OrderList from '../views/OrderList'
import Me from '../views/Me'
import {getLocalStore}   from '../../config/global'
import {USER_INFO} from '../store/mutation-type'
Vue.use(VueRouter)
 
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/',  redirect: 'Home' },
        { path: '/Home', name: 'Home', component: Home,meta:{  requireAuth: true} },
        { path: '/ShopCar', name: 'ShopCar', component: ShopCar,meta:{  requireAuth: true} },
        { path: '/Me', name: 'Me', component: Me,meta:{  requireAuth: true} },
        { path: '/login', name: 'login', component: Login },
        { path: '/AddressList', name: 'AddressList', component: AddressList },
        { path: '/AddressEdit', name: 'AddressEdit', component: AddressEdit },
        { path: '/Regist', name: 'Regist', component: Regist },
        { path: '/ForgetPwd', name: 'ForgetPwd', component: ForgetPwd },
        { path: '/CompanyDetail', name: 'CompanyDetail', component: CompanyDetail },
        { path: '/CompanyAuth', name: 'CompanyAuth', component: CompanyAuth },
        { path: '/CompanyContactAuth', name: 'CompanyContactAuth', component: CompanyContactAuth },
        { path: '/OrderList', name: 'OrderList', component: OrderList },
        
    ]
})

//路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
       // 如果仅仅是存在state理，不用本地store起来，页面右键刷新，state就会没有了
       var strUserInfo = getLocalStore(USER_INFO);
       if(strUserInfo==null){
        next({
           // path: '/login'   
        });
       }
       let userInfo = JSON.parse(strUserInfo);
        if (userInfo!=null && userInfo.token) {   
            next()
        } else {
            next({
              // path: '/login'
            });
        }
    } else {
        next();
    }
})

export default router