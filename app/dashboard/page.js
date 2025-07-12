'use client';
export const dynamic = "force-dynamic";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);

  const lastNDays = Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - i));
    return date.toISOString().split("T")[0];
  });

  const calculateStreak = (dates = []) => {
    const sorted = [...dates].sort((a, b) => new Date(b) - new Date(a));
    let streak = 0;
    for (let i = 0; i < sorted.length; i++) {
      const date = new Date(sorted[i]);
      date.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setDate(today.getDate() - i);
      today.setHours(0, 0, 0, 0);
      if (date.getTime() === today.getTime()) streak++;
      else break;
    }
    return streak;
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/habits")
        .then((res) => res.json())
        .then((data) => {
          const withStreaks = data.map((habit) => ({
            ...habit,
            completedDates: habit.completedDates ?? [],
            streak: calculateStreak(habit.completedDates ?? []),
          }));
          setHabits(withStreaks);
        })
        .catch((err) => console.error("Error fetching habits:", err))
        .finally(() => setLoading(false));
    } else if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  const addHabit = async () => {
    if (!newHabit.trim()) return;
    const res = await fetch("/api/habits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newHabit }),
    });

    const data = await res.json();
    if (data && data._id) {
      setHabits([
        ...habits,
        {
          ...data,
          completedDates: [],
          streak: 0,
        },
      ]);
      setNewHabit("");
    }
  };

  const toggleCompletion = async (habitId, date) => {
    const res = await fetch("/api/habits/toggle", {
      method: "POST",
      body: JSON.stringify({ habitId, date }),
    });

    if (!res.ok) return console.error("Failed to toggle habit");

    const { updatedHabit } = await res.json();
    setHabits((prev) =>
      prev.map((h) => (h._id === habitId ? updatedHabit : h))
    );
  };

  const deleteHabit = async (id) => {
    const res = await fetch(`/api/habits/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setHabits(habits.filter((h) => h._id !== id));
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-sm">Loading your habits...</p>
      </div>
    );
  }

  return (
    <div className="p-4 mt-15 md:p-8 max-w-7xl mx-auto font-mono">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Habit Tracker <span className="text-blue-600">(Past {days} Days)</span>
        </h1>
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600">{session?.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="text-red-600 underline text-sm"
          >
            Sign Out
          </button>
        </div>
      </div>

      
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <input
          type="text"
          className="border px-4 py-2 rounded-lg w-full sm:w-auto flex-grow focus:outline-none focus:ring focus:border-blue-400"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add a new habit"
        />
        <button
          onClick={addHabit}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Add Habit
        </button>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Show:</label>
          <select
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="border px-3 py-1 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={7}>Last 7 days</option>
            <option value={30}>Last 30 days</option>
            <option value={60}>Last 60 days</option>
            <option value={90}>Last 90 days</option>
          </select>
        </div>
      </div>

    
      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="px-3 py-2 border text-left">Habit</th>
              {lastNDays.map((date) => (
                <th
                  key={date}
                  className="px-1 py-2 border text-center text-[10px] text-gray-400"
                >
                  {new Date(date).getDate()}
                </th>
              ))}
              <th className="px-2 py-2 border">🔥</th>
              <th className="px-2 py-2 border">❌</th>
            </tr>
          </thead>
          <tbody>
            {habits.map((habit) => (
              <tr key={habit._id} className="odd:bg-white even:bg-gray-50">
                <td className="px-3 py-2 border font-medium whitespace-nowrap rounded-l-xl bg-gray-100">
                  {habit.name}
                </td>
                {lastNDays.map((date) => (
                  <td
                    key={date}
                    onClick={() => toggleCompletion(habit._id, date)}
                    className={`w-6 h-6 sm:w-7 sm:h-7 text-center cursor-pointer border transition-colors duration-150 select-none text-xs sm:text-sm ${
                      (habit.completedDates ?? []).includes(date)
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {(habit.completedDates ?? []).includes(date) ? "✓" : ""}
                  </td>
                ))}
                <td className="px-2 py-2 border text-center text-sm font-semibold bg-gray-100">
                  {habit.streak}
                </td>
                <td className="px-2 py-2 border text-center rounded-r-xl cursor-pointer bg-gray-100">
                  <button
                    onClick={() => deleteHabit(habit._id)}
                    className="text-red-600 hover:text-red-800 text-base"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
