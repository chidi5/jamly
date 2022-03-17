import React from 'react'

function Message({ variant, children }) {
    return (
        <div className={`bg-${variant}-100 text-${variant}-700 rounded-lg mt-5 py-5 px-6 text-base mb-3`}>
            {children}
        </div>
    )
}

export default Message
