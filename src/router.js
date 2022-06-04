import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Mainpage',
    component: () => import('@/pages/Mainpage.vue'),
  },
  {
    path: '/product/:productId',
    name: 'productPage',
    component: () => import('@/pages/product/ProductPage.vue'),
  },
  {
    path: '/category/:categoryId',
    name: 'categoryPage',
    component: () => import('@/pages/category/CategoryPage.vue'),
  },
  {
    path: '/category/:categoryId',
    name: 'categoryPage',
    component: () => import('@/pages/category/CategoryPage.vue'),
  },
  {
    path: '/ReviewPage',
    name: 'reviewPage',
    component: () => import('@/pages/ReviewPage.vue'),
  },
  {
    path: '/Service',
    name: 'servicePage',
    component: () => import('@/pages/Service.vue'),
  },
  {
    path: '/Wishlist',
    name: 'wishlistPage',
    component: () => import('@/pages/Wishlist.vue'),
  },
  {
    path: '/Cart',
    name: 'cartPage',
    component: () => import('@/pages/Cart.vue'),
  },
  {
    path: '/Contact',
    name: 'contactPage',
    component: () => import('@/pages/Contact.vue'),
  },
  {
    path: '/Account',
    name: 'accountPage',
    component: () => import('@/pages/Account.vue'),
  },
  {
    path: '/About',
    name: 'aboutPage',
    component: () => import('@/pages/About.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0, behavior: 'smooth' };
  },
});

export default router;