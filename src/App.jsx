import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import ScorePage from './pages/ScorePage';
import About from './pages/About';
import StartForm from './pages/StartForm';         
import Leaderboard from './pages/Leaderboard'; 

function App() {
return (
<>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/start" element={<StartForm />} /> 
<Route path="/quiz" element={<QuizPage />} />
<Route path="/score" element={<ScorePage />} />
<Route path="/leaderboard" element={<Leaderboard />} />
<Route path="/about" element={<About />} />
<Route path="*" element={<h2 style={{ paddingTop: '100px', textAlign: 'center' }}>404 - Page Not Found</h2>} />
</Routes>
</>
);
}

export default App;

