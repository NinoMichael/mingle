import React, { useState, useEffect } from "react"
import { InputText } from "primereact/inputtext"
import { Dialog } from "primereact/dialog"
import { motion } from "framer-motion"
import { Avatar } from "primereact/avatar"
import PropTypes from 'prop-types'
import { getContacts } from "../API/ContactService"
import AuthService from "../API/AuthService"

import '../styles/chat.css'

const NewChatDialog = ({ visible, onClickDialog, inputSearchContact, setInputSearchContact, chatWithUser, onDataChange }) => {
    const [contacts, setContacts] = useState([])

    const userAuth = AuthService.getUserAuthentified()

    const ObjectUserChat = (user) => {
        onDataChange(user)
        onClickDialog(false)
    }

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const data = await getContacts(userAuth.id)
                setContacts(data)
            } catch (error) {
                console.error("Erreur lors de la récupération des contacts:", error)
            }
        }
        fetchContacts()
    }, [])


    return (
        <Dialog
            modal
            visible={visible}
            onHide={() => { if (!visible); return onClickDialog(false) }}
            content={({ hide }) => (
                <form>
                    <div className="bg-blackPure rounded-3xl">
                        <InputText
                            type="text"
                            value={inputSearchContact}
                            onChange={(e) => setInputSearchContact(e.target.value)}
                            className="custom-input-search font-poppins h-10 bg-transparent indent-3 border border-none placeholder:text-white text-white text-xs"
                            placeholder="Rechercher un contact"
                        />
                    </div>

                    <div className="overflow-y-auto mt-5">
                        {contacts.map((user) => (
                            <motion.argumentsdiv key={user.id} className="flex flex-row justify-between cursor-pointer text-white hover:bg-blackPure rounded p-4"
                                onClick={() => ObjectUserChat(user)}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}>
                                <div className="flex flex-row cursor-pointer justify-start space-x-5">
                                    {user.img ? (
                                        <Avatar image={`http://127.0.0.1:8000${user.imgContact}`} shape="circle" className="font-poppins bg-blackPure" />
                                    ) : (
                                        <Avatar label={user.contact.charAt(0)} shape="circle" className="font-poppins bg-blackPure" />
                                    )}
                                    <div className="flex flex-col font-poppins -mt-6">
                                        <h4 className="text-sm">{user.contact}</h4>
                                        <span className="text-xs -mt-4">{user.numeroContact}</span>
                                    </div>
                                </div>
                            </motion.argumentsdiv>
                        ))}
                    </div>

                    <div className="absolute right-4 bottom-4 cursor-pointer" title="Sortir" onClick={(e) => hide(e)}>
                        <i className="text-white pi pi-sign-out hover:text-blueSlate"></i>
                    </div>
                </form >

            )}
            className={`bg-blackAccent text-white w-[35vw] p-4 h-[70vh] rounded`}
        />
    )
}

NewChatDialog.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClickDialog: PropTypes.func.isRequired,
    inputSearchContact: PropTypes.string.isRequired,
    setInputSearchContact: PropTypes.func.isRequired,
    chatWithUser: PropTypes.func.isRequired,
    onDataChange: PropTypes.func.isRequired,
}

export default NewChatDialog
