import React, { useState } from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import { InputTextarea } from "primereact/inputtextarea"
import { Button } from "primereact/button"

const ChatForm = ({ onSubmitMessage }) => {
    const [inputMsg, setInputMsg] = useState("")

    const handleInputChange = (e) => {
        setInputMsg(e.target.value)
    }

    const handleSendMessage = () => {
        if (inputMsg.trim()) {
            onSubmitMessage(inputMsg)
            setInputMsg("")
        }
    }

    return (
        <motion.form
            className="w-[72vw] absolute bottom-4 ms-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="bg-blackAccent rounded-3xl px-3">
                <div className="p-inputgroup flex-1">
                    <Button icon="pi pi-paperclip" title="Joindre un fichier" className="text-white border border-none bg-transparent p-inputgroup-addon outline-none" />

                    <InputTextarea
                        rows={1}
                        autoResize
                        value={inputMsg}
                        onChange={handleInputChange}
                        className="custom-input-search h-12 pt-4 pb-4 flex items-center my-auto font-poppins bg-transparent border-none placeholder:text-white text-white text-xs"
                        placeholder="Écrivez votre message"
                    />

                    <Button icon="pi pi-face-smile" title="Emoji" className="text-white border border-none p-inputgroup-addon bg-transparent outline-none" />
                    <Button icon="pi pi-send" title="Envoyer" className="text-white border border-none p-inputgroup-addon bg-transparent outline-none" onClick={handleSendMessage} />
                </div>
            </div>
        </motion.form>
    )
}

ChatForm.propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
}

export default ChatForm
