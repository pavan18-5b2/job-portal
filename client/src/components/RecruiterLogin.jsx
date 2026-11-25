
import React, { useEffect, useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { AppConstant } from '../context/AppContext'

const RecruiterLogin = () => {
    const [state, setState] = useState('Login')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(false)
    const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false)
    const {setShowRecruiterLogin} = useContext(AppConstant)

    const onSubmitHandler = async (e) =>{
        e.preventDefault()

        if(state == "Sign Up" && !isTextDataSubmitted ){
            setIsTextDataSubmitted(true)
        }
    }

    useEffect(() =>{
        document.body.style.overflow = 'hidden'

        return () =>{
            document.body.style.overflow ='unset'
        }
    },[])

    return (
        <div className='fixed inset-0 z-50 backdrop-blur-md bg-slate-950/60 flex justify-center items-center px-4 py-6'>

            <form
                onSubmit ={onSubmitHandler}
                className='relative bg-white w-full max-w-md p-7 sm:p-10 rounded-3xl text-slate-500 shadow-2xl border border-white/50 overflow-hidden'
            >

                {/* Top Gradient Design */}
                <div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-500'></div>

                {/* Logo / Heading */}
                <div className='text-center mt-2'>

                    <div className='inline-flex items-center justify-center w-14 h-14 bg-violet-50 rounded-2xl mb-4'>
                        <img
                            src={assets.suitcase_icon}
                            alt=""
                            className='w-7'
                        />
                    </div>

                    <h1 className='text-2xl sm:text-3xl text-gray-900 font-bold tracking-tight'>
                        Recruiter {state}
                    </h1>

                    <p className='text-sm text-gray-500 mt-2'>
                        {state === 'Login'
                            ? 'Welcome back! Please sign in to continue.'
                            : 'Create your recruiter account to get started.'}
                    </p>

                </div>

                {state === 'Sign Up' && isTextDataSubmitted
                    ? <>
                        <div className='flex items-center gap-5 my-10 bg-violet-50 border border-violet-100 p-5 rounded-2xl'>

                            <label htmlFor ="image" className='cursor-pointer shrink-0'>
                                <img
                                    className='w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-md'
                                    src={image ? URL.createObjectURL(image): assets.upload_area}
                                    alt=""
                                />

                                <input
                                    onChange ={e=> setImage(e.target.files[0])}
                                    type ="file"
                                    id="image"
                                    hidden
                                />

                            </label>

                            <div>
                                <p className='font-semibold text-gray-800'>
                                    Upload Company Logo
                                </p>
                                <p className='text-xs text-gray-500 mt-1'>
                                    Choose your company image.
                                </p>
                            </div>

                        </div>
                    </>
                    : (
                        <>
                            {state !== 'Login' && (
                                <div className='border border-gray-200 bg-gray-50 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100 px-4 py-3.5 flex items-center gap-3 rounded-xl mt-7 transition-all'>
                                    <img src={assets.person_icon} alt="" className='w-5 opacity-60' />
                                    <input
                                        className='outline-none text-sm w-full bg-transparent text-gray-800'
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                        type="text"
                                        placeholder="Company Name"
                                        required
                                    />
                                </div>
                            )}

                            <div className='border border-gray-200 bg-gray-50 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100 px-4 py-3.5 flex items-center gap-3 rounded-xl mt-5 transition-all'>
                                <img src={assets.email_icon} alt="" className='w-5 opacity-60' />
                                <input
                                    className='outline-none text-sm w-full bg-transparent text-gray-800'
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    placeholder="Email Id"
                                    required
                                />
                            </div>

                            <div className='border border-gray-200 bg-gray-50 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100 px-4 py-3.5 flex items-center gap-3 rounded-xl mt-5 transition-all'>
                                <img src={assets.lock_icon} alt="" className='w-5 opacity-60' />
                                <input
                                    className='outline-none text-sm w-full bg-transparent text-gray-800'
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </>
                    )
                }

                {state === "Login" && (
                    <p className='text-sm text-violet-600 mt-5 cursor-pointer hover:text-violet-800 text-right font-medium'>
                        Forgot Password?
                    </p>
                )}

                <button
                    type="submit"
                    className='bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 w-full text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-violet-200 hover:shadow-violet-300 mt-7'
                >
                    {state === 'Login' ? 'Login' : isTextDataSubmitted ? 'Create Account' : 'Next'}
                </button>

                {state === 'Login'
                    ? (
                        <p className='mt-7 text-center text-sm text-gray-500'>
                            Don't have an account?
                            <span
                                className='text-violet-600 cursor-pointer ml-1 font-semibold hover:text-indigo-700'
                                onClick={() => setState('Sign Up')}
                            >
                                Sign Up
                            </span>
                        </p>
                    )
                    : (
                        <p className='mt-7 text-center text-sm text-gray-500'>
                            Already have an account?
                            <span
                                className='text-violet-600 cursor-pointer ml-1 font-semibold hover:text-indigo-700'
                                onClick={() => setState('Login')}
                            >
                                Login
                            </span>
                        </p>
                    )
                }

                <img
                    onClick={e => setShowRecruiterLogin(false)}
                    className='absolute top-6 right-6 cursor-pointer w-5 opacity-60 hover:opacity-100 transition'
                    src={assets.cross_icon}
                    alt=""
                />

            </form>
        </div>
    )
}

export default RecruiterLogin
