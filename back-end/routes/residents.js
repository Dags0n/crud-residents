import express from "express";
import { getResidents } from "../controllers/resident.js";

const router = express.Router();

router.get("/", getResidents);

export default router;