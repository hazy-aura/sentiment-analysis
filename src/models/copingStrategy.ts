import { Schema, model } from "mongoose";

export interface CopingStrategy {
  mood: string;
  tips: string[];
  activity: string;
  song: string;
}

const copingStrategySchema = new Schema<CopingStrategy>({
  mood: { type: String, required: true },
  tips: [{ type: String }],
  activity: { type: String },
  song: { type: String },
});

export const CopingStrategyModel = model<CopingStrategy>(
  "CopingStrategy",
  copingStrategySchema
);
