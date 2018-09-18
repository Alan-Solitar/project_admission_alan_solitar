import axios from 'axios'

export default {
    get() {
        const route = 'http://www.mocky.io/v2/5aea2be330000061005db34d?mocky-delay=400ms'
        return axios.get(route)
    },
}
