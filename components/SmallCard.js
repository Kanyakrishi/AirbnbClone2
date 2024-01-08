import React from 'react'
import Image from "next/image";

export default function SmallCard({data}) {
  return (
    <div className='flex items-center m-2 space-x-4 mt-5 cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
      {/* Left div */}
      <div className='relative h-16 w-16'>
        <Image
          src={data.img} className='rounded-lg'
          layout="fill"
          alt="Explore nearby"
        />
      </div>

      {/* Right div */}
      <div>
      <h2>{data.location}</h2>
      <h3 className='text-gray-500'>{data.distance}</h3>
      </div>
    </div>
  );
}
