
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const JobCard = ({ job }) => {
const navigate = useNavigate()
    return (
        <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-violet-200 hover:-translate-y-1 transition-all duration-300">

            {/* Company Logo and Bookmark */}
            <div className="flex justify-between items-center">

                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center">
                    <img
                        className="h-8 w-8 object-contain"
                        src={assets.company_icon}
                        alt="Company"
                    />
                </div>

                <button
                    type="button"
                    aria-label="Save job"
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-violet-600 hover:bg-violet-50 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M6 4h12v17l-6-4-6 4z" />
                    </svg>
                </button>

            </div>

            {/* Job Details */}
            <h3 className="text-xl font-bold text-gray-900 mt-5 group-hover:text-violet-700 transition">
                {job.title}
            </h3>

            <div className="flex flex-wrap items-center gap-2 mt-3">

                <span className="bg-violet-50 text-violet-700 text-xs font-medium px-3 py-1.5 rounded-full">
                    {job.location}
                </span>

                <span className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full">
                    {job.level}
                </span>

            </div>

            {/* Description */}
            <div
                className="text-gray-500 text-sm leading-relaxed mt-5 min-h-[90px]"
                dangerouslySetInnerHTML={{
                    __html: (job.description || '').slice(0, 150) + '...'
                }}
            />

            {/* Buttons */}
            <div className="flex gap-3 mt-6">

                <button
                    onClick={() =>{navigate(`/apply-job/${job._id}`); scrollTo(0,0)}}
                    type="button"
                    className="flex-1 bg-violet-600 text-white text-sm font-semibold px-4 py-3 rounded-xl hover:bg-violet-700 shadow-sm hover:shadow-md transition"
                >
                    Apply Now →
                </button>

                <button
                    onClick={() =>{navigate(`/apply-job/${job._id}`); scrollTo(0,0)}}

                    type="button"
                    className="flex-1 border border-gray-200 text-gray-700 text-sm font-semibold px-3 py-3 rounded-xl hover:border-violet-500 hover:text-violet-600 transition"
                >
                    Learn More
                </button>

            </div>

            {/* Branding */}
            <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-400">
                    Powered by Hirvexa
                </span>

                <span className="text-xs font-semibold text-violet-600">
                    Explore Career ✦
                </span>
            </div>

        </div>
    )
}

export default JobCard
