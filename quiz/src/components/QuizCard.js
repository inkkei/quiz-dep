export const QuizCard = ({ quiz }) => {
  return (
    <div className="quiz-card">
      <h3 className="card-title">{quiz.title}</h3>
      <p className="card-description">{quiz.description}</p>
      <p className="">
        Questions: <strong>{quiz.questions?.length}</strong>
      </p>
    </div>
  );
};
