import React from 'react'

const MissionCard = ({cont}) => {
  return (
    <div className="h-max gap-10 flex items-center shadow-lg">
            <div className="px-6 py-4 justify-center items-center w-full">
              <div className="font-bold text-xl mb-5 flex text-red-500">{cont.title}</div>
                <div className="flex gap-10">
                <div className="w-5 m-5">
                 <img src={cont.svg} alt="" className='h-auto m-5 min-w-5'/>
                </div>
                <p className="text-gray-700 text-base">{cont.desc}</p>
                </div>
            </div>
    </div>
  )
}

export default MissionCard