import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { QuizCard } from "./QuizCard";

export const RandomQuiz = () => {
  const [quiz, setQuiz] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://quizapp-deploy.onrender.com/quiz/`
        );
        setQuiz(
          response.data[Math.floor(Math.random() * response.data.length)]
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <>
      <div className="quizzes-list">
        <h2>There is your random quiz</h2>
        <Link to={`/quiz/${quiz._id}`}>
          <QuizCard quiz={quiz} />
        </Link>
      </div>
    </>
  );
};
