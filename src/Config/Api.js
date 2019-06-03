import apisauce from 'apisauce'

const create = (baseURL = 'https://newsapi.org') => {
    const api = apisauce.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'text/html; charset=utf-8'
        },
        timeout: 10000
    })
    const getRoot = () => api.get('')
    const getRate = () => api.get('/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
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
