import React, { useState } from "react";
import { motion } from "framer-motion";
import SideMenuChat from "../components/SideMenuChat";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";

const Chat = () => {
    const [inputMsg, setInputMsg] = useState("");
    const [msgContent, setMsgContent] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);

    const toolBar = (
        <div className="flex flex-row">
            <Button icon="pi pi-search" title="Rechercher un contenu" className="text-white border border-none bg-transparent" />
            <Button icon="pi pi-phone" title="Appel vocal" className="text-white border border-none bg-transparent" />
            <Button icon="pi pi-video" title="Appel vidéo" className="text-white border border-none bg-transparent" />
            <Button icon="pi pi-ellipsis-v" title="Options" className="text-white border border-none bg-transparent" />
        </div>
    );

    const handleSelectMessage = (message) => {
        setSelectedMessage(message);
        setMsgContent(true);
    };

    return (
        <>
            <SideMenuChat onSelectMessage={handleSelectMessage} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-blackPure w-[75vw] ms-[25vw] h-screen"
            >
                {!msgContent && !selectedMessage ? (
                    <div className="flex justify-center items-center m-auto pt-64">
                        <h3 className="text-gray-500">Aucun message n'a été sélectionné pour le moment.</h3>
                    </div>
                ) : (
                    <>
                        <motion.header
                            className="h-16 shadow bg-blackAccent flex flex-row justify-between px-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex flex-col">
                                <h2 className="text-lg font-kanit text-white">{selectedMessage.user}</h2>
                                <span className="text-xs text-gray-300">{selectedMessage.phoneNumber}</span>
                            </div>
                            <Toolbar end={toolBar} className="bg-transparent border-none" />
                        </motion.header>

                        <motion.form
                            className="w-[72vw] absolute bottom-4 ms-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-blackAccent rounded-3xl px-3">
                                <div className="p-inputgroup flex">
                                    <Button icon="pi pi-paperclip" title="Joindre un fichier" className="text-white border border-none bg-transparent" />
                                    <InputTextarea
                                        rows={1}
                                        autoResize
                                        value={inputMsg}
                                        onChange={(e) => setInputMsg(e.target.value)}
                                        className="custom-input-search h-12 bg-transparent text-white placeholder:text-white border-none"
                                        placeholder="Écrivez votre message"
                                    />
                                    <Button icon="pi pi-send" className="text-white border border-none bg-transparent" />
                                </div>
                            </div>
                        </motion.form>
                    </>
                )}
            </motion.div>
        </>
    );
};

export default Chat;
