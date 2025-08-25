import { Flame, Calendar, Target, Users } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-mono px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Whabitr</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whabitr is your minimal yet powerful habit tracker.
          Designed to help you stay consistent, track progress,
          and build habits that truly last. With features like
          streak tracking and a 90-day visibility window,
          Whabitr helps you stay focused on what matters most.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <Flame className="w-8 h-8 text-orange-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Streaks that Motivate</h2>
          <p className="text-gray-600 text-sm">
            Track your consistency with streaks that keep you motivated and
            disciplined every day.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <Calendar className="w-8 h-8 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">90-Day Progress</h2>
          <p className="text-gray-600 text-sm">
            Get a clear picture of your growth with up to 90 days of data
            visibility and habit insights.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <Target className="w-8 h-8 text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Stay Focused</h2>
          <p className="text-gray-600 text-sm">
            Whabitr helps you cut distractions and stay on track with a
            minimal yet effective design.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <Users className="w-8 h-8 text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">For Everyone</h2>
          <p className="text-gray-600 text-sm">
            Whether you&apos;re a student, professional, or creator, Whabitr is
            built to adapt to your lifestyle.
          </p>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Why We Built Whabitr</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We believe habits define who we are. Whabitr is crafted to help you
          achieve consistency without complexity — simple, effective, and
          beautiful.
        </p>
      </div>
    </main>
  );
}
