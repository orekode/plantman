import React from 'react'
import { Outlet } from 'react-router'

const Leave = () => {
  return (
    <div>
        <div className="relative hw-screen">

            <div className="relative z-10 hw-full content-width mx-auto">
                <Outlet />
            </div>

            <div className="absolute top-0 left-0 hw-full z-0">
                <img src="/images/leaves.jpg" alt="" className="img-cover relative z-0" />
                <div className="bg-black bg-opacity-50 hw-full absolute top-0 left-0 z-10"></div>
            </div>
        </div>
    </div>
  )
}

export default Leave