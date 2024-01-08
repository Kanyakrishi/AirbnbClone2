import Header from '@/components/Header'
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import React from 'react'
import { format } from 'date-fns';
import searchResults from './../components/searchResults.json';
import InfoCard from '@/components/InfoCard';

function Search() {
  console.log(searchResults);
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  let formattedStartDate = "";
  let formattedEndDate = "";

  if (startDate && endDate) {
    formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  }

  return (
    <div className="h-screen">
      <Header
        placeholder={`${location} | ${formattedStartDate} - ${formattedEndDate} | ${numberOfGuests}`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays in {location} for {numberOfGuests} guests from{" "}
            {formattedStartDate} - {formattedEndDate}{" "}
          </p>
          <h1 className="text-3xl font-semibold mb-6 mt-2">
            Stays in {location}
          </h1>
          {/*  buttons are hidden by default in the mobile view */}
          <div className=" hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {/* to display the search results */}
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  title={title}
                  location={location}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;


export async function getServerSideProps() {
  try {
    const proxyUrl = "https://corsproxy.io/?";
    const targetUrl = "https://api.yourdomain.com/data";
    const urlWithProxy = proxyUrl + encodeURIComponent(targetUrl);
    const response = await fetch(urlWithProxy);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const searchResults = await response.json();
    return {
      props: {
        searchResults,
      },
    };
  } catch (error) {
    console.error("Fetch error:", error.message);
    return {
      props: {
        searchResults: [],
      },
    };
  }
}
