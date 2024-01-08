import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import Footer from "@/components/Footer";
import exploreData from "./../components/exploreData.json";
import liveAnywhereData from "./../components/liveAnywhereData.json";
import LargeCard from "@/components/LargeCard";
import axios from "axios";
import pLimit from "p-limit";

const maxRetries = 3; // Maximum number of retries
const retryDelay = 1000; // Delay between retries in milliseconds
const limit = pLimit(1); // Allow only one concurrent request

export default function Home() {
  // console.log("****--------------------**", explore);
  return (
    <div className="">
      <head>
        <title>Airbnb</title>
      </head>
      {/* Header */}
      <Header placeholder={"Start your Search..."}/>

      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <p className="font-semibold text-2xl pb-5">Explore Nearby</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item) => (
              <SmallCard key={item.img} data={item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-2xl font-semibold">Live Anywhere</h2>
          <div className="flex overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveAnywhereData.map((item) => (
              <MediumCard key={item.img} data={item} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The greatest outdoors"
          description="Wishlists curated by KANYA!"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

async function fetchDataWithRetries() {
  const axiosInstance = axios.create({
    baseURL: "https://links.papareact.com/pyp",
    // Other axios configuration options here...
  });

  let lastError = null;

  for (let retryCount = 0; retryCount < maxRetries; retryCount++) {
    try {
      const response = await axiosInstance.get("/");
      return response.data;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }

  throw lastError; // If all retries fail, throw the last error
}

export async function generateStaticParams() {
  let explore = null;

  try {
    explore = await limit(() => fetchDataWithRetries());
  } catch (error) {
    throw error; // Propagate the error if it occurs
  }

  return {
    props: {
      explore: explore,
    },
  };
}
