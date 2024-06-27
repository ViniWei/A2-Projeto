import axios from 'axios'

const url = "http://localhost:4000/users/"

async function getAll() {
    return axios.get(url + "getAll")
}

async function create(data: object) {
    console.log(data)
    return axios.post(url + "create", data);
}

async function login(data: object) {
    console.log(data)
    return axios.post(url + "login", data);
}

export default {
    getAll,
    create,
    login
}
