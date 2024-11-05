// Chat.js
import React, { useState } from "react"
import { motion } from "framer-motion"
import SideMenuChat from "../components/SideMenuChat"
import ToolbarChat from "../components/ToolbarChat"
import ChatForm from "../components/ChatForm"

const Chat = () => {
    const [msgContent, setMsgContent] = useState(false)
    const [selectedMessage, setSelectedMessage] = useState(null)

    const handleSelectMessage = (message) => {
        setSelectedMessage(message)
        setMsgContent(true)
    }

    const handleSubmitMessage = (message) => {
        console.log("Message envoyé:", message)
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

                        <ChatForm onSubmitMessage={handleSubmitMessage} />
                    </>
                )}
            </motion.div>
        </>
    )
}

export default Chat
