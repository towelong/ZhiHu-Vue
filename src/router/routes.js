import Home from "../views/Home.vue"
import Hot from "../views/Hot.vue"
import Recommend from "../views/Recommend.vue"
import Find from "../views/Find.vue"
import HotSearch from "../views/HotSearch.vue"
import Point from "../views/Point.vue"
import Follow from "../views/Follow.vue"
import Login from "../views/Login.vue"
import Question from "../views/Question.vue"
import User from "../views/User.vue"
import ErrorPage from "../views/Error.vue"

const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            title: "首页",
        },
        children: [
            {
                path: "/hot",
                component: Hot,
                alias: "/",
                meta: {
                    title: "热榜",
                },
            },
            {
                path: "/recommend",
                component: Recommend,
                meta: {
                    title: "推荐",
                },
            },
            {
                path: "/follow",
                component: Follow,
                meta: {
                    title: "关注",
                },
            },
        ],
    },
    {
        path: "/find",
        component: Find,
        meta: {
            title: "发现",
        },
    },
    {
        path: "/fd",
        component: Point,
        meta: {
            title: "沸点",
        },
    },
    {
        path: "/rs",
        component: HotSearch,
        meta: {
            title: "热搜",
        },
    },
    {
        path: "/login",
        component: Login,
        meta: {
            title: "登录",
        },
    },
    {
        path: "/question/:id",
        component: Question,
    },
    {
        path: "/user",
        component: User,
        meta: {
            title: "个人中心",
            auth: true,
        },
    },
    {
        path: "/404",
        component: ErrorPage,
        meta: {
            title: "404",
        },
    },
]

export default routes
