import { Home, Settings, Stethoscope, Store } from 'lucide-react';
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const navigations = [
    {
        icon: <Home />,
        title: 'Home',
        link: '/home'
    },
    {
        icon: <Stethoscope />,
        title: 'Plant Doctor',
        link: '/picture'
    },
    {
        icon: <Store />,
        title: 'Store',
        link: '/store'
    },
    {
        icon: <Settings />,
        title: 'Settings',
        link: '/settings'
    },
];

const General = () => {
    
    const page = useLocation();

    console.log(page);

  return (
    <div className='content-width pb-14'>
        <Outlet />
        <div className={`fixed bottom-0 left-0 w-full border-t border-gray-200 flex gap-2 bg-white`}>
            {navigations.map( item => 
                <Link key={item.title} to={item.link} className={`tab flex-grow flex flex-col items-center py-3 px-0.5 relative group hover:text-green-600 ${item.link.includes(page.pathname) ? 'text-green-700' : 'text-gray-500'} transition-all duration-300`}>
                    <div className="icon">{item.icon}</div>
                    <div className="title text-xs font-semibold mt-0.5 ">{item.title}</div>
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-[30%] group-hover:bg-green-500 ${item.link.includes(page.pathname) ? 'bg-green-700' : 'bg-transparent'} rounded-3xl transition-all duration-300`}></div>
                </Link>
            )}
        </div>
    </div>
  )
}

export default General