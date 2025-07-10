import { connectDB } from "@/lib/mongodb";
import Habit from "@/models/Habit";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // ✅ Use full path

// GET all habits for the signed-in user
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  await connectDB();

  const habits = await Habit.find({ userEmail: session.user.email });

  const formatted = habits.map((habit) => ({
    _id: habit._id,
    name: habit.name,
    completedDates: [...habit.history.entries()]
      .filter(([_, value]) => value)
      .map(([date]) => date),
  }));

  return Response.json(formatted);
}

// ✅ ADD this POST method to allow habit creation
export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { name } = await req.json();
  if (!name || name.trim() === "") {
    return new Response("Invalid habit name", { status: 400 });
  }

  await connectDB();

  const newHabit = await Habit.create({
    name,
    userEmail: session.user.email,
    history: new Map(), // empty initially
  });

  return Response.json({
    _id: newHabit._id,
    name: newHabit.name,
    completedDates: [],
  });
}
