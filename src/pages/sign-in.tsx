import { SignIn } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type SellItemForm = {
  name: string;
  description: string;
  price: number;
};

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sell an Item - Online Market Place</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="flex min-h-screen flex-col items-center  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="mb-5 mt-5 text-3xl font-semibold text-white">Log In</h1>
        <SignIn />
      </main>
    </>
  );
};

export default Login;
