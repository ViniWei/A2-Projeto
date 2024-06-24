import axios from 'axios'

const url = "http://localhost:4000/users/"

async function getAll() {
    return axios.get(url + "getAll")
}

export default {
    getAll
}
