
import React, { useContext, useState, useEffect } from 'react'
import { AppConstant } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'

const JobListing = () => {

    const {
        isSearched,
        searchFilter,
        setSearchFilter,
        jobs
    } = useContext(AppConstant)

    const [showFilter, setShowFilter] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedCategories,setSelectedCategories] = useState([])
    const [selectedLocations,setSelectedLocations] = useState([])
    const [filteredJobs,setFilteredJobs] = useState(jobs)
    const handleCategoryChange = (category) => {
        setSelectedCategories(
            prev => prev.includes(category) ? prev.filter( c => c!== category): [...prev,category] 
        )
    }

    const handleLocationChange = (location) => {
        setSelectedLocations(
            prev => prev.includes(location) ? prev.filter( c => c!== location): [...prev,location] 
        )
    }
    useEffect(() =>{
        const matchescategory = job => selectedCategories.length === 0 || selectedCategories.includes(job.category)
        const matchesLocation = job => selectedLocations.length === 0 || selectedLocations.includes(job.location)
    
        const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())
     
       
        const matchesSearchLocation = job =>searchFilter.location === "" ||  job.location.toLowerCase().includes(searchFilter.location.toLowerCase())
        const newFilteredJobs = jobs.slice().reverse().filter(
            job => matchescategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)

        )
        setFilteredJobs(newFilteredJobs)
        setCurrentPage(1)
    },[jobs,selectedCategories,selectedLocations,searchFilter.title,searchFilter.location])
    const jobsPerPage = 6
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)

    const currentJobs = filteredJobs.slice(
        (currentPage - 1) * jobsPerPage,
        currentPage * jobsPerPage
    )

    return (
        <section
            id="jobs"
            className="container 2xl:px-20 mx-auto py-16"
        >

            <div className="flex flex-col lg:flex-row gap-10">

                {/* FILTER SIDEBAR */}
                <aside className="w-full lg:w-1/4 px-4">

                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">

                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900">
                                Filters
                            </h3>

                            <button
                                onClick={() => setShowFilter(!showFilter)}
                                className="lg:hidden text-violet-600 font-semibold"
                            >
                                {showFilter ? 'Close' : 'Show'}
                            </button>
                        </div>

                        {/* CURRENT SEARCH */}
                        {isSearched && (
                            <div className="mb-6">

                                <h4 className="font-semibold text-sm mb-3 text-gray-800">
                                    Your Search
                                </h4>

                                <div className="flex flex-wrap gap-2">

                                    {searchFilter.title && (
                                        <span className="flex items-center gap-2 bg-violet-50 text-violet-700 px-3 py-2 rounded-lg text-xs">
                                            {searchFilter.title}

                                            <button
                                                onClick={() => {
                                                    setSearchFilter(prev => ({
                                                        ...prev,
                                                        title: ""
                                                    }))
                                                    setCurrentPage(1)
                                                }}
                                            >
                                                ✕
                                            </button>
                                        </span>
                                    )}

                                    {searchFilter.location && (
                                        <span className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-2 rounded-lg text-xs">
                                            {searchFilter.location}

                                            <button
                                                onClick={() => {
                                                    setSearchFilter(prev => ({
                                                        ...prev,
                                                        location: ""
                                                    }))
                                                    setCurrentPage(1)
                                                }}
                                            >
                                                ✕
                                            </button>
                                        </span>
                                    )}

                                </div>
                            </div>
                        )}

                        {/* CATEGORY FILTER */}
                        <div className={showFilter ? '' : 'max-lg:hidden'}>

                            <h4 className="font-bold text-gray-900 mb-4">
                                Job Categories
                            </h4>

                            <ul className="space-y-4 text-sm text-gray-600">

                                {JobCategories.map((category, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 hover:text-violet-600 transition"
                                    >
                                        <input
                                            type="checkbox"
                                            className="accent-violet-600 w-4 h-4 cursor-pointer"
                                            onChange={() => handleCategoryChange(category)}
                                            checked = {selectedCategories.includes(category)}
                                        />

                                        {category}
                                    </li>
                                ))}

                            </ul>
                        </div>

                        <div className="border-t border-gray-100 my-7"></div>

                        {/* LOCATION FILTER */}
                        <div className={showFilter ? '' : 'max-lg:hidden'}>

                            <h4 className="font-bold text-gray-900 mb-4">
                                Job Location
                            </h4>

                            <ul className="space-y-4 text-sm text-gray-600">

                                {JobLocations.map((location, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 hover:text-violet-600 transition"
                                    >
                                        <input
                                            type="checkbox"
                                            className="accent-violet-600 w-4 h-4 cursor-pointer"
                                            onChange={() => handleLocationChange(location)}
                                            checked = {selectedLocations.includes(location)}
                                        />

                                        {location}
                                    </li>
                                ))}

                            </ul>
                        </div>

                    </div>
                </aside>

                {/* JOB LISTINGS */}
                <div className="w-full lg:w-3/4 px-4">

                    <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-8 gap-3">

                        <div>
                            <span className="text-violet-600 text-sm font-bold tracking-wider uppercase">
                                Explore Opportunities
                            </span>

                            <h2 className="text-3xl font-bold text-gray-900 mt-2">
                                Latest Jobs
                            </h2>

                            <p className="text-gray-500 mt-2 text-sm">
                                Find your next opportunity with Hirvexa.
                            </p>
                        </div>

                        <span className="text-sm text-gray-500">
                            {filteredJobs.length} Jobs Available
                        </span>

                    </div>

                    {/* JOB CARDS */}
                    {filteredJobs.length > 0 ? (

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

                            {currentJobs.map((job, index) => (
                                <JobCard
                                    key={job._id || index}
                                    job={job}
                                />
                            ))}

                        </div>

                    ) : (

                        <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center">

                            <h3 className="text-xl font-bold text-gray-800">
                                No Jobs Found
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Try searching with a different job title or location.
                            </p>

                        </div>

                    )}

                    {/* PAGINATION */}
                    {totalPages > 1 && (

                        <div className="flex items-center justify-center gap-3 mt-12">

                            <button
                              
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                className="w-10 h-10 rounded-xl border border-gray-200 text-gray-600 disabled:opacity-30 hover:bg-violet-50 transition"
                            >
                                ←
                            </button>

                            {Array.from({ length: totalPages }).map((_, index) => (

                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentPage(index + 1)
                                        document.getElementById('jobs')?.scrollIntoView({
                                            behavior: 'smooth'
                                        })
                                    }}
                                    className={`w-10 h-10 rounded-xl font-semibold transition ${
                                        currentPage === index + 1
                                            ? 'bg-violet-600 text-white shadow-md'
                                            : 'border border-gray-200 text-gray-600 hover:bg-violet-50'
                                    }`}
                                >
                                    {index + 1}
                                </button>

                            ))}

                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                className="w-10 h-10 rounded-xl border border-gray-200 text-gray-600 disabled:opacity-30 hover:bg-violet-50 transition"
                            >
                                →
                            </button>

                        </div>
                    )}

                </div>

            </div>
        </section>
    )
}

export default JobListing
