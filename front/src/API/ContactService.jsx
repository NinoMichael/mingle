import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/users/'

export const getContacts = async (utilisateurId) => {
    try {
        const response = await axios.get(`${API_URL}contacts/list/`, {
            params: { utilisateurId: utilisateurId },
        })
        return response.data
    } catch (error) {
        console.error("Erreur de récupération des contacts:", error)
    }
}

export const getDetailUser = async (identifiant, email, numero) => {
    try {
        const response = await axios.get(`${API_URL}user-detail/`, {
            params: { identifiant, email, numero }
        })
        return response.data
    } catch (error) {
        console.error("Erreur d'ajout d'utilisateur:", error)
        throw error
    }
}

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}user-list-create/`, userData)
        return response.data
    } catch (error) {
        console.error("Erreur de récupération de l'utilisateur:", error)
        throw error
    }
}

export const createPendingContact = async (user, otherUser, statut) => {
    try {
        const response = await axios.post(`${API_URL}contacts/`, {
            user: user.id,
            contact: otherUser.id,
            statut: statut
        })
        return response.data
    } catch (error) {
        console.error("Erreur d'ajout de contact:", error)
        throw error
    }
}

export const getPendingContact = async (user) => {
    try {
        const response = await axios.get(`${API_URL}contacts/`, {
            params: { utilisateurId: user.id },
        })
        return response.data
    } catch (error) {
        console.error("Erreur d'ajout de contact:", error)
        throw error
    }
}

export const updateContact = async (contact, statut) => {
    try {
        const response = await axios.put(`${API_URL}contacts/`, {
            contact_id: contact.id,
            statut: statut
        })
        return response.data
    } catch (error) {
        console.error("Erreur d'ajout de contact:", error)
        throw error
    }
}

export const getUsersForContact = async (utilisateurId) => {
    try {
        const response = await axios.get(`${API_URL}user-list-create/`, {
            params: { utilisateurId: utilisateurId },
        })
        return response.data
    } catch (error) {
        console.error('Erreur de récupération des users:', error)
        throw error
    }
}

