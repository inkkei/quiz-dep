import axios from "axios";
import { useState } from "react";

export const CreateQuiz = () => {
  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    questions: [
      {
        answers: ["", "", "", ""],
        question: "",
        correctAnswer: 0,
      },
    ],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleQuestionChange = (event, index) => {
    quiz.questions[index].question = event.target.value;
    setQuiz({ ...quiz, questions: quiz.questions });
  };

  const handleAnswerChange = (event, question_id, answer_id) => {
    quiz.questions[question_id].answers[answer_id] = event.target.value;
    setQuiz({ ...quiz, questions: quiz.questions });
  };

  const handleRadioChange = (event, question_id) => {
    quiz.questions[question_id].correctAnswer = event.target.value;
    setQuiz({ ...quiz, questions: quiz.questions });
  };

  const addQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        { answers: ["", "", "", ""], correctAnswer: 0 },
      ],
    });
    console.log(quiz);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://quizapp-deploy.onrender.com/quiz/", quiz);
      alert("Quiz Created!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-quiz">
      <h2>Create Your Quiz</h2>

      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" onChange={handleChange} />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          onChange={handleChange}
        ></textarea>

        <div className="questions-group">
          {quiz.questions.map((question, question_id) => {
            return (
              <>
                <label htmlFor={`question-${question_id}`}>
                  <strong>Question № {question_id + 1}</strong>
                </label>
                <input
                  key={question_id}
                  type="text"
                  name={`question-${question_id}`}
                  value={question.question ?? ""}
                  onChange={(event) => handleQuestionChange(event, question_id)}
                />
                {quiz.questions[question_id].answers.map(
                  (answer, answer_id) => {
                    return (
                      <div className="answers-group">
                        <input
                          type="radio"
                          id={`question-${question_id}-correct-answer-${answer_id}`}
                          name={`question-${question_id}-correct-answer-${answer_id}`}
                          value={answer_id}
                          onChange={(event) =>
                            handleRadioChange(event, question_id)
                          }
                          checked={question.correctAnswer == answer_id}
                        ></input>

                        <label
                          htmlFor={`question-${question_id}-answer-${answer_id}`}
                        >
                          <i> Answer № {answer_id + 1}</i>
                        </label>

                        <input
                          type="text"
                          id={`question-${question_id}-answer-${answer_id}`}
                          name={`question-${question_id}-answer-${answer_id}`}
                          key={answer_id}
                          value={question.answers[answer_id] ?? ""}
                          onChange={(event) =>
                            handleAnswerChange(event, question_id, answer_id)
                          }
                        />
                      </div>
                    );
                  }
                )}

                {/*    <div className="answers-group">
                  <input
                    type="radio"
                    id="answer"
                    name="answer"
                    value="1"
                  ></input>

                  <label htmlFor="answer-1">
                    <i>Answer 1</i>
                  </label>

                  <input
                    id="answer-1"
                    key="answer-1"
                    type="text"
                    name="answer-1"
                  />
                </div> */}
              </>
            );
          })}
          <button
            className="add-question-btn"
            type="button"
            onClick={addQuestion}
          >
            Add Question
          </button>
        </div>
        <button className="submit-btn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
