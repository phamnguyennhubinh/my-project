import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import LayoutPage from "@/views/HomePage/LayoutPage.vue";
import ShopPage from "@/views/ShopPage/ShopPage.vue"
import ProductDetail from "@/views/ShopPage/components/ProductDetail.vue";
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
        path:'/shop/detail',
        name: 'ProductDetail',
        component: ProductDetail
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router