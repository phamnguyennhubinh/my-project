import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import LayoutPage from "@/views/HomePage/LayoutPage.vue";
import ShopPage from "@/views/ShopPage/ShopPage.vue"
import ProductDetail from "@/views/ShopPage/components/ProductDetail.vue";
import ListCart from "@/views/CartProduct/ListCart.vue";
import PurchaseProducts from "@/views/CartProduct/component/PurchaseProducts.vue";
import LoginAccount from "@/views/Account/components/LoginAccount.vue";
import RegisterAccount from "@/views/Account/components/RegisterAccount.vue"
const routes = [
    {
        path: '/',
        name: 'LayoutPage',
        component: LayoutPage
    },
    {
        path: '/shop',
        name: 'ShopPage',
        component: ShopPage
    },
    {
        path: '/shop/detail/:id',
        name: 'ProductDetail',
        component: ProductDetail
    },
    {
        path:'/shop/detail/listcart',
        name: 'ListCart',
        component: ListCart
    },
    {
        path: '/buy',
        name: 'PurchaseProducts',
        component: PurchaseProducts
    },
    {
        path: '/login',
        name: 'LoginAccount',
        component: LoginAccount
    },
    {
        path: '/register',
        name: 'RegisterAccount',
        component: RegisterAccount
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router