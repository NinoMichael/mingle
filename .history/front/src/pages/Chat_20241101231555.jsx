import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SideMenuChat from "../components/SideMenuChat";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";

const Chat = () => {
    const [inputMsg, setInputMsg] = useState("");
    const [selectedMessage, setSelectedMessage] = useState(null);

    const toolBar = (
        <div className="flex flex-row">
            <Button icon="pi pi-search" title="Rechercher un contenu" className="text-white border-none p-inputgroup-addon bg-transparent outline-none" />
            <Button icon="pi pi-phone" title="Appel vocal" className="text-white border-none p-inputgroup-addon bg-transparent outline-none" />
            <Button icon="pi pi-video" title="Appel vidéo" className="text-white border-none p-inputgroup-addon bg-transparent outline-none" />
            <Button icon="pi pi-ellipsis-v" title="Option" className="text-white border-none p-inputgroup-addon bg-transparent outline-none" />
        </div>
    );

    const handleSelectMessage = (message) => {
        setSelectedMessage(message);
    };

    return (
        <>
            <SideMenuChat onSelectMessage={handleSelectMessage} />

            <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.8 }} className="bg-blackPure w-[75vw] ms-[25vw]">
                <AnimatePresence>
                    {selectedMessage ? (
                        <>
                            <motion.header
                                key={selectedMessage.id}
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

                                <div>
                                    <Toolbar end={toolBar} className="bg-transparent border-none" />
                                </div>
                            </motion.header>

                            <motion.form
                                key={selectedMessage.id + "-form"}
                                className="w-[72vw] absolute bottom-4 ms-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="bg-blackAccent rounded-3xl px-3">
                                    <div className="p-inputgroup flex-1">
                                        <Button icon="pi pi-paperclip" title="Joindre un fichier" className="text-white border-none bg-transparent p-inputgroup-addon outline-none" />

                                        <InputTextarea
                                            rows={1}
                                            autoResize
                                            value={inputMsg}
                                            onChange={(e) => setInputMsg(e.target.value)}
                                            className="custom-input-search h-12 pt-4 pb-4 flex items-center my-auto font-poppins bg-transparent border-none placeholder:text-white text-white text-xs"
                                            placeholder="Écrivez votre message"
                                        />

                                        <Button icon="pi pi-face-smile" className="text-white border-none p-inputgroup-addon bg-transparent outline-none" />
                                        <Button icon="pi pi-send" className="text-white border-none p-inputgroup-addon bg-transparent outline-none" />
                                    </div>
                                </div>
                            </motion.form>
                        </>
                    ) : (
                        <motion.div
                            key="no-message"
                            className="flex justify-center items-center m-auto pt-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <h3 className="text-gray-500">Aucun message n'a été sélectionné pour le moment</h3>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default Chat;
