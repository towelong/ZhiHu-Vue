import { createWebHistory, createRouter } from "vue-router"
import routes from "./routes"

const history = createWebHistory()

const router = createRouter({
    history,
    routes,
})
router.beforeEach((to, from, next) => {
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})

export default router
