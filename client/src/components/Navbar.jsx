import React, { useContext } from 'react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { AppConstant } from '../context/AppContext'

const Navbar = () => {
  const { openSignIn } = useClerk()
  const { user } = useUser()

  const { setShowRecruiterLogin } = useContext(AppConstant)


  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container px-4 2xl:px-20 mx-auto">

        <div className="flex justify-between items-center py-4">

          {/* Hirvexa Branding */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-md">
              <span className="text-white text-2xl font-bold">H</span>
            </div>

            <span className="text-2xl font-extrabold tracking-tight text-gray-900">
              Hirvexa<span className="text-violet-600">.</span>
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-violet-600 transition">
              Home
            </Link>

            <a href="/#jobs" className="hover:text-violet-600 transition">
              Find Jobs
            </a>

            <a href="/#companies" className="hover:text-violet-600 transition">
              Companies
            </a>
          </div>

          {/* Authentication */}
          {user ? (
            <div className="flex items-center gap-4">

              <Link
                to="/applications"
                className="hidden sm:block text-sm font-semibold text-gray-700 hover:text-violet-600 transition"
              >
                Applied Jobs
              </Link>

              <div className="hidden sm:block h-6 w-px bg-gray-200"></div>

              <span className="hidden md:block text-sm text-gray-600">
                Hi, {user.firstName}
              </span>

              <UserButton />
            </div>
          ) : (
            <div className="flex items-center gap-4">

              <button
              onClick={e => setShowRecruiterLogin(true)}
                className="hidden sm:block text-sm font-semibold text-gray-600 hover:text-violet-600 transition"
              >
                Recruiter Login
              </button>

              <button
                onClick={() => openSignIn()}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-7 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
              >
                Login / Sign Up
              </button>

            </div>
          )}

        </div>
      </div>
    </nav>
  )
}

export default Navbar
