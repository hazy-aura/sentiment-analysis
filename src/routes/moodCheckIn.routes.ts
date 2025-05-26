import express from "express";
import { createMoodCheckIn, getMoodCheckInsByUser } from "../controllers/moodCheckIn.controller";

const router = express.Router();

router.post("/", createMoodCheckIn);
router.get("/:userId", getMoodCheckInsByUser);

export default router;