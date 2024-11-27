import React, { useState, useEffect } from "react"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { TabMenu } from 'primereact/tabmenu'
import { Dialog } from "primereact/dialog"
import { Avatar } from "primereact/avatar"
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from "framer-motion"
import { getUsersForContact, getContacts, createPendingContact } from "../API/ContactService"

import '../styles/chat.css'

const ContactDialog = ({ visible, inputSearchContact, setInputSearchContact, setContactsDialog, activeIndex, setActiveIndex }) => {
    const [selectedUser, setSelectedUser] = useState(null)
    const [users, setUsers] = useState([])
    const [contacts, setContacts] = useState([])
    const [iconClicked, setIconClicked] = useState(false)

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsersForContact(user.id)
                setUsers(data)
                console.log(users)
            } catch (error) {
                console.error("Erreur lors de la récupération des users:", error)
            }
        }
        fetchUsers()
    }, [])

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const data = await getContacts(user.id)
                setContacts(data)
            } catch (error) {
                console.error("Erreur lors de la récupération des contacts:", error)
            }
        }
        fetchContacts()
    }, [])


    const handleAddContact = async (otherUser) => {
        setIconClicked(true)

        await createPendingContact(user, otherUser, 'pending')
    }

    const tabItems = [
        {
            id: 1,
            label: 'Suggestions',
            content:
                <div className="overflow-y-auto">
                    {users.map((user) => (
                        <motion.argumentsdiv key={user.id} className="flex flex-row justify-between text-white hover:bg-blackPure rounded p-4"
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}>
                            <div className="flex flex-row cursor-pointer justify-start space-x-4">
                                {user.img ? (
                                    <Avatar image={`http://127.0.0.1:8000${user.img}`} shape="circle" className="font-poppins bg-blackPure" />
                                ) : (
                                    <Avatar label={user.identifiant.charAt(0)} shape="circle" className="font-poppins bg-blackPure" />
                                )}
                                <div className="flex flex-col font-poppins -mt-6">
                                    <h4 className="text-sm">{user.identifiant}</h4>
                                    <span className="text-xs -mt-4">{user.numero}</span>
                                </div>
                            </div>

                            <div>
                                {
                                    iconClicked ? (
                                        <i className="pi pi-check mt-2 cursor-pointer hover:text-blueSlate" title="Invitation envoyée"></i>
                                    ) : (
                                        <i className="pi pi-user-plus mt-2 cursor-pointer hover:text-blueSlate" title="Ajouter un contact" onClick={() => handleAddContact(user)}></i>
                                    )
                                }

                            </div>
                        </motion.argumentsdiv>
                    ))}
                </div>
        },
        {
            id: 2,
            label: 'Vos contacts',
            content:
                <div className="overflow-y-auto">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="flex flex-row justify-between text-white hover:bg-blackPure rounded p-4">
                            <div className="flex flex-row cursor-pointer justify-start space-x-4">
                                {contact.imgContact ? (
                                    <Avatar image={`http://127.0.0.1:8000${contact.imgContact}`} shape="circle" className="font-poppins bg-blackPure" />
                                ) : (
                                    <Avatar label={contact.contact.charAt(0)} shape="circle" className="font-poppins bg-blackPure" />
                                )}

                                <div className="flex flex-col font-poppins -mt-6">
                                    <h4 className="text-sm">{contact.contact}</h4>
                                    <span className="text-xs -mt-4">{contact.numeroContact}</span>
                                </div>
                            </div>

                            <div>
                                <i className="pi pi-user mt-2 cursor-pointer" title="Voir profil"></i>
                            </div>
                        </div>
                    ))}

                </div>
        }
    ]

    return (
        <Dialog
            modal
            visible={visible}
            onHide={() => { if (!visible) return; setContactsDialog(false) }}
            content={({ hide }) => (
                <div className={selectedUser ? "flex flex-row space-x-3" : ""}>
                    <form className={selectedUser ? "w-[30vw] p-4" : ""}>
                        <div className="bg-blackPure rounded-3xl">
                            <div className="p-inputgroup flex-1 ">
                                <InputText
                                    type="text"
                                    value={inputSearchContact}
                                    onChange={(e) => setInputSearchContact(e.target.value)}
                                    className="custom-input-search font-poppins h-10 bg-transparent indent-3 border border-none placeholder:text-white text-white text-xs"
                                    placeholder="Rechercher un contact"
                                />
                                <Button icon="pi pi-search" className="text-white border border-none bg-transparent p-inputgroup-addon outline outline-none" />
                            </div>
                        </div>

                        <TabMenu model={tabItems} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}
                            className="custom-tabmenu bg-blackAccent mt-2" />

                        <AnimatePresence>
                            <motion.div className="mt-4"
                                key={activeIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                {tabItems[activeIndex].content}
                            </motion.div>
                        </AnimatePresence>

                        <div className={`absolute ${selectedUser ? "right-[27.5rem]" : "right-4"} bottom-4 cursor-pointer`} title="Sortir" onClick={(e) => hide(e)}>
                            <i className="text-white pi pi-sign-out hover:text-blueSlate"></i>
                        </div>
                    </form>

                    <AnimatePresence>
                        {selectedUser && (
                            <motion.div
                                className="flex flex-col justify-center mt-6 shadow-lg"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                            >
                                <div>
                                    {selectedUser.img ? (
                                        <Avatar image={selectedUser.img} size="xlarge" shape="circle" className="ms-36 me-36 text-white bg-blackPure flex justify-center items-center" />
                                    ) : (
                                        <Avatar label={selectedUser.user.charAt(0)} size="xlarge" shape="circle" className="ms-36 me-36 text-white bg-blackPure flex justify-center items-center" />
                                    )}
                                    <div className="mt-3 text-center">
                                        <h3 className="font-poppins">{selectedUser.identifiant}</h3>
                                        <p className="-mt-4 font-poppins text-xs"><i className="pi pi-map-marker me-3 text-[0.8em]"></i>Habite à {selectedUser.location}</p>
                                    </div>
                                </div>

                                <div className="mt-4 mx-12">
                                    <h4 className="font-poppins text-sm">Contacts</h4>
                                    <div>
                                        <p className="text-sm text-white font-poppins"><i className="pi pi-phone me-3"></i>{selectedUser.numero}</p>
                                        <p className="text-sm text-white font-poppins"><i className="pi pi-envelope me-3"></i>{selectedUser.email}</p>
                                    </div>
                                </div>

                                <Button label="Ajouter au contact" icon="pi pi-plus" className="font-poppins text-sm bg-blueSlate py-2 mt-8 mb-16 w-64 border-none flex justify-center items-center mx-auto" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div >

            )}
            className={`bg-blackAccent text-white ${selectedUser ? "w-[60vw]" : "w-[35vw] p-4"} h-[70vh] rounded`}
        />
    )
}

ContactDialog.propTypes = {
    visible: PropTypes.bool.isRequired,
    setContactsDialog: PropTypes.func.isRequired,
    inputSearchContact: PropTypes.string.isRequired,
    setInputSearchContact: PropTypes.func.isRequired,
    activeIndex: PropTypes.number.isRequired,
    setActiveIndex: PropTypes.func.isRequired,
}

export default ContactDialog
