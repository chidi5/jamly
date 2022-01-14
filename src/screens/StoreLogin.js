import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Background from '../static/images/background.svg'

function StoreLogin({
    signUp,
    setSignUp,
}) {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //const [signUp, setSignUp] = useState(false);
    //const container = document.getElementById('container')

    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.backgroundImage=`url(${Background})`
    
        return() => {
            document.body.style.backgroundImage= 'none'
        }
    }, []); // triggered on route change

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Submit")
        navigate('/admin')
    }

    return (
        <div className='flex flex-col justify-center items-center h-screen px-6'>
            <div id="container" className={"bg-white rounded-xl shadow-md relative overflow-hidden w-768 max-w-full min-h-48 " + (signUp ? 'right-panel-active' : '') }>
                <div className={"form-container z-10 xl:w-3/6 w-full sign-up-container " + (pathname === '/get-started' ? 'xl:w-full max-screen' : 'xl:block')}>
                    <form onSubmit={submitHandler} className='bg-white h-full flex-col flex justify-center xl:px-12 px-7'>
                        <h2 className="m-0 font-bold text-2xl text-gray-900">Create Account</h2>
                        <p className="leading-5 tracking-wide font-medium text-xs text-gray-800 my-3">Create your store and get started</p>
                        <input type="email" className='bg-gray-910 border-0 focus:ring-2 focus:ring-teal-951 focus:rounded-md text-sm px-4 w-full my-2' placeholder="Email" required />
                        <input type="password" className='bg-gray-910 border-0 focus:ring-2 focus:ring-teal-951 focus:rounded-md text-sm px-4 w-full my-2' placeholder="Password" required />
                        <div className='relative flex'>
                            <input type="text" className='flex-1 bg-gray-910 border-0 focus:ring-2 focus:ring-inset focus:ring-teal-951 focus:rounded-md text-sm px-4 w-full my-2 pr-3' placeholder="Your store name" required />
                            <span className='my-2 px-2 py-2 bg-gray-910 sm:text-sm'>.jamly.com</span>
                        </div>
                        <p className="leading-5 tracking-wide font-medium text-xs text-gray-800 my-3">By proceeding, you agree with our
                            <Link to="#" className='text-teal-951 hover:border-teal-950 pl-1'> Terms & Conditions</Link>
                        </p>
                        <button className="bg-teal-951 text-white rounded border border-teal-951 py-3 px-11 text-sm hover:bg-teal-950 hover:border-teal-950">Sign Up</button>
                        <div className="xl:hidden text-xs font-medium text-gray-500 pt-2">
                            <span>
                                Already a member?
                                <Link to="#" className="text-teal-951 hover:border-teal-950 pl-1" onClick={() => setSignUp(!signUp)}>
                                    Sign In
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
                <div className="form-container z-10 xl:w-3/6 w-full sign-in-container">
                    <form onSubmit={submitHandler} className='bg-white h-full flex-col flex justify-center xl:px-12 px-7'>
                        <h2 className="m-0 font-bold text-2xl text-gray-900">Log in</h2>
                        <p className="leading-5 tracking-wide font-medium text-xs text-gray-800 my-3">Continue to ZeeShop</p>
                        <input id="email" className='bg-gray-910 border-0 focus:ring-2 focus:ring-teal-951 focus:rounded-md text-sm px-4 w-full my-2' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input id="password" className='bg-gray-910 border-0 focus:ring-2 focus:ring-teal-951 focus:rounded-md text-sm px-4 w-full my-2' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Link to="#" className='text-teal-951 my-3 font-medium text-xs hover:border-teal-950'>Forgot your password?</Link>
                        <button type='submit' className="bg-teal-951 text-white rounded border border-teal-951 py-3 px-11 text-sm hover:bg-teal-950 hover:border-teal-950 ease-in duration-75 transform">Sign In</button>
                        <div className="xl:hidden text-xs font-medium text-gray-500 pt-2">
                            <span>
                                Not a member?
                                <Link to='#' className="text-teal-951 hover:border-teal-950 pl-1" onClick={() =>setSignUp(!signUp)}>
                                    Get started
                                </Link> 
                            </span>
                        </div>
                    </form>
                </div>
                <div className="z-60 hidden xl:block overlay-container">
                    <div className="overlay relative -left-full text-white h-full">
                        <div className="overlay-panel overlay-left ">
                            <h1 className='font-bold text-3xl m-0'>Welcome Back!</h1>
                            <p className='leading-5 tracking-wide text-xs my-3'>To keep connected, Login to see what you've missed</p>
                            <button className="bg-transparent border-white border rounded py-3 px-11 text-sm w-full" id="signIn" onClick={() => setSignUp(!signUp)}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className='font-bold text-3xl m-0'>Hello, Jamlies!</h1>
                            <p className='leading-5 tracking-wide text-xs my-3'>Enter your details and start your journey with us</p>
                            <button className="bg-transparent border-white border rounded py-3 px-11 text-sm w-full" id="signUp" onClick={() =>setSignUp(!signUp)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreLogin
