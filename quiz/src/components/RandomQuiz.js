import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { QuizCard } from "./QuizCard";

export const RandomQuiz = () => {
  const [quiz, setQuiz] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        await axios
          .get(`https://quizapp-nfpb.onrender.com/quiz/`)
          .then((response) =>
            setQuiz(
              response.data[Math.floor(Math.random() * response.data.length)]
            )
          )
          .finally(setLoading(false));
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="quizzes-list">
          <h2>There is your random quiz</h2>
          <Link to={`/quiz/${quiz._id}`}>
            <QuizCard quiz={quiz} />
          </Link>
        </div>
      )}
    </>
  );
};
