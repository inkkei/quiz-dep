import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { quizRouter } from "./routes.js";

mongoose
  .connect(
    "mongodb+srv://imgnlenn:imgnlenn@quizzeslist.pglqbdp.mongodb.net/quiz?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database - OK"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cors());

app.use("/quiz", quizRouter);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server (Port:4444) - OK");
});
