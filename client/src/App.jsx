
import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home.jsx'
import ApplyJob from './pages/ApplyJob.jsx'
import Applications from './pages/Applications.jsx'
import Dashboard from './pages/Dashboard.jsx'

import AddJob from './pages/AddJob.jsx'
import ManageJobs from './pages/ManageJobs.jsx'
import ViewApplications from './pages/ViewApplications.jsx'
import 'quill/dist/quill.snow.css'

import RecruiterLogin from './components/RecruiterLogin.jsx'
import { AppConstant } from './context/AppContext.jsx'

const App = () => {

    const { showRecruiterLogin } = useContext(AppConstant)

    return (
        <div>

            {showRecruiterLogin && <RecruiterLogin />}

            <Routes>

                {/* User Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/apply-job/:id" element={<ApplyJob />} />
                <Route path="/applications" element={<Applications />} />

                {/* Recruiter Dashboard Routes */}
                <Route path="/dashboard" element={<Dashboard />}>

                    <Route path="add-job" element={<AddJob />} />
                    <Route path="manage-jobs" element={<ManageJobs />} />
                    <Route path="view-applications" element={<ViewApplications />} />

                </Route>

            </Routes>

        </div>
    )
}

export default App
