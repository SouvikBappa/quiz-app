import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      paddingTop: '80px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{ color: '#007bff', fontSize: '2.5rem' }}>Welcome to the React Quiz App!</h1>
        <p style={{ margin: '20px 0', fontSize: '18px', color: '#333' }}>
          Test your knowledge with quick and fun multiple-choice questions. Are you ready to begin?
        </p>
        <Link to="/quiz">
          <button style={{
            marginTop: '20px',
            padding: '12px 30px',
            fontSize: '18px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
