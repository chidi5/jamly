import React from 'react'

function ScreenContainer({children}) {
    return (
        <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                {children}
                
            </div>
        </main>
    )
}

export default ScreenContainer
