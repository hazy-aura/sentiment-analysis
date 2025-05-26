import express from "express";
import {
  createCopingStrategy,
  getAllCopingStrategies,
  getCopingStrategiesByMood,
} from "../controllers/copingStrategy.controller";

const router = express.Router();

router.post("/", createCopingStrategy);
router.get("/", getAllCopingStrategies);
router.get("/mood/:mood", getCopingStrategiesByMood);

export default router;