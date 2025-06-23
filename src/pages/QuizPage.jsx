import { useEffect, useState } from "react";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";

function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const [timeTaken, setTimeTaken] = useState([]);
  const [questionStart, setQuestionStart] = useState(Date.now());
  const navigate = useNavigate();

  const currentQuestion = questions[current];

  // Start question timer
  useEffect(() => {
    if (showAnswer) return;
    if (timer === 0) {
      recordTime();
      handleNext();
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, showAnswer]);

  // Record how long the user took
  const recordTime = () => {
    const taken = ((Date.now() - questionStart) / 1000).toFixed(1); // in seconds
    setTimeTaken((prev) => [...prev, Number(taken)]);
  };

  const handleOptionClick = (option) => {
    if (showAnswer) return;
    setSelected(option);
    setShowAnswer(true);
    recordTime();
    if (option === currentQuestion.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    setTimer(15);
    setQuestionStart(Date.now());

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      // Save everything
      localStorage.setItem("quizScore", score);
      localStorage.setItem("quizTime", JSON.stringify(timeTaken));
      navigate("/score");
    }
  };

  return (
    <div style={{ marginTop: "80px", maxWidth: "600px", margin: "auto" }}>
      <h3>Time left: {timer}s</h3>
      <h3>Question {current + 1} of {questions.length}</h3>
      <p>{currentQuestion.question}</p>

      {currentQuestion.options.map((opt, i) => {
        let bgColor = "";
        if (showAnswer) {
          if (opt === currentQuestion.correct) bgColor = "#28a745";
          else if (opt === selected) bgColor = "#dc3545";
        }

        return (
          <button
            key={i}
            onClick={() => handleOptionClick(opt)}
            style={{
              display: 'block',
              width: '100%',
              marginBottom: '10px',
              padding: '12px',
              backgroundColor: bgColor || "#007bff",
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: showAnswer ? 'default' : 'pointer'
            }}
            disabled={showAnswer}
          >
            {opt}
          </button>
        );
      })}

      {showAnswer && (
        <button
          onClick={handleNext}
          style={{
            marginTop: '20px',
            padding: '10px 25px',
            backgroundColor: '#ffc107',
            color: '#333',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Next →
        </button>
      )}
    </div>
  );
}

export default QuizPage;
