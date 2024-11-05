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

    return (
        <>
            <SideMenuChat onSelectMessage={setSelectedMessage} />

            <motion.div className="bg-blackPure w-[75vw] ms-[25vw] relative">
                <AnimatePresence>
                    {!selectedMessage ? (
                        <motion.div
                            key="no-message"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex justify-center items-center h-full pt-64"
                        >
                            <h3 className="text-gray-500">Aucun message n'a été sélectionné pour le moment</h3>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={selectedMessage.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col"
                        >
                            <header className="h-16 shadow bg-blackAccent border flex flex-row justify-between px-6">
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-lg font-kanit text-white">{selectedMessage.user}</h2>
                                    <span className="text-xs text-gray-400">{selectedMessage.phoneNumber}</span>
                                </div>
                                <Toolbar end={toolBar} className="bg-transparent border-none" />
                            </header>

                            <div className="flex-grow bg-blackAccent p-4 overflow-y-auto">
                                {/* Contenu du chat */}
                                <p className="text-white">Contenu du chat avec {selectedMessage.user}</p>
                            </div>

                            <form className="w-full px-6 pb-4">
                                <div className="bg-blackAccent rounded-3xl px-3 py-2 flex items-center">
                                    <Button icon="pi pi-paperclip" title="Joindre un fichier" className="text-white border-none bg-transparent p-inputgroup-addon outline-none mr-2" />

                                    <InputTextarea
                                        rows={1}
                                        autoResize
                                        value={inputMsg}
                                        onChange={(e) => setInputMsg(e.target.value)}
                                        className="custom-input-search h-10 flex-1 bg-transparent border-none placeholder:text-white text-white text-xs"
                                        placeholder="Écrivez votre message"
                                    />

                                    <Button icon="pi pi-face-smile" className="text-white border-none bg-transparent p-inputgroup-addon outline-none mr-2" />
                                    <Button icon="pi pi-send" className="text-white border-none bg-transparent p-inputgroup-addon outline-none" />
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default Chat;
