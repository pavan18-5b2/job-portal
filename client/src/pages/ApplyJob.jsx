
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppConstant } from '../context/AppContext'
import Loading from '../components/Loading'
import { assets } from '../assets/assets'
import Navbar from '../components/Navbar'
import JobCard from '../components/JobCard'
import kconvert from 'k-convert'
import moment from 'moment'
import Footer from '../components/Footer'

const ApplyJob = () => {

    const { id } = useParams()
    const { jobs } = useContext(AppConstant)

    const [JobData, setJobData] = useState(null)

    useEffect(() => {

        if (jobs && jobs.length > 0) {
            const data = jobs.find(
                job => String(job._id) === String(id)
            )

            setJobData(data || null)
        }

    }, [id, jobs])

    return JobData ? (
        <>
            <Navbar />

            <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 py-10'>
                <div className='container px-4 2xl:px-20 mx-auto'>

                    {/* Job Header */}
                    <div className='relative overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-violet-100 border border-violet-200 rounded-2xl shadow-sm p-6 sm:p-10 lg:p-14 mb-10'>

                        <div className='absolute right-0 top-0 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl'></div>

                        <div className='relative flex flex-col lg:flex-row justify-between items-center gap-8'>

                            <div className='flex flex-col sm:flex-row items-center gap-6'>

                                <div className='bg-white p-4 rounded-2xl shadow-md border border-gray-100'>
                                    <img
                                        className='h-20 w-20 object-contain'
                                        src={JobData.companyId.image}
                                        alt=""
                                    />
                                </div>

                                <div className='text-center sm:text-left'>

                                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight'>
                                        {JobData.title}
                                    </h1>

                                    <div className='flex flex-wrap justify-center sm:justify-start gap-3 mt-5 text-sm text-gray-600'>

                                        <span className='flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm'>
                                            <img className='w-4' src={assets.suitcase_icon} alt="" />
                                            {JobData.companyId.name}
                                        </span>

                                        <span className='flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm'>
                                            <img className='w-4' src={assets.location_icon} alt="" />
                                            {JobData.location}
                                        </span>

                                        <span className='flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm'>
                                            <img className='w-4' src={assets.person_icon} alt="" />
                                            {JobData.level}
                                        </span>

                                        <span className='flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm'>
                                            <img className='w-4' src={assets.money_icon} alt="" />
                                            CTC: {kconvert.convertTo(JobData.salary)}
                                        </span>

                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center lg:items-end gap-3 shrink-0'>

                                <button className='bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold px-10 py-3.5 rounded-xl shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1'>
                                    Apply Now →
                                </button>

                                <p className='text-sm text-gray-500'>
                                    Posted {moment(JobData.date).fromNow()}
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* Job Description and More Jobs */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>

                        {/* Left Section */}
                        <div className='lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-9'>

                            <div className='flex items-center gap-3 mb-6'>
                                <div className='w-1.5 h-8 bg-gradient-to-b from-indigo-600 to-violet-500 rounded-full'></div>
                                <h2 className='text-2xl font-bold text-gray-900'>
                                    Job Description
                                </h2>
                            </div>

                            <div
                                className='rich-text text-gray-600 leading-8'
                                dangerouslySetInnerHTML={{
                                    __html: JobData.description
                                }}
                            />

                            <div className='mt-10 pt-7 border-t border-gray-100'>

                                <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                                    Interested in this opportunity?
                                </h3>

                                <p className='text-sm text-gray-500 mb-5'>
                                    Take the next step in your career journey.
                                </p>

                                <button className='bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold px-10 py-3 rounded-xl shadow-md shadow-indigo-100 transition-all duration-300 hover:-translate-y-1'>
                                    Apply Now →
                                </button>

                            </div>
                        </div>

                        {/* Right Section - More Jobs */}
                        <div className='w-full'>

                            <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6'>

                                <div className='flex items-center gap-3 mb-6'>
                                    <div className='bg-violet-100 p-2.5 rounded-lg'>
                                        <img
                                            src={assets.suitcase_icon}
                                            alt=""
                                            className='w-5'
                                        />
                                    </div>

                                    <h2 className='text-lg font-bold text-gray-900'>
                                        More Jobs
                                    </h2>
                                </div>

                                <p className='text-sm text-gray-500 mb-5'>
                                    Explore more opportunities from {JobData.companyId.name}
                                </p>

                                <div className='flex flex-col gap-5'>

                                    {jobs
                                        .filter(job =>
                                            String(job._id) !== String(JobData._id) &&
                                            String(job.companyId._id) === String(JobData.companyId._id)
                                        )
                                        .slice(0, 4)
                                        .map((job) => (
                                            <div
                                                key={job._id}
                                                className='border border-gray-100 rounded-xl p-2 hover:border-violet-200 hover:shadow-md transition-all duration-300'
                                            >
                                                <JobCard job={job} />
                                            </div>
                                        ))}

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />

        </>
    ) : (
        <Loading />
    )
}

export default ApplyJob
