import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  habits: [{ type: mongoose.Schema.Types.ObjectId, ref: "Habit" }],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
