/**
 * Throw error if HTTP status code is not in the 200 range
 * @param res
 * @returns {Promise<any>}
 */
const checkStatus = res => {
    if (res.status >= 200 && res.status < 300) {
        return Promise.resolve(res)
    } else {
        return Promise.reject(new Error(res.statusText))
    }
}

/**
 * Generic Fetch method to be built upon
 * @param url
 * @param settings
 * @returns {Promise<Response>}
 */
const ajax = (url, settings) => {
    return fetch(url, settings)
        .then(checkStatus)
}

/**
 * Gets JSON from URL
 * @param url
 * @returns {Promise<any>}
 */
export const getJSON = url => {
    return ajax(url, null)
        .then(res => res.json())
}

/**
 * Posts JSON to URL and receives JSON as response
 * @param url
 * @param body
 * @returns {Promise<any>}
 */
export const postJSON = (url, body) => {
    const settings = {
        method: 'POST',
        body: JSON.stringify(body)
    }

    return ajax(url, settings)
        .then(res => res.json())
}