import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SideMenuChat from "../components/SideMenuChat"

const Chat = () => {
    return (
        <>
            <SideMenuChat />

            <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.8 }} className="bg-blackPure w-[73vw] ms-[25vw]">
                <header className="h-20 shadow bg-blackAccent border">

                </header>
            </motion.div>
        </>
    )
}

export default Chat