import {} from "dotenv/config";

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { quizRouter } from "./routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/quiz", quizRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database - OK"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server (Port:${process.env.PORT}) - OK`);
});
