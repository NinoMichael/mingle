import React from "react"
import PropTypes from "prop-types"

const MessageBlock = ({ message, isUser }) => {
    return (
        {
            isUser?(
                <div className = "flex justify-end mb-2" >
                    <div className="px-3 py-2 rounded-lg bg-blueSlate text-white max-w-xs">
                        <p className="text-sm">{message}</p>
                    </div>
            </div >
        ) : (
    <div className="flex justify-start mb-2">
        <div className="px-3 py-2 rounded-lg bg-blackAccent text-white max-w-xs">
            <p className="text-sm">{message}</p>
        </div>
    </div>
)}
        
    )
}

MessageBlock.propTypes = {
    message: PropTypes.string.isRequired,
    isUser: PropTypes.bool.isRequired,
}

export default MessageBlock
