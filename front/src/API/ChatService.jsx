import axios from 'axios'

const API_URL_MESSAGES = 'http://127.0.0.1:8000/api/messages/'

export const getMessages = async (conversationId) => {
    try {
        const response = await axios.get(`${API_URL_MESSAGES}?conversation_id=${conversationId}`, { mode: "cors" })
        return response.data
    } catch (error) {
        console.error("Erreur de récupération des messages:", error)
        throw error
    }
}

export const sendMessage = async (conversationId, emetteurId, contenuChiffre) => {
    try {
        const response = await axios.post(API_URL_MESSAGES, {
            conversation: conversationId,
            emetteur: emetteurId,
            contenu_chiffre: contenuChiffre
        }, { mode: "cors" })
        return response.data
    } catch (error) {
        console.error("Erreur d'envoi du message:", error)
        throw error
    }
}
