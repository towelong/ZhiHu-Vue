const baseURL = process.env.VUE_APP_BASE_URL
const token_prefix = "Bearer "

export function get(url) {
    return fetch(baseURL + url, {
        method:"GET",
        credentials: "include",
    }).then((res) => res.json())
}

export function post(url, data) {
    return fetch(baseURL + url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": token_prefix,
        },
        credentials: "include",
    }).then((res) => res.json())
}
