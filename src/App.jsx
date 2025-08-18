// src/App.jsx

import { useState, useEffect } from 'react';
import TopicSelector from './components/TopicSelector.jsx';
import QuestionCard from './components/QuestionCard.jsx';
import ResultSummary from './components/ResultSummary.jsx';
import ProgressTracker from './components/ProgressTracker.jsx';
import { topics } from './data/questions.js';

function calculateResults(userAnswers, questions) {
  return questions.map((q, index) => ({
    correct: userAnswers[index] === q.correct,
    userAnswer: userAnswers[index],
    correctAnswer: q.correct
  }));
}

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [modoOscuro, setModoOscuro] = useState(false);

  // Cargar preferencia del usuario desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem('modoOscuro');
    if (saved !== null) {
      setModoOscuro(saved === 'true');
    } else {
      // Detectar preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setModoOscuro(prefersDark);
    }
  }, []);

  // Guardar en localStorage cuando cambia
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
            cursor: 'pointer',
            zIndex: 100
          }}
          aria-label={modoOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {modoOscuro ? '☀️' : '🌙'}
        </button>
        <TopicSelector onSelectTopic={handleTopicSelect} modoOscuro={modoOscuro} />
      </div>
    );
  }

  const questions = topics[selectedTopic];

  if (currentQuestionIndex >= questions.length) {
    const results = calculateResults(userAnswers, questions);
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
            cursor: 'pointer',
            zIndex: 100
          }}
        >
          {modoOscuro ? '☀️' : '🌙'}
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

    const handleAnswerSelect = (answerIndex) => {
  setUserAnswers(prev => {
    const newAnswers = [...prev];
    // Asegura que el array tenga el tamaño necesario
    if (newAnswers.length <= currentQuestionIndex) {
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
          cursor: 'pointer',
          zIndex: 100
        }}
      >
        {modoOscuro ? '☀️' : '🌙'}
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
        isLast={currentQuestionIndex === questions.length - 1}
        modoOscuro={modoOscuro}
      />
    </div>
  );
}
