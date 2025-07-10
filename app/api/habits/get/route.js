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
    const expected = new Date();
    expected.setDate(expected.getDate() - i);
    expected.setHours(0, 0, 0, 0);
    if (date.getTime() === expected.getTime()) streak++;
    else break;
  }
  return streak;
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  await connectDB();

  const habits = await Habit.find({ userEmail: session.user.email });

  const transformed = habits.map((habit) => {
    const completedDates = [...habit.history.entries()]
      .filter(([_, done]) => done)
      .map(([date]) => date);

    return {
      _id: habit._id,
      name: habit.name,
      completedDates,
      streak: calculateStreak(completedDates),
    };
  });

  return Response.json(transformed);
}
