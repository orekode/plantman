import React, { useEffect, useState } from 'react'
import { Loading } from '../components'
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Diagnose = () => {
    const [load, setLoad] = useState(true);

    useEffect(() => {
        let url = localStorage.getItem('image');
        fetch(url, {
            mode: 'no-cors',
        }).then( blob => {
            //handle upload
            setTimeout(() => {
                setLoad(false);
            }, 3000)
        });

    },[]);

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

            <div className="top text-center text-gray-500">
                Name of The Disease 
            </div>

            <div className="image-box h-[35vh] mt-6 border rounded-xl overflow-hidden">
                <img src="/images/leaves.jpg" alt="" className="img-cover" />
            </div>

            <div className="content mt-3">
                <h1 className='font-bold text-lg'>Name Of The Disease</h1>
                <p className='text-gray-600 mt-1.5'>description of desease Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, dolorem, est error ea adipisci a, veniam deleniti alias veritatis aspernatur reprehenderit qui animi reiciendis! Obcaecati sequi impedit quidem placeat similique?</p>
            </div>

            <div className="content mt-3">
                <h1 className='font-bold text-lg'>Treatments</h1>


                <div className="treatments bg-gray-200 p-3 rounded-2xl">

                    <Link to="/treatment">
                        <div className="bg-white rounded-2xl shadow p-3 flex items-center gap-3 text-green-700 border-2 border-green-600">

                            <div className="h-[50px] w-[50px]">
                                <img src="/images/diagnosed.png" alt="" className="img-contain" />
                            </div>

                            <div className="flex-grow leading-tight font-medium">
                                The name of the treatment here
                            </div>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Diagnose