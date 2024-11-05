import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SideMenuChat from "../components/SideMenuChat"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"

const Chat = () => {
    const [inputMsg, setInputMsg] = useState(null)

    return (
        <>
            <SideMenuChat />

            <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.8 }} className="bg-blackPure w-[75vw] ms-[25vw]">
                <header className="h-16 shadow bg-blackAccent border">

                </header>

                <form className="w-[75vw] absolute bottom-1 h-16 ms-2 me-64">
                    <div className="bg-blackAccent rounded-3xl">
                        <div className="p-inputgroup flex-1 ">
                            <InputText type="email" value={inputMsg} onChange={(e) => setInputMsg(e.target.value)}
                                className="custom-input-search font-poppins h-10 bg-transparent indent-3 border border-none placeholder:text-white text-white text-xs"
                                placeholder="Rechercher" />
                            <Button icon="pi pi-search" className="text-white border border-none bg-transparent p-inputgroup-addon outline outline-none" />
                        </div>
                    </div>
                </form>
            </motion.div>
        </>
    )
}

export default Chat