import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Hero from '../static/images/hero.png'

function Landing() {
    const navigate = useNavigate()

    const getStarted = () => {
        navigate('/get-started')
    }
    return (
        <div className='min-h-full'>
            <header className='bg-teal-950'>
                <nav className='top-0 z-30'>
                    <div className='px-4 sm:px-6 lg:px-8'>
                        <div className='flex items-center justify-between h-16 -mb-px'>
                            {/* Header: Left side */}
                            <div className="flex">
                            </div>
                            <div className='flex items-center'>
                                <Link to='/store-login' className='text-white'>Login</Link>
                                {/*  Divider */}
                                <hr className="w-px h-6 bg-gray-200 mx-3" />
                                {/* User */}
                                <button className="btn bg-white text-gray-800 hover:text-gray-900 font-bold" onClick={getStarted}>
                                    <span className="xs:block">Get Started</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </nav>
            </header>
            <main className='min-h-full'>
                <section className='welcome'>
                    <div className='text-center pb-3 pt-16 px-4'>
                        <h1 className='font-bold text-white xl:text-6xl text-3xl pb-3'>Sell online with Jamly</h1>
                        <p className='text-white xl:text-3xl text-2xl xl:tracking-tight'>Trusted Way to get your store online and fast</p>
                    </div>
                    <div className='text-center px-4 flex flex-col'>
                        <form className='py-5'>
                            <input className='xl:w-3/12 md:w-4/12 w-full h-12 rounded-md border-0 focus:ring-transparent py-5 px-5' type='email' name='email' placeholder='Enter your email address...' />
                            <button className='bg-gray-800 text-white px-8 py-3 rounded-md md:ml-2 mt-3 md:w-auto w-full'>Start Free Trial</button>
                        </form>
                        <p className='text-white justify-center text-xs md:px-36 xl:px-96'>Try Jamly for free, no payment required. By entering your email you agree to receive marketing emails from Jamly </p>
                    </div>
                    <div className='px-4 pt-8'>
                        <div className='flex justify-center text-center'>
                            <picture>
                                <img src={Hero} className='w-full object-cover md:h-full md:w-98' alt="hero" />
                            </picture>
                        </div>
                    </div>
                </section>
                <section></section>
            </main>
        </div>
    )
}

export default Landing
