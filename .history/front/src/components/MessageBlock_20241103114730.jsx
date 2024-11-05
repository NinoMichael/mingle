import React from "react"
import PropTypes from "prop-types"

const MessageBlock = ({ message, isUser }) => {
    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
            <div className={`px-3 py-2 rounded-lg ${isUser ? "bg-blue-500 text-white" : "bg-gray-300 text-black"} max-w-xs`}>
                <p className="text-sm">{message}</p>
            </div>
        </div>
    )
}

MessageBlock.propTypes = {
    message: PropTypes.string.isRequired,
    isUser: PropTypes.bool.isRequired,
}

export default MessageBlock
