import request from '../utils/request.js'

/**
 * 获取全部任务
 * @param params
 * @returns {AxiosPromise}
 */
export function jobs(params) {
    return request({
        url:  '/jobs',
        method: 'get',
        params: params
    })
}

/**
 * 通过分类ID获取任务
 * @param params
 * @returns {AxiosPromise}
 */
export function jobsFind(params) {
    return request({
        url:  '/jobs_find',
        method: 'get',
        params: params
    })
}
