// src/App.jsx

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TopicSelector from './components/TopicSelector.jsx';
import QuestionCard from './components/QuestionCard.jsx';
import ResultSummary from './components/ResultSummary.jsx';
import ProgressTracker from './components/ProgressTracker.jsx';
import Creditos from './components/Creditos.jsx';
import { topics } from './data/questions.js';

// Componente para manejar la navegación
function AppContent() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [modoOscuro, setModoOscuro] = useState(false);
  const navigate = useNavigate();

  // Cargar preferencia del modo oscuro
  useEffect(() => {
    const saved = localStorage.getItem('modoOscuro');
    if (saved !== null) {
      setModoOscuro(saved === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setModoOscuro(prefersDark);
    }
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem('modoOscuro', modoOscuro);
    if (modoOscuro) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [modoOscuro]);

  const toggleModo = () => {
    setModoOscuro(!modoOscuro);
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  const handleExit = () => {
    const confirmExit = window.confirm("¿Estás seguro de que deseas salir de la prueba?\nPerderás tu progreso actual.");
    if (confirmExit) {
      setSelectedTopic(null);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      navigate('/');
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      if (currentQuestionIndex >= newAnswers.length) {
        newAnswers.length = currentQuestionIndex + 1;
      }
      newAnswers[currentQuestionIndex] = answerIndex;
      return newAnswers;
    });
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const jumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  if (!selectedTopic) {
    return (
      <div className={modoOscuro ? 'dark' : 'light'}>
        <button
          onClick={toggleModo}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer'
          }}
        >
          {modoOscuro ? '☀️' : '🌙'}
        </button>
        <TopicSelector onSelectTopic={handleTopicSelect} />
      </div>
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
      <div className={modoOscuro ? 'dark' : 'light'}>
        <button
          onClick={toggleModo}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer'
          }}
        >
          {modoOscuro ? '☀️' : '🌙'}
        </button>

        <button
          onClick={handleExit}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: '#d32f2f',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 16px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          🚪 Salir
        </button>

        <ResultSummary
          results={results}
          questions={questions}
          onRestart={() => setSelectedTopic(null)}
        />
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex] ?? null;
  const answeredStatus = questions.map((_, i) => userAnswers[i] !== undefined);
  const isLast = currentQuestionIndex === questions.length - 1;

  return (
    <div className={modoOscuro ? 'dark' : 'light'}>
      <button
        onClick={toggleModo}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'none',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer'
        }}
      >
        {modoOscuro ? '☀️' : '🌙'}
      </button>

      <button
        onClick={handleExit}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: '#d32f2f',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 16px',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        🚪 Salir
      </button>

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
        modoOscuro={modoOscuro}
      />
    </div>
  );
}

// Componente principal con rutas
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path="/creditos" element={<Creditos />} />
    </Routes>
  );
}
