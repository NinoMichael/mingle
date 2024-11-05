import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SideMenuChat from "../components/SideMenuChat"
import { InputTextarea } from "primereact/inputtextarea"
import { Button } from "primereact/button"
import { Toolbar } from "primereact/toolbar"

const Chat = () => {
    const [inputMsg, setInputMsg] = useState(null)
    const [msgContent, setMsgContent] = useState(false)

    const toolBar = (
        <div className="flex flex-row">
            <Button icon="pi pi-search" className="text-black border border-none p-inputgroup-addon bg-transparent outline outline-none" />
            <Button icon="pi pi-search" className="text-black border border-none p-inputgroup-addon bg-transparent outline outline-none" />
        </div>
    )

    return (
        <>
            <SideMenuChat />

            <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.8 }} className="bg-blackPure w-[75vw] ms-[25vw]">
                {msgContent ? (
                    <div className="flex justify-center items-center m-auto pt-64">
                        <h3 className="text-gray-500">Aucun message n'a été séléctionné pour le moment</h3>
                    </div>
                ) : (
                    <>
                        <header className="h-16 shadow bg-blackAccent border flex flex-row justify-between px-6" >
                            <div className="flex flex-col -mt-1">
                                <h2 className="text-lg font-kanit text-white">Mirindra Harilala</h2>
                                <span className="text-xs -mt-4">+261 32 42 859 86</span>
                            </div>

                            <div>
                                <Toolbar end={toolBar} />
                            </div>
                        </header>

                        <form className="w-[72vw] absolute bottom-4 ms-4">
                            <div className="bg-blackAccent rounded-3xl px-3">
                                <div className="p-inputgroup flex-1">
                                    <Button icon="pi pi-paperclip" title="Joindre un fichier" className="text-white border border-none bg-transparent p-inputgroup-addon outline outline-none" />

                                    <InputTextarea rows={1} autoResize value={inputMsg} onChange={(e) => setInputMsg(e.target.value)}
                                        className="custom-input-search h-12 pt-4 pb-4 flex items-center my-auto font-poppins bg-transparent border border-none placeholder:text-white text-white text-xs"
                                        placeholder="Ecrivez votre message" />

                                    <Button icon="pi pi-face-smile" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />
                                    <Button icon="pi pi-send" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />

                                </div>
                            </div >
                        </form >
                    </>

                )}



            </motion.div >
        </>
    )
}

export default Chat