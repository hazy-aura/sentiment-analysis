import { Schema, model } from "mongoose";

export interface CopingStrategy {
  mood: string;
  tips: string[];
  activity: string;
  song: string;
  createdAt: Date;
}

const copingStrategySchema = new Schema<CopingStrategy>({
  mood: { type: String, required: true },
  tips: [{ type: String }],
  activity: { type: String },
  song: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export const CopingStrategyModel = model<CopingStrategy>(
  "CopingStrategy",
  copingStrategySchema
);
