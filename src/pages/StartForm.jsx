import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions"; // Optional if you randomize questions

function StartForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("General Knowledge");
  const [difficulty, setDifficulty] = useState("Easy");
  const navigate = useNavigate();

  const handleStart = () => {
    const player = { name, category, difficulty };

    // ✅ Save player info
    localStorage.setItem("playerInfo", JSON.stringify(player));

    // ✅ Clear previous leaderboard flag to allow new score saving
    localStorage.removeItem("leaderboardSaved");

    // (Optional) Shuffle questions and save to localStorage if using random order
    // localStorage.setItem("quizQuestions", JSON.stringify(shuffleQuestions(questions)));

    // ✅ Navigate to quiz
    navigate("/quiz");
  };

  return (
    <div style={{ paddingTop: "80px", textAlign: "center" }}>
      <h2>Start Quiz</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", margin: "10px", fontSize: "16px" }}
      />
      <br />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      >
        <option>General Knowledge</option>
        <option>Science</option>
        <option>Geography</option>
      </select>
      <br />
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <br />
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}

export default StartForm;
