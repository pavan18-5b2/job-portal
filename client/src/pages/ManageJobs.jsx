
import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import {
    BriefcaseBusiness,
    Plus,
    MapPin,
    CalendarDays,
    Users,
    Eye,
    Sparkles
} from 'lucide-react'

const ManageJobs = () => {

    const navigate = useNavigate()

    return (
        <div className='w-full min-h-screen bg-[#f8f9fd] p-4 sm:p-6 lg:p-8'>

            {/* Header */}
            <div className='relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-700 p-6 sm:p-8 mb-7 shadow-lg shadow-indigo-100'>

                <div className='absolute -right-10 -top-16 w-56 h-56 rounded-full bg-white/10' />
                <div className='absolute right-40 -bottom-24 w-48 h-48 rounded-full bg-white/10' />

                <div className='relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5'>

                    <div>
                        <div className='flex items-center gap-2 text-violet-100 text-xs font-semibold uppercase tracking-[2px] mb-3'>
                            <Sparkles size={14} />
                            Recruiter Workspace
                        </div>

                        <h1 className='text-2xl sm:text-3xl font-bold text-white'>
                            Manage Jobs
                        </h1>

                        <p className='text-indigo-100 text-sm mt-2'>
                            Track your job postings and manage their visibility.
                        </p>
                    </div>

                    <div className='flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 w-fit'>
                        <div className='w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center'>
                            <BriefcaseBusiness size={21} className='text-white' />
                        </div>

                        <div>
                            <p className='text-white text-2xl font-bold leading-none'>
                                {manageJobsData.length}
                            </p>
                            <p className='text-indigo-100 text-xs mt-1'>
                                Total Jobs
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Job Statistics */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7'>

                <div className='bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center'>
                        <BriefcaseBusiness size={23} className='text-violet-600' />
                    </div>
                    <div>
                        <p className='text-sm text-slate-500'>Posted Positions</p>
                        <h2 className='text-2xl font-bold text-slate-800'>
                            {manageJobsData.length}
                        </h2>
                    </div>
                </div>

                <div className='bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center'>
                        <Users size={23} className='text-emerald-600' />
                    </div>
                    <div>
                        <p className='text-sm text-slate-500'>Total Applicants</p>
                        <h2 className='text-2xl font-bold text-slate-800'>
                            {manageJobsData.reduce((total, job) => total + Number(job.applicants || 0), 0)}
                        </h2>
                    </div>
                </div>

            </div>

            {/* Jobs Table */}
            <div className='bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden'>

                <div className='px-5 sm:px-7 py-5 border-b border-slate-100 flex items-center justify-between'>
                    <div>
                        <h2 className='text-lg font-bold text-slate-800'>
                            Your Job Listings
                        </h2>
                        <p className='text-sm text-slate-400 mt-1'>
                            View and manage all your posted jobs.
                        </p>
                    </div>

                    <span className='text-xs font-medium text-violet-700 bg-violet-50 border border-violet-100 rounded-full px-3 py-2'>
                        {manageJobsData.length} Listings
                    </span>
                </div>

                <div className='overflow-x-auto'>
                    <table className='w-full min-w-[700px] text-sm text-left'>

                        <thead>
                            <tr className='bg-slate-50/80 text-slate-500 uppercase text-xs tracking-wider'>
                                <th className='py-4 px-6 font-semibold max-sm:hidden'>#</th>
                                <th className='py-4 px-6 font-semibold'>Job Title</th>
                                <th className='py-4 px-6 font-semibold max-sm:hidden'>Date Posted</th>
                                <th className='py-4 px-6 font-semibold max-sm:hidden'>Location</th>
                                <th className='py-4 px-6 font-semibold text-center'>Applicants</th>
                                <th className='py-4 px-6 font-semibold text-center'>Visibility</th>
                            </tr>
                        </thead>

                        <tbody className='divide-y divide-slate-100'>

                            {manageJobsData.map((job, index) => (
                                <tr
                                    key={index}
                                    className='text-slate-700 hover:bg-violet-50/40 transition duration-200'
                                >

                                    <td className='py-5 px-6 text-slate-400 font-semibold max-sm:hidden'>
                                        {String(index + 1).padStart(2, '0')}
                                    </td>

                                    <td className='py-5 px-6'>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center'>
                                                <BriefcaseBusiness size={19} className='text-violet-600' />
                                            </div>

                                            <span className='font-semibold text-slate-800'>
                                                {job.title}
                                            </span>
                                        </div>
                                    </td>

                                    <td className='py-5 px-6 max-sm:hidden'>
                                        <div className='flex items-center gap-2 text-slate-500'>
                                            <CalendarDays size={15} className='text-slate-400' />
                                            {moment(job.date).format('ll')}
                                        </div>
                                    </td>

                                    <td className='py-5 px-6 max-sm:hidden'>
                                        <div className='flex items-center gap-2 text-slate-500'>
                                            <MapPin size={15} className='text-slate-400' />
                                            {job.location}
                                        </div>
                                    </td>

                                    <td className='py-5 px-6 text-center'>
                                        <span className='inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 font-semibold px-3 py-1.5 rounded-lg'>
                                            <Users size={14} />
                                            {job.applicants}
                                        </span>
                                    </td>

                                    <td className='py-5 px-6'>
                                        <div className='flex items-center justify-center gap-3'>
                                            <input
                                                className='h-4 w-4 accent-violet-600 cursor-pointer'
                                                type='checkbox'
                                            />
                                            <span className='text-xs text-slate-500'>
                                                <Eye size={15} />
                                            </span>
                                        </div>
                                    </td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {manageJobsData.length === 0 && (
                    <div className='py-14 text-center'>
                        <BriefcaseBusiness size={35} className='mx-auto text-slate-300 mb-3' />
                        <h3 className='font-semibold text-slate-700'>No jobs posted yet</h3>
                        <p className='text-sm text-slate-400 mt-1'>
                            Start by adding your first job listing.
                        </p>
                    </div>
                )}

                {/* Footer */}
                <div className='px-5 sm:px-7 py-4 border-t border-slate-100 flex items-center justify-between'>
                    <p className='text-xs text-slate-400'>
                        Showing {manageJobsData.length} job listings
                    </p>

                    <p className='text-xs font-medium text-violet-600'>
                        Powered by Hirvexa
                    </p>
                </div>

            </div>

            {/* Add Job Button */}
            <div className='mt-7 flex justify-end'>
                <button
                    onClick={() => navigate('/dashboard/add-job')}
                    className='group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-700 to-indigo-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:from-violet-800 hover:to-indigo-800 hover:shadow-xl'
                >
                    <Plus size={19} className='transition group-hover:rotate-90' />
                    Add New Job
                </button>
            </div>

        </div>
    )
}

export default ManageJobs
