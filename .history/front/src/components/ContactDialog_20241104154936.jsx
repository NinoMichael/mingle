import React, { useState } from "react"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { TabMenu } from 'primereact/tabmenu'
import { Dialog } from "primereact/dialog"
import { Avatar } from "primereact/avatar"
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from "framer-motion"

import '../styles/chat.css'

const ContactDialog = ({ visible, inputSearchContact, setInputSearchContact, setContactsDialog, activeIndex, setActiveIndex }) => {
    const [selectedUser, setSelectedUser] = useState(null)

    const handleSelectedUser = (user) => {
        if (!selectedUser) {
            setSelectedUser(user)
        } else {
            setSelectedUser(null)
        }
    }

    const suggestedUser = [
        {
            id: 1,
            user: "Mirindra Harilala",
            phoneNumber: "+261 32 45 678 90",
        },
        {
            id: 2,
            user: "Mirindra Harilala",
            phoneNumber: "+261 32 45 678 90",
        },
    ]

    const tabItems = [
        {
            id: 1,
            label: 'Suggestions',
            content:
                <div className="overflow-y-auto">
                    {suggestedUser.map((user) => (
                        <div key={user.id} className="flex flex-row justify-between text-white hover:bg-blackPure rounded p-4"
                            onClick={() => handleSelectedUser(user)}>
                            <div className="flex flex-row cursor-pointer justify-start space-x-4">
                                <Avatar label="JC" shape="circle" className="font-poppins bg-blackPure" />

                                <div className="flex flex-col font-poppins -mt-6">
                                    <h4 className="text-sm">{user.user}</h4>
                                    <span className="text-xs -mt-4">{user.phoneNumber}</span>
                                </div>
                            </div>

                            <div>
                                <i className="pi pi-user-plus mt-2 cursor-pointer" title="Ajouter un contact"></i>
                            </div>
                        </div>
                    ))}
                </div>
        },
        {
            id: 2,
            label: 'Vos contacts',
            content:
                <div className="overflow-y-auto">
                    <div className="flex flex-row justify-between text-white hover:bg-blackPure rounded p-4">
                        <div className="flex flex-row cursor-pointer justify-start space-x-4">
                            <Avatar label="TA" shape="circle" className="font-poppins bg-blackPure" />

                            <div className="flex flex-col font-poppins -mt-6">
                                <h4 className="text-sm">Tax Andrian</h4>
                                <span className="text-xs -mt-4">+261 34 43 765 09</span>
                            </div>
                        </div>

                        <div>
                            <i className="pi pi-user mt-2 cursor-pointer" title="Voir profil"></i>
                        </div>
                    </div>
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

                    {selectedUser ? (
                        <div className="flex flex-col justify-center mt-6 shadow-lg">
                            <div>
                                <Avatar label="JC" size="xlarge" shape="circle" className="ms-36 me-36 text-white bg-blackPure flex justify-center items-center" />
                                <div className="mt-3 text-center">
                                    <h3 className="font-poppins">Tiavina Todisoa</h3>
                                    <p className="-mt-4 font-poppins text-xs">Habite à Soanierana</p>
                                </div>
                            </div>

                            <div className="mt-4 mx-12">
                                <h4 className="font-poppins text-sm">Contacts</h4>

                                <div>
                                    <h4></h4>
                                </div>

                            </div>

                            <Button label="Ajouter au contact" icon="pi pi-plus" className="font-poppins text-sm bg-blueSlate py-2 mt-4 mb-8 w-64 border border-none outline outline-none flex justify-center items-center mx-auto" />

                        </div >
                    ) : null}
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
