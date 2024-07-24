import React from 'react'
import MissionCard from './MissionCard'
import { MissionSvg, VisionSvg } from '../assets/images'
import Stats from './Stats'

const Content = () => {
  const content = [{
    id: 1,
    title: 'vision',
    svg: VisionSvg,
    desc: 'Happy Nest Agro Tourism Pvt Ltd envisions becoming a leading agro-tourism enterprise globally, inspiring travellers to appreciate the beauty of agriculture, support sustainable practices, and contribute to the well-being of rural communities'
  },
  {
      id:2,
      title: 'mission',
      svg: MissionSvg,
      desc: 'Our mission at Happy Nest is to promote sustainable agriculture, empower farmers, and support local communities by providing unique and educational agro-tourism experiences. We strive to create a positive social and environmental impact while offering unforgettable moments for our guests.'
  }
  ]
  return (
    <section className="w-screen h-max text-black flex-col flex-wrap flex items-center justify-center">
      <div className="mt-10">
        <p className='text-4xl text-center font-bold'>Happy nest <span className='text-green-500'>agro</span></p> 
        <p className='text-center mt-10'>Welcome to the world of Happy Nest Agro Tourism, where the vibrant tapestry of agriculture comes to life for urban
adventurers. Founded with a passion for bridging the gap between city dwellers and the enchanting realm of farming,
Happy Nest Agro Tourism is a pioneering company that has set out to revolutionize the way we connect with the
roots of our sustenance.</p> 
      </div>
      <div className="mission-cards">
        <div className="cards-container flex flex-col sm:flex-row gap-4">
          {
            content.map((cont)=>(
              <MissionCard key={cont.id} cont={cont}/>
            ))
          }
        </div>
        <div className="flex justify-center">
        <p className='mt-5 w-full text-center sm:w-3/4'>At Happy Nest, we understand that agriculture is not just a livelihood; it is a heritage, a way of life, and an art form passed down through generations. Through meticulously crafted tour packages, we invite tourists to embark on an unforgettable voyage where they can roll up their sleeves and participate in the age-old practices that sustain our communities. From sowing seeds and tending to plants to caring for animals and harvesting the fruits of labor, our tours offer a hands-on encounter that awakens the senses and rejuvenates the spirit.</p>
        </div>
        <Stats />
      </div>      
    </section>
  )
}

export default Content