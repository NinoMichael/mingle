import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SideMenuChat from "../components/SideMenuChat"
import { InputTextarea } from "primereact/inputtextarea"
import { Button } from "primereact/button"

const Chat = () => {
    const [inputMsg, setInputMsg] = useState(null)

    return (
        <>
            <SideMenuChat />

            <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.8 }} className="bg-blackPure w-[75vw] ms-[25vw]">
                <header className="h-16 shadow bg-blackAccent border">

                </header>

                <form className="w-[72vw] absolute bottom-20 ms-4">
                    <div className="bg-blackAccent rounded-3xl px-3">
                        <div className="p-inputgroup flex-1 h-16">
                            <Button icon="pi pi-paperclip" title="Joindre un fichier" className="text-white border border-none bg-transparent p-inputgroup-addon outline outline-none" />

                            <InputTextarea rows={1} autoResize value={inputMsg} onChange={(e) => setInputMsg(e.target.value)}
                                className="custom-input-search flex items-center my-auto font-poppins bg-transparent border border-none placeholder:text-white text-white text-xs"
                                placeholder="Rechercher" />

                            <Button icon="pi pi-face" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />
                            <Button icon="pi pi-send" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />

                        </div>
                    </div>
                </form>
            </motion.div>
        </>
    )
}

export default Chat