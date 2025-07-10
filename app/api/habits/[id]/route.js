import { connectDB } from "@/lib/mongodb";
import Habit from "@/models/Habit";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; 


export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  await connectDB();

  const habit = await Habit.findOne({
    _id: params.id,
    userEmail: session.user.email,
  });

  if (!habit) {
    return new Response("Habit not found", { status: 404 });
  }

  await habit.deleteOne();

  return new Response("Habit deleted successfully", { status: 200 });
}
