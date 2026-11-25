
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets , jobsApplied } from '../assets/assets'
import moment from 'moment'
import Footer from '../components/Footer'

const Applications = () => {

    const [isEdit, setIsEdit] = useState(false)
    const [resume, setResume] = useState(null)

    return (
        <div>
            <>
                <Navbar />

                <div className='min-h-[65vh] bg-gradient-to-br from-slate-50 via-white to-violet-50 py-10'>
                    <div className='container px-4 2xl:px-20 mx-auto'>

                        {/* Resume Section */}
                        <div className='bg-white border border-gray-100 shadow-sm rounded-2xl p-6 sm:p-8 mb-10'>

                            <div className='flex items-center gap-3 mb-6'>
                                <div className='w-1.5 h-8 bg-gradient-to-b from-indigo-600 to-violet-500 rounded-full'></div>
                                <h2 className='text-2xl font-bold text-gray-900'>Your Resume</h2>
                            </div>

                            <div className='flex flex-wrap items-center gap-3 mb-2'>
                                {
                                    isEdit
                                        ? <>
                                            <label className='flex items-center cursor-pointer' htmlFor="resumeUpload">
                                                <p className='bg-violet-50 border border-violet-200 text-violet-700 hover:bg-violet-100 px-5 py-3 rounded-xl font-medium transition-all mr-3'>
                                                    Select Resume
                                                </p>

                                                <input
                                                    id="resumeUpload"
                                                    onChange={e => setResume(e.target.files[0])}
                                                    accept='application/pdf'
                                                    type="file"
                                                    hidden
                                                />

                                                <img className='w-6' src={assets.profile_upload_icon} alt="" />
                                            </label>

                                            <button
                                                onClick={e=>setIsEdit(false)}
                                                className='bg-green-50 text-green-700 border border-green-300 hover:bg-green-100 px-6 py-3 rounded-xl font-semibold transition-all'
                                            >
                                                Save
                                            </button>
                                        </>
                                        : <div className='flex flex-wrap items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4 w-full sm:w-fit'>

                                            <a className='bg-violet-50 border border-violet-200 text-violet-700 hover:bg-violet-100 px-5 py-3 rounded-xl font-medium transition-all' href="">
                                                Resume
                                            </a>

                                            <button
                                                onClick={() => setIsEdit(true)}
                                                className='text-gray-600 hover:text-violet-700 border border-gray-300 hover:border-violet-300 bg-white rounded-xl px-6 py-3 font-medium transition-all'
                                            >
                                                Edit
                                            </button>
                                        </div>
                                }
                            </div>
                        </div>

                        {/* Jobs Applied Section */}
                        <div className='bg-white border border-gray-100 shadow-sm rounded-2xl p-6 sm:p-8'>

                            <div className='flex items-center justify-between flex-wrap gap-3 mb-7'>
                                <div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-1.5 h-8 bg-gradient-to-b from-indigo-600 to-violet-500 rounded-full'></div>
                                        <h2 className='text-2xl font-bold text-gray-900'>Jobs Applied</h2>
                                    </div>
                                    <p className='text-sm text-gray-500 mt-2'>
                                        Track the status of your job applications.
                                    </p>
                                </div>

                                <span className='bg-violet-50 text-violet-700 border border-violet-100 px-4 py-2 rounded-full text-sm font-semibold'>
                                    {jobsApplied.length} Applications
                                </span>
                            </div>

                            <div className='overflow-x-auto rounded-xl border border-gray-100'>
                                <table className='min-w-full bg-white text-sm text-left'>

                                    <thead className='bg-gradient-to-r from-indigo-50 to-violet-50 text-gray-700'>
                                        <tr>
                                            <th className='py-4 px-5 font-semibold whitespace-nowrap'>Company</th>
                                            <th className='py-4 px-5 font-semibold whitespace-nowrap'>Job Title</th>
                                            <th className='py-4 px-5 font-semibold whitespace-nowrap max-sm:hidden'>Location</th>
                                            <th className='py-4 px-5 font-semibold whitespace-nowrap max-sm:hidden'>Date</th>
                                            <th className='py-4 px-5 font-semibold whitespace-nowrap'>Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {jobsApplied.map((job,index)=> true ? (
                                            <tr className='border-b border-gray-100 hover:bg-violet-50/40 transition-colors'>

                                                <td className='py-4 px-5'>
                                                    <div className='flex items-center gap-3 whitespace-nowrap'>
                                                        <div className='bg-white border border-gray-100 rounded-lg p-1'>
                                                            <img className='w-9 h-9 object-contain' src={job.logo} alt="" />
                                                        </div>
                                                        <span className='font-semibold text-gray-800'>
                                                            {job.company}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className='py-4 px-5 font-medium text-gray-700 whitespace-nowrap'>
                                                    {job.title}
                                                </td>

                                                <td className='py-4 px-5 text-gray-500 whitespace-nowrap max-sm:hidden'>
                                                    {job.location}
                                                </td>

                                                <td className='py-4 px-5 text-gray-500 whitespace-nowrap max-sm:hidden'>
                                                    {moment(job.date).format('ll')}
                                                </td>

                                                <td className='py-4 px-5 whitespace-nowrap'>
                                                    <span className={`${job.status === 'Accepted' ? 'bg-green-100 text-green-700' : job.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'} px-4 py-1.5 rounded-full text-xs font-semibold`}>
                                                        {job.status}
                                                    </span>
                                                </td>

                                            </tr>
                                        ) :(null))}
                                    </tbody>

                                </table>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer/>
            </>
        </div>
    )
}

export default Applications
