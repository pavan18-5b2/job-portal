
import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import {
    BriefcaseBusiness,
    FileText,
    LayoutGrid,
    MapPin,
    GraduationCap,
    IndianRupee,
    Plus,
    Sparkles
} from 'lucide-react'
import { JobCategories, JobLocations } from '../assets/assets'

const AddJob = () => {

    const [title,setTitle] = useState('')
    const [location,setLocation] = useState('Bangalore')
    const [category,setCategory] = useState('Programming')
    const [level,setLevel] = useState('Beginner level')
    const [salary,setSalary] = useState(0)

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    useEffect(() => {
        // initiate quill only once
        if (!quillRef.current && editorRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
            })
        }
    }, [])

    const fieldLabel = 'flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2'
    const selectStyle = 'w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100'
    const iconStyle = 'h-4 w-4 text-violet-600'

    return (
        <form className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-7'>

            {/* Page heading */}
            <div className='relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-700 via-indigo-700 to-indigo-800 p-7 sm:p-9 text-white shadow-lg shadow-indigo-100'>
                <div className='absolute -right-10 -top-16 h-52 w-52 rounded-full bg-white/10' />
                <div className='absolute right-28 -bottom-24 h-48 w-48 rounded-full bg-white/10' />

                <div className='relative flex items-center gap-4'>
                    <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur'>
                        <BriefcaseBusiness size={28} />
                    </div>
                    <div>
                        <div className='flex items-center gap-2 text-violet-100 text-xs font-semibold uppercase tracking-widest'>
                            <Sparkles size={14} /> Recruiter workspace
                        </div>
                        <h1 className='mt-1 text-2xl sm:text-3xl font-bold'>Post a New Job</h1>
                        <p className='mt-2 text-sm text-indigo-100'>Find the right talent for your team with Hirvexa.</p>
                    </div>
                </div>
            </div>

            {/* Job information */}
            <div className='rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm'>
                <div className='mb-7 flex items-center gap-3 border-b border-slate-100 pb-5'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50'>
                        <BriefcaseBusiness className='text-violet-600' size={20} />
                    </div>
                    <div>
                        <h2 className='font-bold text-slate-800'>Job Information</h2>
                        <p className='text-xs text-slate-500 mt-1'>Add the basic details of your vacancy</p>
                    </div>
                </div>

                <div className='w-full'>
                    <label className={fieldLabel}>
                        <FileText className={iconStyle} /> Job Title
                    </label>
                    <input
                        type='text'
                        placeholder='e.g. Frontend Developer'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        required
                        className='w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100'
                    />
                </div>

                <div className='mt-7 w-full'>
                    <label className={fieldLabel}>
                        <FileText className={iconStyle} /> Job Description
                    </label>
                    <div
                        ref={editorRef}
                        className='rounded-xl overflow-hidden border border-slate-200'
                    />
                </div>
            </div>

            {/* Job details */}
            <div className='rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm'>
                <div className='mb-7 flex items-center gap-3 border-b border-slate-100 pb-5'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50'>
                        <LayoutGrid className='text-indigo-600' size={20} />
                    </div>
                    <div>
                        <h2 className='font-bold text-slate-800'>Job Details</h2>
                        <p className='text-xs text-slate-500 mt-1'>Choose the category, location and experience level</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div>
                        <label className={fieldLabel}>
                            <LayoutGrid className={iconStyle} /> Job Category
                        </label>
                        <select
                            className={selectStyle}
                            onChange={e => setCategory(e.target.value)}
                        >
                            {JobCategories.map((category,index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className={fieldLabel}>
                            <MapPin className={iconStyle} /> Job Location
                        </label>
                        <select
                            className={selectStyle}
                            onChange={e => setLocation(e.target.value)}
                        >
                            {JobLocations.map((location,index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className={fieldLabel}>
                            <GraduationCap className={iconStyle} /> Job Level
                        </label>
                        <select
                            className={selectStyle}
                            onChange={e => setLevel(e.target.value)}
                        >
                            <option value='Beginner Level'>Beginner Level</option>
                            <option value='Intermediate Level'>Intermediate Level</option>
                            <option value='Senior Level'>Senior Level</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Salary */}
            <div className='rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm'>
                <div className='mb-6 flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50'>
                        <IndianRupee className='text-emerald-600' size={20} />
                    </div>
                    <div>
                        <h2 className='font-bold text-slate-800'>Salary Information</h2>
                        <p className='text-xs text-slate-500 mt-1'>Set the salary offered for this position</p>
                    </div>
                </div>

                <div className='max-w-sm'>
                    <label className={fieldLabel}>
                        <IndianRupee className={iconStyle} /> Job Salary
                    </label>
                    <input
                        min={0}
                        className='w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100'
                        onChange={e => setSalary(e.target.value)}
                        type='number'
                        placeholder='2500'
                    />
                </div>
            </div>

            {/* Submit button */}
            <div className='flex justify-end pb-5'>
                <button className='group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-700 to-indigo-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:from-violet-800 hover:to-indigo-800 hover:shadow-xl active:translate-y-0'>
                    <Plus size={19} className='transition group-hover:rotate-90' />
                    ADD JOB
                </button>
            </div>

        </form>
    )
}

export default AddJob
