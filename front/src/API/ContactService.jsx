import axios from 'axios';

const API_URL_CONTACT = 'http://127.0.0.1:8000/api/users/contact/';

export const getContact = async (token) => {
    try {
        const response = await axios.get(API_URL_CONTACT, {
            headers: {
                Authorization: `Bearer ${token}`, // Utiliser le bon format de token si nécessaire
            },
        });
        return response.data;
    } catch (error) {
        console.error('Erreur de récupération des contacts:', error);
        throw error;
    }
};
