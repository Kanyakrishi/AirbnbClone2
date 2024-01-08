import React from "react";
import Image from "next/image";

export default function MediumCard({data}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80 m-2 grid sm:grid-cols-1 ">
      <Image src={data.img} layout="fill" alt="Image" className="rounded-xl"/>
      </div>
      <h3 className="mt-3">{data.title}</h3>
    </div>
  );
}
