import React from "react"
import PropTypes from "prop-types"

const MessageBlock = ({ message, isUser }) => {
    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
            <div className={`px-3 py-2 rounded-lg ${isUser ? "bg-blueSlate" : "bg-blackAccent"} text-white max-w-xs`}>
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
