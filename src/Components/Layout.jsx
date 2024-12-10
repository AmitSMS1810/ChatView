import React from 'react'
import Router from '../Router'
import BotumPage from './BotumPage'


function Layout() {
    return (
        <>

            <div className='flex flex-col shadow-md'>
                
                <div className=''>
                    <Router />
                </div>
                <div className='fixed w-full bottom-0 left-0'>
                    <BotumPage />
                </div>

            </div>


        </>
    )
}

export default Layout
