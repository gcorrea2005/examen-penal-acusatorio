export default function ProgressTracker({
  current,
  total,
  onPrevious,
  onNext,
  onJump,
  answered
}) {
  const isLast = current === total - 1;
  const isFirst = current === 0;
  const answeredArray = answered || Array(total).fill(false);

  return (
    <div style={{
      maxWidth: '700px',
      margin: '20px auto',
      fontFamily: 'Arial, sans-serif',
      padding: '0 16px'
    }}>
      {/* Barra de progreso */}
      <div style={{
        width: '100%',
        height: '8px',
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        overflow: 'hidden',
        marginBottom: '16px'
      }}>
        <div style={{
          width: `${((current + 1) / total) * 100}%`,
          height: '100%',
          backgroundColor: '#1976d2',
          transition: 'width 0.3s ease'
        }}></div>
      </div>

      {/* Contador */}
      <div style={{
        textAlign: 'center',
        fontSize: '14px',
        color: '#555',
        marginBottom: '16px'
      }}>
        Pregunta {current + 1} de {total}
      </div>

      {/* Botones de navegación */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px'
      }}>
        <button
          onClick={onPrevious}
          disabled={isFirst}
          style={{
            padding: '8px 16px',
            backgroundColor: isFirst ? '#ccc' : '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: isFirst ? 'not-allowed' : 'pointer'
          }}
        >
          ← Anterior
        </button>

        <button
          onClick={onNext}
          disabled={isLast}
          style={{
            padding: '8px 16px',
            backgroundColor: isLast ? '#ccc' : '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: isLast ? 'not-allowed' : 'pointer'
          }}
        >
          Siguiente →
        </button>
      </div>

      {/* Mini botones de salto */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '20px'
      }}>
        {Array.from({ length: total }, (_, i) => {
          const isAnswered = answeredArray[i];
          return (
            <button
              key={i}
              onClick={() => onJump(i)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid #1976d2',
                backgroundColor: i === current
                  ? '#1976d2'
                  : isAnswered
                  ? '#4caf50'
                  : '#fff',
                color: i === current || isAnswered ? 'white' : '#1976d2',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
