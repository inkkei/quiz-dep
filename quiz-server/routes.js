import express from "express";
import { QuizModel } from "./Models/Quiz.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const quiz = new QuizModel({
    title: req.body.title,
    description: req.body.description,
    questions: req.body.questions,
  });
  console.log(quiz);
  try {
    const result = await quiz.save();
    res.status(201).json({
      createdQuiz: {
        title: result.title,
        description: result.description,
        questions: result.questions,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await QuizModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await QuizModel.findById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { router as quizRouter };
