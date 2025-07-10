"use client"
import Link from "next/link";

export default function Home() {
  return (
    
   <main>
    <div className="border-t border-gray-800 mx-6 mt-3 sm:mx-20"></div>
    <section className=" text-black text-center mt-20">
      <h1 className="font-semibold font-mono  text-4xl">Track Habits. Build Streaks. Change Your Life.</h1>
      <h2 className="mt-5 font-mono font-normal">Just Habits. No Noise.</h2>

     <Link href="/auth/signin">
          <button className="mt-10 px-7 cursor-pointer hover:scale-110 transition-transform duration-200 py-3 border text-white bg-black font-mono border-black rounded-full">
            Get Tracking Now!
          </button>
        </Link>
      
      
    </section>
  </main>
  );
}

