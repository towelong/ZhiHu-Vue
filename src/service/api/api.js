import Cookies from "js-cookie"

const baseURL = process.env.VUE_APP_BASE_URL
const token_prefix = "Bearer "

export function login({ account, password }) {
    return post("/user/login", {
        account,
        password,
        login_type: 0,
    })
}

export function _get(url) {
    return fetch(baseURL + url, {
        method: "GET",
        headers: {
            Authorization: token_prefix + Cookies.get("access_token"),
        },
        credentials: "include",
    })
        .then((res) => res.json())
        .then((resp) => {
            if (resp.code == 8003 || resp.code == 8004) {
                refresh()
                return _get(url).then((data) => data)
            }
            return resp
        })
}

export function refresh() {
    return fetch(baseURL + "/user/refresh", {
        method: "GET",
        headers: {
            Authorization: token_prefix + Cookies.get("refresh_token"),
        },
        credentials: "include",
    })
        .then((res) => res.json())
        .then((response) => {
            if(response.code == 0){
                Cookies.set("access_token",response.data.access_token)
            }
            console.log(response)
        })
}

export function get(url) {
    return fetch(baseURL + url, {
        method: "GET",
        credentials: "include",
    }).then((res) => res.json())
}

export function _post(url, data) {
    return fetch(baseURL + url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: token_prefix + Cookies.get("access_token"),
        },
        credentials: "include",
    })
        .then((res) => res.json())
        .then((resp) => {
            if (resp.code == 8003 || resp.code == 8004) {
                refresh()
                return _get(url).then((data) => data)
            }
            return resp
        })
}

export function post(url, data) {
    return fetch(baseURL + url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        credentials: "include",
    }).then((res) => res.json())
}
