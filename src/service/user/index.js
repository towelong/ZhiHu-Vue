import { _get } from "../api/api"

export async function getUserQuestion(count) {
    const res = await _get(`/question/user?count=${count}`)
    return res
}
