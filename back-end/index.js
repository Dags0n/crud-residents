import express from "express";
import cors from "cors";
import residentsRoutes from "./routes/residents.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", residentsRoutes);

app.listen(8800);