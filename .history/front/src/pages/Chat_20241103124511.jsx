// Chat.js
import React, { useState } from "react"
import { motion } from "framer-motion"
import SideMenuChat from "../components/SideMenuChat"
import ToolbarChat from "../components/ToolbarChat"
import ChatForm from "../components/ChatForm"
import MessageBlock from "../components/MessageBlock"

const Chat = () => {
    const [messages, setMessages] = useState([])
    const [selectedMessage, setSelectedMessage] = useState(null)
    const [msgContent, setMsgContent] = useState(false)

    const handleSelectMessage = (message) => {
        setSelectedMessage(message)
        setMsgContent(true)
    }

    const handleSubmitMessage = (message) => {
        // Ajout d'un message en tant qu'utilisateur (côté droit)
        setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }])
    }

    return (
        <>
            <SideMenuChat onSelectMessage={handleSelectMessage} />

            <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.8 }} className="bg-blackPure w-[75vw] ms-[25vw]">
                {!msgContent && !selectedMessage ? (
                    <div className="flex justify-center items-center m-auto pt-64">
                        <h3 className="text-gray-500">Aucun message n'a été sélectionné pour le moment</h3>
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

                        <div className="py-4 px-6 h-[calc(100vh-120px)] overflow-y-auto bg-blackPure">
                            {messages.map((msg, index) => {
                                // Vérification du message précédent pour afficher l'avatar uniquement pour la première instance de messages consécutifs du même utilisateur
                                const prevMsg = messages[index - 1];
                                const showAvatar = !msg.isUser && (!prevMsg || prevMsg.isUser);

                                return (
                                    <MessageBlock
                                        key={index}
                                        message={msg.text}
                                        isUser={msg.isUser}
                                        showAvatar={showAvatar} // Ajout de la prop showAvatar
                                    />
                                );
                            })}
                        </div>

                        <ChatForm onSubmitMessage={handleSubmitMessage} />
                    </>
                )}
            </motion.div>
        </>
    )
}

export default Chat;
