export const Game = ({ step, question, onClickVariant, questionsLength }) => {
  const percentage = Math.round((step / questionsLength) * 100);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h2>{question.question}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index} value={index} onClick={(e) => onClickVariant(e)}>
            {answer}
          </li>
        ))}
      </ul>
    </>
  );
};
