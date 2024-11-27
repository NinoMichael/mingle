import axios from "axios"

const API_BASE_URL = "http://127.0.0.1:8000/api/messaging/message/"

export const sendMessage = async (contenu, emetteurId, destinataireId) => {
    try {
        const response = await axios.post(
            API_BASE_URL,
            {
                contenu,
                emetteur_id: emetteurId,
                destinataire_id: destinataireId,
            },
        )
        return response.data
    } catch (error) {
        console.error("Erreur lors de l'envoi du message :", error.response?.data || error.message)
        throw error
    }
}

export const fetchMessages = async (senderId, receiverId) => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/messaging/message/?senderId=${senderId}&receiverId=${receiverId}`
        )
        return response.data
    } catch (error) {
        console.error("Erreur lors de la récupération des messages :", error.response?.data || error.message)
        throw error
    }
}



