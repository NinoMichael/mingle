import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

const MessageBlock = ({ message, isUser }) => {
    return isUser ? (
        <motion.div
            className="flex justify-end mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="px-3 py-1 rounded-lg bg-blueSlate text-white max-w-xs">
                <p className="text-sm">{message}</p>
            </div>
        </motion.div>
    ) : (
        <motion.div
            className="flex justify-start mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="px-3 py-1 rounded-lg bg-blackAccent text-white max-w-xs">
                <p className="text-sm">{message}</p>
            </div>
        </motion.div>
    )
}

MessageBlock.propTypes = {
    message: PropTypes.string.isRequired,
    isUser: PropTypes.bool.isRequired,
}

export default MessageBlock
