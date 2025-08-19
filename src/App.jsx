// src/App.jsx

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import TopicSelector from './components/TopicSelector.jsx';
import QuestionCard from './components/QuestionCard.jsx';
import ResultSummary from './components/ResultSummary.jsx';
import ProgressTracker from './components/ProgressTracker.jsx';
import Creditos from './components/Creditos.jsx';
import { topics } from './data/questions.js';

function AppContent() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [modoOscuro, setModoOscuro] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('modoOscuro');
    if (saved !== null) {
      setModoOscuro(saved === 'true');
    } else {
      setModoOscuro(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('modoOscuro', modoOscuro);
    if (modoOscuro) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [modoOscuro]);

  const handleExit = () => {
    if (window.confirm("¿Estás seguro de que deseas salir de la prueba?\nPerderás tu progreso actual.")) {
      setSelectedTopic(null);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      navigate('/');
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      if (currentQuestionIndex >= newAnswers.length) newAnswers.length = currentQuestionIndex + 1;
      newAnswers[currentQuestionIndex] = answerIndex;
      return newAnswers;
    });
  };

  const goToNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const jumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  if (!selectedTopic) {
    return (
      <>
        <Header onHome={() => navigate('/')} onCreditos={() => navigate('/creditos')} />
        <div style={{ marginTop: '80px' }}>
          <TopicSelector onSelectTopic={setSelectedTopic} />
        </div>
      </>
    );
  }

  const questions = topics[selectedTopic];

  if (currentQuestionIndex >= questions.length) {
    const results = questions.map((q, i) => ({
      correct: userAnswers[i] === q.correct,
      userAnswer: userAnswers[i],
      correctAnswer: q.correct
    }));

    return (
      <>
        <Header onHome={() => navigate('/')} onCreditos={() => navigate('/creditos')} />
        <div style={{ marginTop: '80px', minHeight: 'calc(100vh - 180px)', padding: '20px' }}>
          <ResultSummary results={results} questions={questions} onRestart={() => setSelectedTopic(null)} />
        </div>
        <div style={exitButtonContainerStyle}>
          <button onClick={handleExit} style={exitButtonStyle}>🚪 Salir de la prueba</button>
        </div>
      </>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex] ?? null;
  const answeredStatus = questions.map((_, i) => userAnswers[i] !== undefined);
  const isLast = currentQuestionIndex === questions.length - 1;

  return (
    <>
      <Header onHome={() => navigate('/')} onCreditos={() => navigate('/creditos')} />
      <div style={{ marginTop: '80px', minHeight: 'calc(100vh - 180px)', padding: '20px' }}>
        <ProgressTracker
          current={currentQuestionIndex}
          total={questions.length}
          onPrevious={goToPrevious}
          onNext={goToNext}
          onJump={jumpToQuestion}
          answered={answeredStatus}
        />
        <QuestionCard
          question={currentQuestion}
          selected={selectedAnswer}
          onSelect={handleAnswerSelect}
          onNext={goToNext}
          isLast={isLast}
        />
      </div>
      <div style={exitButtonContainerStyle}>
        <button onClick={handleExit} style={exitButtonStyle}>🚪 Salir de la prueba</button>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path="/creditos" element={<Creditos />} />
    </Routes>
  );
}

const exitButtonContainerStyle = {
  padding: '20px',
  textAlign: 'center',
  borderTop: '1px solid #ddd',
  backgroundColor: '#f8f9fa'
};

const exitButtonStyle = {
  background: '#d32f2f',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  width: '100%',
  maxWidth: '300px'
};