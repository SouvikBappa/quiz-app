import { useEffect, useState } from "react";

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    const sorted = leaderboard.sort((a, b) =>
      b.score !== a.score ? b.score - a.score : a.time - b.time
    );

    setScores(sorted);
  }, []);

  return (
    <div style={{ paddingTop: "80px", textAlign: "center" }}>
      <h2>🏆 Leaderboard</h2>
      <table style={{ margin: "auto", borderCollapse: "collapse", width: "70%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Total Time (s)</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.score}</td>
              <td>{s.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to clear the leaderboard?")) {
            localStorage.removeItem("leaderboard");
            window.location.reload();
          }
        }}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        🧹 Clear Leaderboard
      </button>
    </div>
  );
}

export default Leaderboard;
