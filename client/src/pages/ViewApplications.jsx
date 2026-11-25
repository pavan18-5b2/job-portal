
import React from 'react'
import { viewApplicationsPageData, assets } from '../assets/assets'
import {
    Users,
    FileText,
    MapPin,
    BriefcaseBusiness,
    MoreHorizontal,
    Download,
    Sparkles,
    UserRound
} from 'lucide-react'

const ViewApplications = () => {
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
                            Applications Overview
                        </h1>

                        <p className='text-indigo-100 text-sm mt-2'>
                            Discover talent and manage your job applicants.
                        </p>
                    </div>

                    <div className='flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 w-fit'>
                        <div className='w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center'>
                            <Users size={21} className='text-white' />
                        </div>
                        <div>
                            <p className='text-white text-2xl font-bold leading-none'>
                                {viewApplicationsPageData.length}
                            </p>
                            <p className='text-indigo-100 text-xs mt-1'>Total Applicants</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Card */}
            <div className='bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-visible'>

                {/* Card Heading */}
                <div className='px-5 sm:px-7 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                    <div>
                        <h2 className='text-lg font-bold text-slate-800'>
                            Candidate Applications
                        </h2>
                        <p className='text-sm text-slate-400 mt-1'>
                            Review candidate profiles, job details and resumes.
                        </p>
                    </div>

                    <div className='flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-2 w-fit'>
                        <span className='w-2 h-2 rounded-full bg-emerald-500' />
                        Application list
                    </div>
                </div>

                {/* Table */}
                <div className='overflow-x-auto rounded-b-2xl'>
                    <table className='w-full min-w-[760px] text-sm text-left'>

                        <thead>
                            <tr className='bg-slate-50/80 text-slate-500 uppercase text-xs tracking-wider'>
                                <th className='py-4 px-6 font-semibold'>No.</th>
                                <th className='py-4 px-6 font-semibold'>Applicant</th>
                                <th className='py-4 px-6 font-semibold'>Applied Position</th>
                                <th className='py-4 px-6 font-semibold'>Location</th>
                                <th className='py-4 px-6 font-semibold'>Resume</th>
                                <th className='py-4 px-6 font-semibold text-center'>Action</th>
                            </tr>
                        </thead>

                        <tbody className='divide-y divide-slate-100'>

                            {viewApplicationsPageData.map((applicant, index) => (
                                <tr
                                    key={index}
                                    className='group hover:bg-violet-50/40 transition duration-200'
                                >
                                    <td className='py-5 px-6'>
                                        <span className='text-slate-400 font-semibold'>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </td>

                                    <td className='py-5 px-6'>
                                        <div className='flex items-center gap-3'>
                                            <div className='relative'>
                                                <img
                                                    src={applicant.imgSrc}
                                                    alt=''
                                                    className='w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-slate-200'
                                                />
                                                <span className='absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full' />
                                            </div>

                                            <div>
                                                <p className='font-semibold text-slate-800 group-hover:text-violet-700 transition'>
                                                    {applicant.name}
                                                </p>
                                                <p className='text-xs text-slate-400 mt-1'>
                                                    Candidate
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='py-5 px-6'>
                                        <div className='flex items-center gap-2.5'>
                                            <div className='w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center'>
                                                <BriefcaseBusiness size={15} className='text-violet-600' />
                                            </div>
                                            <span className='font-medium text-slate-700'>
                                                {applicant.jobTitle}
                                            </span>
                                        </div>
                                    </td>

                                    <td className='py-5 px-6'>
                                        <div className='flex items-center gap-2 text-slate-500'>
                                            <MapPin size={15} className='text-slate-400' />
                                            {applicant.location}
                                        </div>
                                    </td>

                                    <td className='py-5 px-6'>
                                        <a
                                            href=''
                                            target='_blank'
                                            className='inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-violet-50 text-violet-700 font-semibold text-xs border border-violet-100 hover:bg-violet-100 hover:border-violet-200 transition'
                                        >
                                            <FileText size={15} />
                                            View Resume
                                            <Download size={14} />
                                            <img
                                                src={assets.resume_download_icon}
                                                alt=''
                                                className='hidden'
                                            />
                                        </a>
                                    </td>

                                    <td className='py-5 px-6 text-center'>
                                        <div className='relative inline-block text-left group/menu'>
                                            <button className='p-2 rounded-lg text-slate-500 hover:bg-violet-100 hover:text-violet-700 transition'>
                                                <MoreHorizontal size={21} />
                                            </button>

                                            <div className='z-30 hidden absolute right-0 top-full mt-1 w-36 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden group-hover/menu:block'>
                                                <button className='flex items-center gap-2 w-full px-4 py-3 text-left text-emerald-600 font-medium hover:bg-emerald-50 transition'>
                                                    <span className='w-2 h-2 rounded-full bg-emerald-500' />
                                                    Accept
                                                </button>

                                                <button className='flex items-center gap-2 w-full px-4 py-3 text-left text-red-500 font-medium hover:bg-red-50 transition'>
                                                    <span className='w-2 h-2 rounded-full bg-red-500' />
                                                    Reject
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {viewApplicationsPageData.length === 0 && (
                                <tr>
                                    <td colSpan='6' className='py-16 text-center'>
                                        <div className='flex flex-col items-center'>
                                            <div className='w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center mb-3'>
                                                <UserRound size={26} className='text-violet-500' />
                                            </div>
                                            <p className='font-semibold text-slate-700'>No applications yet</p>
                                            <p className='text-sm text-slate-400 mt-1'>
                                                New candidate applications will appear here.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className='px-5 sm:px-7 py-4 border-t border-slate-100 flex items-center justify-between'>
                    <p className='text-xs text-slate-400'>
                        Showing {viewApplicationsPageData.length} applications
                    </p>
                    <p className='text-xs font-medium text-violet-600'>
                        Powered by Hirvexa
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ViewApplications
