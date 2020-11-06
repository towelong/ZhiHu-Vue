import Home from "../views/Home.vue"
import Hot from "../views/Hot.vue"
import Recommend from "../views/Recommend.vue"
import Find from "../views/Find.vue"
import HotSearch from "../views/HotSearch.vue"
import Point from "../views/Point.vue"
import Follow from "../views/Follow.vue"
import Login from "../views/Login.vue"
import Question from "../views/Question.vue"

const routes = [
    {
        path: "/",
        component: Home,
        children: [
            {
                path: "/hot",
                component: Hot,
                alias: "/",
            },
            {
                path: "/recommend",
                component: Recommend,
            },
            {
                path: "/follow",
                component: Follow,
            },
        ],
    },
    {
        path: "/find",
        component: Find,
    },
    {
        path: "/fd",
        component: Point,
    },
    {
        path: "/rs",
        component: HotSearch,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/question/:id",
        component: Question,
    },
]

export default routes
