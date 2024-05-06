import React, { useState } from 'react'
import { Loading } from '../components'
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Treatment = () => {
    const [load, setLoad] = useState(false);

    return (
        <div className='p-6'>
            <Loading load={load} />

            <div className="fixed top-0 left-0 p-3 z-20">
                <Link to="/home">
                    <div className="h-[40px] w-[40px] rounded-full border flex-center text-gray-500 bg-white">
                        <ChevronLeft />
                    </div>
                </Link>
            </div>

            <div className="content mt-6">
                <h1 className='font-bold text-lg text-center'>Name Of The Disease</h1>
                <p className='text-gray-600 mt-1.5'>description of desease Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, dolorem, est error ea adipisci a, veniam deleniti alias veritatis aspernatur reprehenderit qui animi reiciendis! Obcaecati sequi impedit quidem placeat similique?</p>
            </div>

        </div>
    )
}

export default Treatment