
import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-[#11152F] text-white mt-24">

      <div className="container px-4 2xl:px-20 mx-auto pt-14 pb-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">H</span>
              </div>

              <span className="text-2xl font-extrabold">
                Hirvexa<span className="text-violet-400">.</span>
              </span>

            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Discover new opportunities, connect with top companies
              and take the next step towards your dream career.
            </p>

            <p className="text-violet-300 text-sm font-medium mt-5">
              Your Career. Your Future.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <Link to="/" className="hover:text-violet-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <a href="/#jobs" className="hover:text-violet-400 transition">
                  Find Jobs
                </a>
              </li>

              <li>
                <a href="/#companies" className="hover:text-violet-400 transition">
                  Top Companies
                </a>
              </li>

              <li>
                <Link to="/applications" className="hover:text-violet-400 transition">
                  My Applications
                </Link>
              </li>

            </ul>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              For Job Seekers
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <a href="/#jobs" className="hover:text-violet-400 transition">
                  Browse Jobs
                </a>
              </li>

              <li>
                <a href="/#jobs" className="hover:text-violet-400 transition">
                  Career Opportunities
                </a>
              </li>

              <li>
                <Link to="/applications" className="hover:text-violet-400 transition">
                  Track Applications
                </Link>
              </li>

            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Connect With Us
            </h3>

            <p className="text-gray-400 text-sm mb-5">
              Follow Hirvexa for the latest career opportunities and updates.
            </p>

            <div className="flex items-center gap-4">

              <a href="#" aria-label="Facebook" className="bg-white/10 p-3 rounded-xl hover:bg-violet-600 transition">
                <img className="w-5 h-5" src={assets.facebook_icon} alt="" />
              </a>

              <a href="#" aria-label="Twitter" className="bg-white/10 p-3 rounded-xl hover:bg-violet-600 transition">
                <img className="w-5 h-5" src={assets.twitter_icon} alt="" />
              </a>

              <a href="#" aria-label="Instagram" className="bg-white/10 p-3 rounded-xl hover:bg-violet-600 transition">
                <img className="w-5 h-5" src={assets.instagram_icon} alt="" />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-xs text-center">
            © {new Date().getFullYear()} Hirvexa. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-xs">
            Built for your next big opportunity ✦
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer
