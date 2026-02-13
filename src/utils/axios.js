import Axios from 'axios'

const baseURL = 'http://127.0.0.1:5001'

const axios = Axios.create({
    baseURL,
    headers:{
        'Content-Type': 'application/json',
        Accept:'application/json'
    }
})

export default axios