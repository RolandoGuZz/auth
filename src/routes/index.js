import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../store'
import { LoginPage, PerfilPage, RegisterPage, HomeAuth } from '../pages'
import { storeToRefs } from 'pinia'

const authRequired = async (to, from, next) => {
    const store = useUserStore()
    const { user } = storeToRefs(store);
    const { getCurrentUser } = store
    try {
        await getCurrentUser()
        if (user.value) {
            if (to.path === '/' || to.path === '/perfil' || to.path === '/register') {
                next();
            } else {
                next('/login')
            }
        } else {
            next('/login')
        }
    } catch (error) {
        next('/login')
    }
}

const routes = [
    {
        path: '/',
        name: 'home-auth',
        component: HomeAuth,
        beforeEnter: authRequired
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/perfil',
        name: 'perfil',
        component: PerfilPage,
        beforeEnter: authRequired
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error',
        redirect: '/perfil'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export {
    router
}