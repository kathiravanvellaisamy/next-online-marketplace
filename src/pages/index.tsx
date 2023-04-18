import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const listings = api.listings.list.useQuery();

  return (
    <>
      <Head>
        <title>Online Market Place</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="mt-5 flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="mt-5 text-4xl font-bold text-white">
          You want to buy something?
        </h1>

        <div className="mx-auto mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {listings?.data?.map(
            (listing: {
              id: Key | null | undefined;
              name:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              description:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              price:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            }) => (
              <div
                className="flex h-[230px]   flex-col items-start justify-between rounded-lg border border-gray-200 bg-white p-6  shadow dark:border-gray-700 dark:bg-gray-800 md:w-[300px]"
                key={listing.id}
              >
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {listing.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {listing.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  $ {listing.price}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Buy Now
                </a>
              </div>
            )
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
