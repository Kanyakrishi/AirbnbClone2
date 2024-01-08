import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";

export default function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        {/*only the location and a heart to fav */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm p-2 ">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        {/* Title */}
        <h4 className="text-gray-700 text-xl px-2">{title}</h4>
        {/* Line */}
        <div className="border-b w-10 pt-2" />
        {/* description */}
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" /> {star}
          </p>
          <div>
            <p className="text-lg pb-2 font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// div className="px-5">
//     <p className="text-gray-400 text-sm p-2">{location}</p>
//     <p className="text-gray-700 text-xl px-2">{title}</p>
//     <p className="text-gray-400 text-sm p-2">{description}</p>
//     <p>{start}</p>
//     
//   </div>
