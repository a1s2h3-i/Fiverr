'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const HeroBanner = () => {
  const router = useRouter()
  const [image, setImage] = useState(1)
  useEffect(() => {
    const interval = setInterval(() => {
      setImage(prev => (prev >= 6 ? 1 : prev + 1));
    }, 1000);
  
    return () => clearInterval(interval);
  }, [image]);
  

  return (
    <div className="relative h-[680px] w-full overflow-hidden">
      {/* Container for images */}
      <div className="absolute inset-0 w-full h-full z-0">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              image === num ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={`/bg-hero${num}.webp`}
              alt={`Hero ${num}`}
              fill
              className="object-cover"
              priority={num === 1} // only set priority for the first image
            />
          </div>
        ))}
      </div>
      <div className='z-10 relative w-[650px] flex justify-center flex-col h-full gap-5 ml-20'>
        <h1 className='text-white text-5xl leading-snug'>
        Find the perfect&nbsp;
          <i>freelance</i>
          <br />
          services for your business
        </h1>
   <div className='flex align-middle'>
    <div className="relative">
        <input type="text" className='h-14 w-[450px] pl-10 rounded-md rounded-r-none' placeholder={"Try building mobile app"}/>

    </div>
    <button className='bg-[1DBF73] text-white  px-12 text-lg fontsem rounded-r-md'>
        Search
    </button>
   </div>
   <div className='text-white flex gap-4'>
    Popular:{""}
    <ul className='flex gap-5'>

    <li
              className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300	cursor-pointer"
              
            >  
            WebSite Design  
            </li>
            <li
              className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300	cursor-pointer"
              
            >  
          WordPress 
            </li>
            <li
              className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300	cursor-pointer"
              
            >  
           Logo Design 
            </li>
            <li
              className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300	cursor-pointer"
              
            >  
           AI Service
            </li>
           


    </ul>


   </div>
      </div>
    </div>
  )
}

export default HeroBanner
