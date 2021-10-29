import axios from "axios";


export const usersAPI = {
    getUsers () {
        return axios.get('https://reqres.in/api/users?per_page=12').then(response => response.data)
    }
}

