import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/users/'

const login = async (identifiant, mdp) => {
    const response = await axios.post(`${API_URL}login/`, { identifiant, mdp })
    if (response.data.access) {
        localStorage.setItem('accessToken', response.data.access)
        localStorage.setItem('refreshToken', response.data.refresh)

        localStorage.setItem('user', JSON.stringify(response.data.user))
    }
    return response.data
}

const logout = () => {
    localStorage.clear()
}

const getAccessToken = () => localStorage.getItem('accessToken')

const getRefreshToken = () => localStorage.getItem('refreshToken')

const getUserAuthentified = () => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
}

const isAuthenticated = () => !!getAccessToken()

export default {
    login,
    logout,
    getAccessToken,
    getRefreshToken,
    getUserAuthentified,
    isAuthenticated,
}
