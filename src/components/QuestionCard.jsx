// src/components/QuestionCard.jsx

export default function QuestionCard({
  question,
  selected,
  onSelect,
  onNext,
  isLast,
  modoOscuro
}) {
  const bg = modoOscuro ? '#1e1e1e' : 'white';
  const text = modoOscuro ? '#e0e0e0' : '#1a1a1a';
  const border = modoOscuro ? '#444' : '#ddd';
  const selectedBg = modoOscuro ? '#333' : '#e3f2fd';
  const buttonBg = selected !== null ? '#1976d2' : '#ccc';
  const buttonColor = 'white';
  const hoverBg = '#0056b3';

  return (
    <div
      style={{
        backgroundColor: bg,
        padding: '30px',
        borderRadius: '12px',
        boxShadow: modoOscuro
          ? '0 4px 12px rgba(255, 255, 255, 0.05)'
          : '0 4px 12px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        margin: '0 auto 20px auto',
        fontFamily: 'Arial, sans-serif',
        color: text
      }}
    >
      <h2
        style={{
          fontSize: '20px',
          marginBottom: '20px',
          fontWeight: '600',
          color: text
        }}
      >
        {question.question}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
        {question.options.map((option, index) => (
          <label
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px',
              border: `1px solid ${border}`,
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: selected === index ? selectedBg : 'transparent',
              color: text,
              transition: 'background 0.2s ease'
            }}
          >
            <input
              type="radio"
              name="answer"
              checked={selected === index}
              onChange={() => onSelect(index)}
              style={{ marginRight: '10px' }}
            />
            {option}
          </label>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={selected === null}
        style={{
          marginTop: '24px',
          padding: '12px 24px',
          backgroundColor: selected !== null ? '#1976d2' : '#ccc',
          color: buttonColor,
          border: 'none',
          borderRadius: '6px',
          cursor: selected !== null ? 'pointer' : 'not-allowed',
          fontWeight: '500'
        }}
        onMouseOver={(e) => {
          if (selected !== null) e.target.style.backgroundColor = hoverBg;
        }}
        onMouseOut={(e) => {
          if (selected !== null) e.target.style.backgroundColor = '#1976d2';
        }}
      >
        {isLast ? 'Ver resultados' : 'Siguiente pregunta'}
      </button>
    </div>
  );
}
