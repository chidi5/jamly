import React from 'react'

function Message({ variant, children }) {
    return (
        <div className={`bg-${variant}-100 rounded-lg py-5 px-6 text-base text-${variant}-700 mb-3`} role="alert">
            {children}
        </div>
    )
}

export default Message
