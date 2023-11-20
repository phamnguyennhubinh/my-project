import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import LayoutPage from "@/views/HomePage/LayoutPage.vue";
import ShopPage from "@/views/ShopPage/ShopPage.vue"
import ProductDetail from "@/views/ShopPage/components/ProductDetail.vue";
import ListCart from "@/views/CartProduct/ListCart.vue";
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
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router