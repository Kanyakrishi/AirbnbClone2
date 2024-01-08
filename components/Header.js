"use client";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
// Styles required for the calendar 
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({placeholder}) {
  const [searchInput, setsearchInput] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());

     {/* It will provide the ranges of dates selected */}

  const handleSelect = (ranges) => {
    setstartDate(ranges.Selection.startDate);
    setendDate(ranges.Selection.endDate);
  };
  const [numberOfGuests, setnumberOfGuests] = useState(1);

   {/* need to use start adn endDate */}
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "Selection",
  };
  { /* have to pass query parameters so that if the same link is shared with others than same results. But in redux it wont work like thisl.*/}

 const search = () => {
   router.push({
     pathname: "/search",
     query: {
       location: searchInput,
       startDate: startDate.toISOString(),
       endDate: endDate.toISOString(),
       numberOfGuests: numberOfGuests,
     },
   });
 };



  const resetInput = () => {
    setsearchInput("");
  }

  {/* custom router */}
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:p-10">
      {/* Left div */}
      { /* always push the page into the history, which kinda acts like a stack. so when u click on the airbnb symbol try to go back to the previous page. */}
      <div  onClick={() => router.push('/') }
        className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb logo"
        />
      </div>

      {/* Middle div */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
        <input
          className="pl-5 bg--transparent outline-none flex-grow text-gray-600 text-sm placeholder-gray-400"
          type="text"
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
          placeholder={placeholder || "Start your Search..."}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right div */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="rounded-full border-2 flex items-center space-x-4 shadow-sm p-2 cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
        {/* Only if the search Input is there, this section will be displayed */}

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
        {/* range is required */}
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          {/* Number of Guests */}
          <div className="flex mb-4 border-b items-center">
            {/* flex-grow so that it will occupy max space */}
            <h3 className="text-xl font-semibold flex-grow ">
              Number of Guests
            </h3>
            <UsersIcon className="relative h-5" />
            <input
              type="number"
              value={numberOfGuests}
              className="w-11 pl-2 text-lg outline-none text-red-400"
              min={1}
              onChange={(e) => {
                setnumberOfGuests(e.target.value);
              }}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>Clear</button>
            <button className="flex-grow text-red-400" onClick={search}>Search</button>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
