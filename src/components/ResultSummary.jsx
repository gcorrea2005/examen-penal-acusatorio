// src/components/ResultSummary.jsx

export default function ResultSummary({ results, questions, onRestart }) {
  const total = results.length;
  const correct = results.filter((r) => r.correct).length;

  return (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.05)',
        maxWidth: '700px',
        margin: '40px auto',
        fontFamily: 'Arial, sans-serif',
        color: '#e0e0e0'
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '28px',
          marginBottom: '10px'
        }}
      >
        🎉 ¡Examen completado!
      </h1>

      <p
        style={{
          textAlign: 'center',
          fontSize: '18px',
          marginBottom: '30px'
        }}
      >
        <strong>Aciertos:</strong> {correct} / {total}
      </p>

      <div
        style={{
          width: '100%',
          height: '10px',
          backgroundColor: '#333',
          borderRadius: '5px',
          overflow: 'hidden',
          marginBottom: '30px'
        }}
      >
        <div
          style={{
            width: `${(correct / total) * 100}%`,
            height: '100%',
            backgroundColor: correct / total > 0.7 ? '#4caf50' : '#ff9800',
            transition: 'width 0.8s ease'
          }}
        ></div>
      </div>

      <div
        style={{
          maxHeight: '500px',
          overflowY: 'auto',
          border: '1px solid #444',
          borderRadius: '8px',
          padding: '10px'
        }}
      >
        {results.map((result, index) => {
          const question = questions[index];
          const isCorrect = result.correct;

          return (
            <div
              key={index}
              style={{
                marginBottom: '20px',
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: isCorrect ? '#004d00' : '#4d0000',
                border: `1px solid ${isCorrect ? '#4caf50' : '#ef9a9a'}`
              }}
            >
              <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
                {index + 1}. {question.question}
              </h3>

              <p
                style={{
                  fontWeight: 'bold',
                  color: isCorrect ? '#81c784' : '#e57373',
                  margin: '5px 0'
                }}
              >
                {isCorrect ? '✅ Correcto' : '❌ Incorrecto'}
              </p>

              {!isCorrect && (
                <div
                  style={{
                    marginTop: '10px',
                    padding: '10px',
                    backgroundColor: '#332300',
                    borderLeft: '4px solid #ffa726',
                    fontSize: '14px'
                  }}
                >
                  <strong>Explicación:</strong> {question.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={onRestart}
        style={{
          marginTop: '30px',
          padding: '12px 24px',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        🔄 Volver a empezar
      </button>
    </div>
  );
}
