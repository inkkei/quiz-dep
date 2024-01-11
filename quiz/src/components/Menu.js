import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu">
      <Link to="/create-quiz">Create New Quiz</Link>
      <Link to="/quizzes-list">See All</Link>
      <Link to="/random-quiz">Get Random Quiz</Link>
    </div>
  );
};
