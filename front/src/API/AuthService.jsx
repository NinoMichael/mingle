import axios from "axios"

const API_URL = 'http://localhost:8000/api/users/login/'

export const login = async (identifiant, password) => {
    const response = await axios.post(API_URL, {
        identifiant: identifiant,
        mdp: password
    })

    localStorage.setItem('access_token', response.data.tokens.access)
    localStorage.setItem('refresh_token', response.data.tokens.refresh)
    localStorage.setItem('user', JSON.stringify(response.data.user))

    return response.data
}


