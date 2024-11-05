import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SideMenuChat from "../components/SideMenuChat"

const Chat = () => {
    return (
        <>
            <SideMenuChat />

            <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.8 }} className="bg-blackPure w-[75vw] ms-[25vw]">
                <header className="h-16 shadow bg-blackAccent border">

                </header>

                <form className="bg-white w-[75vw] ms-[25vw] absolute top-24 mt-[95vh]">

                </form>
            </motion.div>
        </>
    )
}

export default Chat