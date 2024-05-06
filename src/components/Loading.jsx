import React from 'react'

const Loading = ({ load }) => {
  if(load)
  return (
    <div className='bg-white flex-center flex-col fixed top-0 left-0 hw-screen z-50'>
      <div className="h-[100px] w-[100px]">
        <img src="/images/loader.gif" alt="..." className="img-contain" />
      </div>
      <div className="text-center font-bold text-xs text-green-400">Loading...</div>
    </div>
  )
}

export default Loading