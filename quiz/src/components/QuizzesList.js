import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { QuizCard } from "./QuizCard";

export const QuizzesList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        await axios
          .get("https://quizapp-nfpb.onrender.com/quiz/")
          .then((response) => setQuizzes(response.data))
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
          <h2>Quizzes List</h2>
          {quizzes.map((quiz) => {
            return (
              <Link to={`/quiz/${quiz._id}`}>
                <QuizCard quiz={quiz} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
