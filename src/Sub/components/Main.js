import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import PrivateLayout from './PrivateLayout'
import PublicLayout from './PublicLayout'

function Main({subDomain}) {
    const { pathname } = useLocation()
    return (
        <Fragment>
            {pathname.includes('admin') ?
                <PrivateLayout />
                :<PublicLayout subDomain={subDomain} />
            }
        </Fragment>
    )
}

export default Main
