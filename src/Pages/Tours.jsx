import React from 'react'
import TourCard from './TourCard'
import { Farms } from "../assets/images";

const Tours = () => {
    const tours_data=[
        {
          id:1,
          title:"Grace garden",
          rating:4.5,
          pic:Farms,
          location:"Madurai",
          amount:99
        },
        {
          id:2,
          title:"Happy nest agro",
          rating:5,
          pic:Farms,
          location:"Theni",
          amount:199
        },
        {
          id:3,
          title:"Enjoyment agro",
          rating:2,
          pic:Farms,
          location:"chennai",
          amount:199
        },
        {
          id:4,
          title:"Manifest agro park",
          rating:5,
          pic:Farms,
          location:"kerala",
          amount:199
        },
        {
          id:5,
          title:"cochin agro tour",
          rating:5,
          pic:Farms,
          location:"kerala",
          amount:199
        }]
  return (
    <div className="w-100 px-5 my-20">
        <p className='font-bold text-2xl mb-10'>Recently Added Farms :</p>
    <div className='justify-between flex flex-wrap'>
        {
            tours_data.map(tour=>(
                <TourCard key={tour.id} tour={tour}/>
            ))
        }
    </div>
    <div className="w-full flex items-center justify-center my-10">
    <button 
            className='px-3 py-2 rounded-sm bg-slate-900 w-max text-white hover:bg-slate-700'
        >view more</button>
    </div>
    </div>
  )
}

export default Tours