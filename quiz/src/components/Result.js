import { Link } from "react-router-dom";

export const Result = ({ setCorrect, correct, length, quizId, setStep }) => {
  const playAgain = () => {
    setStep(0);
    setCorrect(0);
  };
  return (
    <div className="result">
      <img
        alt=""
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
      />
      <h2>
        Correct {correct} answer(s) from {length}
      </h2>
      <Link to={`/quiz/${quizId}`}>
        <button onClick={playAgain}>Play again</button>
      </Link>
    </div>
  );
};
