import Axios from 'axios'

const baseURL = 'http://127.0.01:5001'

const api = Axios.create({
    baseURL,
    headers:{
        'Content-Type': 'application/json',
        Accept:'application/json'
    }
})

export default api