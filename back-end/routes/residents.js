import express from "express";
import { getResidents, createResident, updateResident, deleteResident } from "../controllers/resident.js";

const router = express.Router();

router.get("/", getResidents);

router.post("/", createResident);

router.put("/:cpf", updateResident);

router.delete("/:cpf", deleteResident);

export default router;