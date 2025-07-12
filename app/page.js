"use client";
import Link from "next/link";
import { MdOutlineDoneOutline } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";

export default function Home() {
  return (
    <main>
      
      <div className="border-t border-gray-800 mx-4 sm:mx-20 mt-3"></div>

     
      <section className="text-black text-center mt-20 px-4">
        <h1 className="font-semibold font-mono text-4xl sm:text-5xl">
          Track Habits. Build Streaks. Change Your Life.
        </h1>
        <h2 className="mt-5 font-mono text-lg text-gray-700">Just Habits. No Noise.</h2>

        <Link href="/auth/signin">
          <button className="mt-10 px-7 py-3 border text-white bg-black font-mono border-black rounded-full hover:scale-110 transition-transform duration-200">
            Get Tracking Now!
          </button>
        </Link>
      </section>

      
      <section className="mt-20">
        <img
          src="SS.png"
          alt="Habit Tracker Screenshot"
          className="border border-black mx-auto block max-w-[95%] sm:max-w-[90%] rounded"
        />

       
        <div className="text-center mt-20 px-4">
          <h1 className="font-mono font-bold text-3xl">Simple and Beautiful Habit Tracker</h1>
          <p className="text-gray-500 font-mono mt-2">Achieve every target like a pro</p>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10">
           
            <div className="flex flex-col items-center max-w-sm">
              <MdOutlineDoneOutline className="size-8 mb-4" />
              <h2 className="text-2xl font-bold font-mono">Do it Every Day</h2>
              <p className="mt-3 text-gray-400 text-sm">
                Get disciplined. Doing it every day helps you form new habits, and habits are what make you reach your goals.
              </p>
            </div>

            
            <div className="flex flex-col items-center max-w-sm">
              <FaFire className="size-8 mb-4" />
              <h2 className="text-2xl font-bold font-mono">Maintain the Streak</h2>
              <p className="mt-3 text-gray-400 text-sm">
                Visualize your consistency. The streak indicator motivates you to never break the chain.
              </p>
            </div>

            
            <div className="flex flex-col items-center max-w-sm">
              <GrAchievement className="size-8 mb-4" />
              <h2 className="text-2xl font-bold font-mono">Achieve Every Target</h2>
              <p className="mt-3 text-gray-400 text-sm">
                From morning routines to personal growth, stay on top of your goals with clear progress.
              </p>
            </div>
          </div>
        </div>
      </section>

     <section className="px-6 py-16 bg-white text-center mt-16">
  <h2 className="text-4xl font-extrabold mb-12 text-black">WHAT ARE <br /> PEOPLE SAYING?</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    
    <div className="border p-6 rounded shadow-sm">
      <div className="mb-2 text-lg">★★★★★</div>
      <p className="font-semibold mb-2">“Super motivating!”</p>
      <p className="text-gray-600 text-sm mb-4">
        This habit tracker has kept me consistent for the first time in years. Seeing my streaks grow each day keeps me going!
      </p>
      <p className="text-orange-500 font-medium">🟠 Yash Kumar</p>
    </div>

    <div className="border p-6 rounded shadow-sm">
      <div className="mb-2 text-lg">★★★★☆</div>
      <p className="font-semibold mb-2">“Simple and effective”</p>
      <p className="text-gray-600 text-sm mb-4">
        I love how clean and minimal the UI is. It’s easy to log habits and track progress without distractions.
      </p>
      <p className="text-orange-500 font-medium">🟠 Arti Gupta</p>
    </div>

    <div className="border p-6 rounded shadow-sm">
      <div className="mb-2 text-lg">★★★★★</div>
      <p className="font-semibold mb-2">“Helped me build routines”</p>
      <p className="text-gray-600 text-sm mb-4">
        I’ve been using this tracker for a few months and finally nailed my morning routine. The streak feature is gold!
      </p>
      <p className="text-orange-500 font-medium">🟠 Sandeep Kumar</p>
    </div>

    <div className="border p-6 rounded shadow-sm">
      <div className="mb-2 text-lg">★★★☆☆</div>
      <p className="font-semibold mb-2">“Good but needs reminders”</p>
      <p className="text-gray-600 text-sm mb-4">
        The visual design and tracking are great, but I wish it had built-in daily reminders or push notifications.
      </p>
      <p className="text-orange-500 font-medium">🟠 Hitanshi</p>
    </div>

  </div>
</section>


     
      <section className="mt-10 text-center px-4">
        <h1 className="text-3xl font-bold">Get started for the rest of your life, today.</h1>
        <Link href="/auth/signin">
          <button className="mt-4 mb-3 px-7 py-3 border text-white bg-black font-mono border-black rounded-2xl hover:scale-110 transition-transform duration-200">
            Get Started Now!
          </button>
        </Link>
        <p className="font-mono"><strong>Whabitr</strong> is 100% Free</p>
      </section>

      
      <footer className="bg-gray-900 text-white py-10 mt-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-xl font-bold mb-2">Whabitr</h2>
            <p className="text-sm text-gray-400">
              Build powerful habits. Track your streaks. Stay consistent, stay winning.
            </p>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link href="/auth/signin" className="hover:underline">Get Started</Link></li>
              <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <p className="text-sm text-gray-400 mb-2">Built with 💙 by Nikunj Miglani</p>
            <div className="flex space-x-4 text-gray-300">
              <a href="https://github.com/Nikunjmiglani" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
              <a href="https://linkedin.com/in/nikunjmiglani" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>

       
        <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Whabitr. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
