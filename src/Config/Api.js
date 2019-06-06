import apisauce from 'apisauce'

const create = (baseURL = 'http://cook.audition2.com') => {
    const api = apisauce.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'text/html; charset=utf-8'
        },
        timeout: 10000
    })
    const getRoot = () => api.get('')
    const getRate = (page) => api.get('/forum.php?page=' + page)
    const getUser = (username) => api.get('search/users', {q: username})
    return {
        getRoot,
        getRate,
        getUser
    }
}

export default {
    create
}
