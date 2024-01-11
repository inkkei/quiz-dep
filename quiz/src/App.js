import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Menu } from "./components/Menu";
import { Quiz } from "./components/Quiz";
import { QuizzesList } from "./components/QuizzesList";

import "./index.scss";
import { RandomQuiz } from "./components/RandomQuiz";
import { CreateQuiz } from "./components/CreateQuiz";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">
          <h1>TopQuizzes</h1>
        </Link>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />
          <Route path="/quizzes-list" element={<QuizzesList />} />
          <Route path="/random-quiz" element={<RandomQuiz />} />
          <Route path="/quiz/:id" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
