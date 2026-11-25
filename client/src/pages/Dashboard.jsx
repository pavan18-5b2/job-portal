
import React from 'react'
import { Outlet, useNavigate, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import {
    Plus,
    LayoutDashboard,
    Users,
    ChevronDown,
    Sparkles
} from 'lucide-react'

const Dashboard = () => {

    const navigate = useNavigate()

    const navLinkStyle = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
        ${isActive
            ? 'bg-violet-100 text-violet-700 font-semibold shadow-sm'
            : 'text-slate-600 hover:bg-slate-100 hover:text-violet-700'
        }`

    return (
        <div className='min-h-screen bg-slate-50'>

            {/* Header */}
            <header className='sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm'>
                <div className='px-5 sm:px-8 py-4 flex justify-between items-center'>

                    {/* Hirvexa Logo - Same as Main Navbar */}
                    <div
                        onClick={() => navigate('/')}
                        className='flex items-center gap-3 cursor-pointer'
                    >
                        <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-md'>
                            <span className='text-white text-2xl font-bold'>H</span>
                        </div>

                        <span className='text-2xl font-extrabold tracking-tight text-gray-900'>
                            Hirvexa<span className='text-violet-600'>.</span>
                        </span>
                    </div>

                    {/* Welcome Text */}
                    <div className='hidden sm:flex items-center gap-3 text-sm text-slate-600'>
                        <Sparkles size={17} className='text-violet-600' />
                        <p>
                            Welcome, <span className='font-semibold text-slate-900'>GreatStack</span>
                        </p>
                    </div>

                    {/* Profile */}
                    <div className='relative group'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img
                                className='w-9 h-9 rounded-full border border-slate-200 object-cover'
                                src={assets.company_icon}
                                alt='Company'
                            />
                            <ChevronDown
                                size={16}
                                className='text-slate-500 group-hover:text-violet-600 transition'
                            />
                        </div>

                        <div className='absolute hidden group-hover:block top-full right-0 pt-3 z-50'>
                            <ul className='list-none m-0 p-2 bg-white rounded-xl border border-slate-200 text-sm shadow-lg min-w-36'>
                                <li className='py-2 px-4 cursor-pointer rounded-lg hover:bg-violet-50 hover:text-violet-700 transition'>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </header>

            {/* Dashboard Body */}
            <div className='flex items-start'>

                {/* Sidebar */}
                <aside className='min-h-screen w-16 sm:w-64 bg-white border-r border-slate-200 px-2 sm:px-4 py-6'>

                    <p className='hidden sm:block text-xs font-semibold text-slate-400 uppercase tracking-wider px-4 mb-5'>
                        Recruiter Menu
                    </p>

                    <ul className='flex flex-col gap-2'>

                        <NavLink
                            className={navLinkStyle}
                            to='/dashboard/add-job'
                        >
                            <Plus size={20} />
                            <span className='hidden sm:block'>Add Job</span>
                        </NavLink>

                        <NavLink
                            className={navLinkStyle}
                            to='/dashboard/manage-jobs'
                        >
                            <LayoutDashboard size={20} />
                            <span className='hidden sm:block'>Manage Jobs</span>
                        </NavLink>

                        <NavLink
                            className={navLinkStyle}
                            to='/dashboard/view-applications'
                        >
                            <Users size={20} />
                            <span className='hidden sm:block'>View Applications</span>
                        </NavLink>

                    </ul>
                </aside>

                {/* Main Content */}
                <main className='flex-1 min-w-0 p-4 sm:p-6 lg:p-8'>
                    <Outlet />
                </main>

            </div>
        </div>
    )
}

export default Dashboard
