import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Game } from "./Game";
import { Result } from "./Result";

export const Quiz = () => {
  const [step, setStep] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const { id } = useParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://quizapp-deploy.onrender.com/quiz/${id}`
        );
        setQuestions(response.data.questions);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestions();
  }, [id]);

  const onClickVariant = (e) => {
    setStep(step + 1);
    if (question.correctAnswer === e.target.value) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className="Game">
      {step < questions.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          questionsLength={questions.length}
        />
      ) : (
        <Result
          setCorrect={setCorrect}
          correct={correct}
          length={questions.length}
          quizId={id}
          setStep={setStep}
        />
      )}
    </div>
  );
};
