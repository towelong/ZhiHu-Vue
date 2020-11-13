import Home from "@/views/home/Home.vue"
import Hot from "@/views/home/Hot.vue"
import Recommend from "@/views/home/Recommend.vue"
import Find from "@/views/Find.vue"
import HotSearch from "@/views/HotSearch.vue"
import Point from "@/views/Point.vue"
import Follow from "@/views/home/Follow.vue"
import Login from "@/views/Login.vue"
import Question from "@/views/Question.vue"
import User from "@/views/user/User.vue"
import UserQuestion from "@/views/user/UserQuestion.vue"
import UserFollow from "@/views/user/UserFollow.vue"
import ErrorPage from "@/views/Error.vue"

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
                meta: {
                    title: "热榜",
                },
                alias:"/"
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
        children: [
            {
                path: "/user/question",
                component: UserQuestion,
                alias:"/user"
            },
            {
                path: "/user/follow",
                component: UserFollow,
            },
        ],
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
