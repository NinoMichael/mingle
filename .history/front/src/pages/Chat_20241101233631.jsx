import React, { useState } from "react"
import { motion } from "framer-motion"
import SideMenuChat from "../components/SideMenuChat"
import { InputTextarea } from "primereact/inputtextarea"
import { Button } from "primereact/button"
import ToolbarChat from "../components/ToolbarChat"

const Chat = () => {
    const [inputMsg, setInputMsg] = useState(null)
    const [msgContent, setMsgContent] = useState(false)
    const [selectedMessage, setSelectedMessage] = useState(null)

    const handleSelectMessage = (message) => {
        setSelectedMessage(message)
        setMsgContent(true)
    }

    return (
        <>
            <SideMenuChat onSelectMessage={handleSelectMessage} />

            <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.8 }} className="bg-blackPure w-[75vw] ms-[25vw]">
                {!msgContent && !selectedMessage ? (
                    <div className="flex justify-center items-center m-auto pt-64">
                        <h3 className="text-gray-500">Aucun message n'a été séléctionné pour le moment</h3>
                    </div>
                ) : (
                    <>
                        <motion.header
                            className="h-16 shadow bg-blackAccent border flex flex-row justify-between px-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex flex-col -mt-1">
                                <h2 className="text-lg font-kanit text-white">{selectedMessage.user}</h2>
                                <span className="text-xs -mt-4">{selectedMessage.phoneNumber}</span>
                            </div>

                            <ToolbarChat />
                        </motion.header>

                        <motion.form
                            className="w-[72vw] absolute bottom-4 ms-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-blackAccent rounded-3xl px-3">
                                <div className="p-inputgroup flex-1">
                                    <Button icon="pi pi-paperclip" title="Joindre un fichier" className="text-white border border-none bg-transparent p-inputgroup-addon outline outline-none" />

                                    <InputTextarea
                                        rows={1}
                                        autoResize
                                        value={inputMsg}
                                        onChange={(e) => setInputMsg(e.target.value)}
                                        className="custom-input-search h-12 pt-4 pb-4 flex items-center my-auto font-poppins bg-transparent border border-none placeholder:text-white text-white text-xs"
                                        placeholder="Écrivez votre message"
                                    />

                                    <Button icon="pi pi-face-smile" title="Emoji" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />
                                    <Button icon="pi pi-send" title="Envoyer" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />
                                </div>
                            </div>
                        </motion.form>
                    </>
                )}
            </motion.div>
        </>
    )
}

export default Chat
