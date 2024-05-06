import React from 'react'
import { Link } from 'react-router-dom'

const Onboarding = () => {
  return (
    <div className="text-white flex flex-col justify-between p-6">
        <div className="h-[70vh] flex flex-col justify-center">
            <h1 className='font- text-5xl leading-tight mt-12'>Farm Care With Plant Diagnosis</h1>
        </div>

        <div className="btns h-[20vh] flex flex-col justify-center gap-3">

            <Link to='/signup'>
                <button className='btn-dark'>Sign Up</button>
            </Link>

            <Link to='/login'>
                <button className='btn-outline'>Log In</button>
            </Link>

        </div>
    </div>
  )
}

export default Onboarding