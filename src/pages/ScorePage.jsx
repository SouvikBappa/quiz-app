import { useEffect, useState } from "react";

function ScorePage() {
  const [player, setPlayer] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem("playerInfo"));
    const s = Number(localStorage.getItem("quizScore") || 0);
    const quizId = localStorage.getItem("quizId"); // ✅ unique quiz ID
    const timeArr = JSON.parse(localStorage.getItem("quizTime")) || [];
    const totalTime = timeArr.reduce((a, b) => a + b, 0).toFixed(1);

    setPlayer(p || {});
    setScore(s);

    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    
    const alreadyExists = leaderboard.some(entry => entry.id === quizId);

    if (p?.name && !alreadyExists) {
      leaderboard.push({
        id: quizId,
        name: p.name,
        score: s,
        time: Number(totalTime)
      });

      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    }
  }, []);

  const getMessage = () => {
    if (score === 10) return "🎯 Perfect! You nailed it!";
    if (score >= 8) return "🔥 Excellent!";
    if (score >= 5) return "👍 Good job!";
    if (score >= 3) return "💡 Not bad! You're learning!";
    return "📚 Practice makes perfect!";
  };

  return (
    <div style={{ paddingTop: "80px", textAlign: "center" }}>
      <h2>Well done, {player.name || "Player"}!</h2>
      <p>You scored <strong>{score}</strong> out of 10.</p>
      <h3 style={{ marginTop: "20px", color: "#007bff" }}>{getMessage()}</h3>
    </div>
  );
}

export default ScorePage;
