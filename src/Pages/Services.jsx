import React from 'react'
import { CalendarDaysIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'


const Services = () => {
  return (
        <>
    <div className='flex items-center justify-center mb-10'>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start border border-slate-500 rounded-lg  p-5 shadow-sm text-black">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold">Daily Updates</dt>
              <dd className="mt-2 leading-7  text-gray-400">
                Here ! we are updating our gold and silver news up to date to engage with customers.
              </dd>
            </div>
            <div className="flex flex-col items-start p-5 border border-slate-500 rounded-lg">
              <div className="rounded-md  bg-white/5 p-2 ring-1 ring-white/10">
                <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold">100% Trusted Seller</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                we are leading gold sellers with strong satisfied customer network. Join us !
              </dd>
            </div>
          </dl>
    </div>
        </>
  )
}

export default Services