import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userEmail: { type: String, required: true },
  history: {
    type: Map,
    of: Boolean,
    default: {},
  },
});

export default mongoose.models.Habit || mongoose.model("Habit", habitSchema);
