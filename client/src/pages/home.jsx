
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import JobListing from '../components/JobListing'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <JobListing />
      <AppDownload />
      <Footer />
    </main>
  )
}

export default Home
