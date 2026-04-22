import React from 'react'
import {motion} from "framer-motion"
import {Briefcase} from "lucide-react"
import {useNavigate} from "react-router-dom"
const LandingPage = () => {
  const isAuthenticated = true;
  const user = {fullName:"alex", role:"employer"}
  const navigate = useNavigate()
  return (
    <header>
      <div className=''>
        <div className="">
          {/* logo */}
          <div className=''>
            <div className=''>
              <Briefcase className=''>
              </Briefcase>
            </div>
            <span className=''>
              JobPortal
            </span>
          </div>

          {/* navigation links */}
          <nav className='flex items-center justify-end gap-x-6'>
            <a href="" onClick={()=> {
              navigate(
                isAuthenticated && user?.role === "employer" ? "/employer-dashboard" : "/login"
              )
            }} className=''> For Employers

            </a>
            <nav>

            </nav>
          </nav>

          {/* auth buttons */}
          <div className=''>
            {isAuthenticated ? (
              <div className=''></div>
              <span className=''> Welcome, {user?.fullName}</span>
              <a href={user?.role === "employer"} ></a>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default LandingPage