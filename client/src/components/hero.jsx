
import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppConstant } from '../context/AppContext'

const Hero = () => {

    const { setSearchFilter, setIsSearched } = useContext(AppConstant)

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        })
        setIsSearched(true)
    }

    return (
        <div className="container 2xl:px-20 mx-auto mt-8 mb-16">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#11152F] via-[#25205A] to-[#5435A8] text-white mx-2 rounded-3xl px-6 py-16 md:py-24 text-center">

                {/* Decorative background */}
                <div className="absolute w-72 h-72 bg-violet-500/20 rounded-full blur-3xl -top-32 -left-20"></div>
                <div className="absolute w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl -bottom-32 -right-20"></div>

                <div className="relative z-10">

                    <span className="inline-block bg-white/10 border border-white/20 px-5 py-2 rounded-full text-xs sm:text-sm text-violet-100 mb-6">
                        ✦ YOUR CAREER JOURNEY STARTS HERE
                    </span>

                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
                        Discover Your Next
                        <span className="block text-violet-300 mt-2">
                            Big Opportunity.
                        </span>
                    </h1>

                    <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-6 mb-10 leading-relaxed">
                        Explore thousands of exciting job opportunities.
                        Connect with top companies and build the career
                        you've always dreamed of with Hirvexa.
                    </p>

                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row items-center gap-2 bg-white p-2 rounded-2xl max-w-3xl mx-auto shadow-2xl">

                        <div className="flex items-center gap-3 px-4 w-full flex-1">
                            <img
                                src={assets.search_icon}
                                className="w-5 h-5"
                                alt="Search"
                            />

                            <input
                                type="text"
                                placeholder="Job title, skills or company"
                                className="w-full py-3 outline-none text-gray-700 text-sm"
                                ref={titleRef}
                            />
                        </div>

                        <div className="hidden md:block h-10 w-px bg-gray-200"></div>

                        <div className="flex items-center gap-3 px-4 w-full flex-1">
                            <img
                                src={assets.location_icon}
                                className="w-5 h-5"
                                alt="Location"
                            />

                            <input
                                type="text"
                                placeholder="City or location"
                                className="w-full py-3 outline-none text-gray-700 text-sm"
                                ref={locationRef}
                            />
                        </div>

                        <button
                            onClick={onSearch}
                            className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 text-white px-9 py-3 rounded-xl font-semibold transition duration-300"
                        >
                            Search Jobs →
                        </button>

                    </div>

                    {/* Statistics */}
                    <div className="flex flex-wrap justify-center gap-10 mt-12">

                        <div>
                            <h3 className="text-2xl font-bold">10K+</h3>
                            <p className="text-xs text-gray-300 mt-1">Active Jobs</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">500+</h3>
                            <p className="text-xs text-gray-300 mt-1">Companies</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">5K+</h3>
                            <p className="text-xs text-gray-300 mt-1">Job Seekers</p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Trusted Companies */}
            <section
                id="companies"
                className="mx-2 mt-8 bg-white border border-gray-100 shadow-sm rounded-2xl p-7 sm:p-10"
            >

                <p className="text-center text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
                    Opportunities from leading companies
                </p>

                <div className="flex flex-wrap justify-center items-center gap-9 md:gap-14">

                    <img className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 transition" src={assets.microsoft_logo} alt="Microsoft" />

                    <img className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 transition" src={assets.walmart_logo} alt="Walmart" />

                    <img className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 transition" src={assets.accenture_logo} alt="Accenture" />

                    <img className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 transition" src={assets.samsung_logo} alt="Samsung" />

                    <img className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 transition" src={assets.amazon_logo} alt="Amazon" />

                    <img className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 transition" src={assets.adobe_logo} alt="Adobe" />

                </div>
            </section>

        </div>
    )
}

export default Hero
