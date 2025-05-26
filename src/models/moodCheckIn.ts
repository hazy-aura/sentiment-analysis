 import { Schema, model, Types } from "mongoose";

interface MoodCheckIn {
  userId: Types.ObjectId;
  mood: string;
  moodScale?: number;
  journalText?: string;
  createdAt: Date;
}

const moodCheckInSchema = new Schema<MoodCheckIn>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  mood: { type: String, required: true },
  moodScale: { type: Number, min: 1, max: 10 },
  journalText: { type: String, maxlength: 5000 },
  createdAt: { type: Date, default: Date.now }
});

export const MoodCheckInModel = model<MoodCheckIn>("MoodCheckIn", moodCheckInSchema);
