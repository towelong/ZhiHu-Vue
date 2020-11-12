import { createWebHistory, createRouter } from "vue-router"
import routes from "./routes"
import Cookies from "js-cookie"

const history = createWebHistory()

const router = createRouter({
    history,
    routes,
})

router.beforeEach((to, from, next) => {
    // 每次打开一个页面自动回到顶部
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    window.pageYOffset = 0

    // 登录验证
    if (to.path == "/login") {
        const token = Cookies.get("access_token")
        if (token) {
            next({ path: "/" })
        }
    }

    // 权限验证
    if (to.meta.auth) {
        // 这里需要再获取一次token，但不能使用全局的token，有延迟
        const token1 = Cookies.get("access_token")
        if (!token1) {
            next({ path: "/login" })
        }
    }

    // 未匹配到路由重定向到404
    if (to.matched.length == 0) {
        next({ path: "/404" })
    }

    // 切换页面的标题
    if (to.meta.title) {
        document.title = to.meta.title + " - 知乎问答"
    }
    next()
})

export default router
