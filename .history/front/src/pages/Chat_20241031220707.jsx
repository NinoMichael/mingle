import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Chat = () => {
    return (
        <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.8 }}>

        </motion.div>
    )
}

export default Chat