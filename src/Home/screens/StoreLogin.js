import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Background from '../../static/images/background.svg'
import Message from '../components/Message'
import { logout, register } from '../../actions/user'
import { login } from '../../actions/user'


function StoreLogin({
    signUp,
    setSignUp,
}) {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [store_name, setStoreName] = useState('')
    const [store_domain, setStoreDomain] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const { pathname, search } = useLocation()

    const isLogOutUrl = new URLSearchParams(search).get("isLogout")
    const isLogout = isLogOutUrl ? isLogOutUrl : null

    const userRegister = useSelector(state => state.userRegister)
    const { error } = userRegister

    const userLogin = useSelector(state => state.userLogin)
    const { error: errorLogin, userInfo } = userLogin

    //console.log(isComplete)

    useEffect(() => {
        if (userInfo) {
            //console.log(isComplete)
            if (userInfo.user_details.profile_complete) {
                window.location.assign(`${window.location.protocol}//${userInfo.store_details.sub_domain}.joshuaigbokwe.shop/admin`)
                //navigate(redirect)
                //console.log(isComplete)
                //console.log(`${window.location.protocol}//${userInfo.store_details.sub_domain}.${window.location.host}/admin`)
            }else {
                const domain = userInfo.store_details.sub_domain
                //console.log('setup_login')
                window.location.assign(`${window.location.protocol}//${domain}.joshuaigbokwe.shop/admin/account-setup`)
            } 
        }
        if (isLogout) {
            dispatch(logout())
        }
        /*
        if (userInfoReg) {
            if (userInfoReg.user_details.profile_complete) {
                //window.location.assign(`${window.location.protocol}//${userInfoReg.store_details.sub_domain}.joshuaigbokwe.shop/admin`)
                //navigate(redirect)
                //console.log('enter')
            }else {
                const domain = userInfoReg.store_details.sub_domain
                console.log('setup')
                //window.location.assign(`${window.location.protocol}//${domain}.joshuaigbokwe.shop/admin/account-setup`) 
            } 
        }*/
        document.body.style.backgroundImage=`url(${Background})`
        return() => {
            document.body.style.backgroundImage= 'none'
        }
    }, [userInfo]); // triggered on route change


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    const submitRegHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(email, password, store_name, store_domain))
        }
    }

    return (
        <div className='flex flex-col justify-center items-center h-screen px-6'>
            {message && <Message variant='red'>{message}</Message>}
            {error && <Message variant='red'>{error}</Message>}
            {errorLogin && <Message variant='red'>{errorLogin}</Message>}
            <div id="container" className={`bg-white rounded-xl shadow-md relative overflow-hidden w-768 max-w-full min-h-50 ${signUp ? 'right-panel-active' : ''}`}>
                <div className={`form-container z-10 xl:w-3/6 w-full sign-up-container ${pathname === '/get_started' ? 'xl:w-full max-screen' : 'xl:block'}`}>
                    <form onSubmit={submitRegHandler} className='bg-white h-full flex-col flex justify-center xl:px-12 px-7'>
                        <h2 className="m-0 font-bold text-2xl text-gray-900">Create Account</h2>
                        <p className="leading-5 tracking-wide font-medium text-xs text-gray-800 my-2">Create your store and get started</p>
                        <input type="email" className='bg-gray-910 border-0 focus:ring-2 focus:ring-teal-951 focus:rounded-md text-sm px-4 w-full my-2' placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className='bg-gray-910 border-0 focus:ring-2 focus:ring-teal-951 focus:rounded-md text-sm px-4 w-full my-2' placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" className='bg-gray-910 border-0 focus:ring-2 focus:ring-teal-951 focus:rounded-md text-sm px-4 w-full my-2' placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <input type="text" className='bg-gray-910 border-0 focus:ring-2 focus:ring-teal-951 focus:rounded-md text-sm px-4 w-full my-2' placeholder="Store name" required value={store_name} onChange={(e) => setStoreName(e.target.value)} />
                        <div className='relative flex'>
                            <input type="text" className='flex-1 bg-gray-910 border-0 focus:ring-2 focus:ring-inset focus:ring-teal-951 focus:rounded-md text-sm px-4 w-full my-2 pr-3' placeholder="Your store domain" required value={store_domain} onChange={(e) => setStoreDomain(e.target.value.replace(/[^a-zA-Z]/g, "").toLowerCase())} />
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
