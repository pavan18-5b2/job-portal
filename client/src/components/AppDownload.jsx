
import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <section className="container px-4 2xl:px-20 mx-auto my-24">

      <div className="relative overflow-hidden bg-gradient-to-br from-[#11152F] via-[#29205C] to-[#6443B8] rounded-3xl px-8 py-14 sm:px-14 sm:py-20">

        {/* Background Decorations */}
        <div className="absolute w-72 h-72 bg-violet-400/20 rounded-full blur-3xl -top-24 -right-10"></div>

        <div className="absolute w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl -bottom-24 -left-10"></div>

        <div className="relative z-10 max-w-xl">

          {/* Label */}
          <span className="inline-block bg-white/10 border border-white/20 text-violet-200 text-xs font-semibold tracking-wider px-4 py-2 rounded-full mb-6">
            ✦ HIRVEXA MOBILE EXPERIENCE
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Your Dream Career,
            <span className="block text-violet-300 mt-2">
              Just One Tap Away.
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            Find exciting job opportunities, explore top companies
            and manage your career journey anytime, anywhere.
            Download the Hirvexa mobile app today!
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-9 text-sm text-violet-100">

            <span>✓ Easy Job Search</span>
            <span>✓ Quick Applications</span>
            <span>✓ Career Updates</span>

          </div>

          {/* Download Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#"
              className="inline-block hover:-translate-y-1 transition duration-300"
            >
              <img
                className="h-12 sm:h-14"
                src={assets.play_store}
                alt="Get it on Google Play"
              />
            </a>

            <a
              href="#"
              className="inline-block hover:-translate-y-1 transition duration-300"
            >
              <img
                className="h-12 sm:h-14"
                src={assets.app_store}
                alt="Download on the App Store"
              />
            </a>

          </div>

          <p className="text-xs text-gray-400 mt-6">
            Powered by Hirvexa · Your Career Partner
          </p>

        </div>

        {/* Mobile App Image */}
        <img
          className="absolute w-72 lg:w-80 xl:w-96 right-8 xl:right-20 bottom-0 max-lg:hidden object-contain"
          src={assets.app_main_img}
          alt="Hirvexa mobile application preview"
        />

      </div>

    </section>
  )
}

export default AppDownload
