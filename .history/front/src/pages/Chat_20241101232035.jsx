import React, { useState } from "react";
import { motion } from "framer-motion";
import SideMenuChat from "../components/SideMenuChat";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";

const Chat = () => {
    const [inputMsg, setInputMsg] = useState("");
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleSelectMessage = (message) => {
        setSelectedMessage(message);
    };

    return (
        <>
            <SideMenuChat onSelectMessage={handleSelectMessage} />

            <motion.div
                initial="hidden"
                animate={selectedMessage ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="bg-blackPure w-[75vw] ms-[25vw]"
            >
                {!selectedMessage ? (
                    <div className="flex justify-center items-center m-auto pt-64">
                        <h3 className="text-gray-500">Aucun message sélectionné.</h3>
                    </div>
                ) : (
                    <>
                        <motion.header
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="h-16 shadow bg-blackAccent border flex flex-row justify-between px-6"
                        >
                            <div>
                                <h2 className="text-lg font-kanit text-white">{selectedMessage.user}</h2>
                                <span className="text-xs">{selectedMessage.phoneNumber}</span>
                            </div>
                            <Toolbar end={<YourToolbarButtons />} className="bg-transparent border-none" />
                        </motion.header>

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                            className="w-[72vw] absolute bottom-4 ms-4"
                        >
                            <div className="bg-blackAccent rounded-3xl px-3">
                                <InputTextarea
                                    rows={1}
                                    autoResize
                                    value={inputMsg}
                                    onChange={(e) => setInputMsg(e.target.value)}
                                    className="custom-input-search h-12"
                                    placeholder="Écrivez votre message"
                                />
                                <Button icon="pi pi-send" />
                            </div>
                        </motion.form>
                    </>
                )}
            </motion.div>
        </>
    );
};

export default Chat;
