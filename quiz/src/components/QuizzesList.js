import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { QuizCard } from "./QuizCard";

export const QuizzesList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://quizapp-deploy.onrender.com/quiz/"
        );
        setQuizzes(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <>
      <div className="quizzes-list">
        <h2>Quizzes List</h2>
        {quizzes.map((quiz) => {
          return (
            <Link to={`/quiz/${quiz._id}`}>
              <QuizCard quiz={quiz} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
