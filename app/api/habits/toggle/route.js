import { connectDB } from "@/lib/mongodb";
import Habit from "@/models/Habit";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

function calculateStreak(dates = []) {
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
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { habitId, date } = await req.json();
  await connectDB();

  const habit = await Habit.findById(habitId);
  if (!habit) return new Response("Habit not found", { status: 404 });

  if (habit.userEmail && habit.userEmail !== session.user.email) {
    return new Response("Forbidden", { status: 403 });
  }

  const current = habit.history.get(date);
  habit.history.set(date, !current);
  await habit.save();

  const completedDates = [...habit.history.entries()]
    .filter(([_, done]) => done)
    .map(([date]) => date);

  return Response.json({
    updatedHabit: {
      _id: habit._id,
      name: habit.name,
      completedDates,
      streak: calculateStreak(completedDates),
    },
  });
}
