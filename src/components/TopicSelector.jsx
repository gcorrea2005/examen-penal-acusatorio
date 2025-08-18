// src/components/TopicSelector.jsx

export default function TopicSelector({ onSelectTopic }) {
  // Temas ordenados de forma pedagógica y temática
  const topicNames = {
    fundamentos: "🧠 Fundamentos del Sistema Penal",
    constitucional: "📜 Constitucional",
    actores_penales: "👥 Actores del Proceso Penal",
    investigacion_pruebas: "🔍 Investigación y Pruebas",
    audiencias_etapas: "🎤 Audiencias y Etapas del Proceso",
    procedimiento_penal: "📘 Procedimiento Penal",
    penal_acusatorio: "⚖️ Penal Acusatorio",
    resultados_sistema: "📊 Resultados del Sistema",
    competencia_administrativa_01: "🏛️ Competencia Administrativa"
  };

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '40px 20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: '800px',
      margin: '60px auto',
      fontFamily: 'Arial, sans-serif',
      color: '#1a1a1a',
      textAlign: 'center'
    }}>
      {/* Título principal */}
      <h2 style={{
        fontSize: '26px',
        marginBottom: '16px',
        fontWeight: '600'
      }}>
        📚 Elige un tema para comenzar
      </h2>

      <p style={{
        color: '#555',
        marginBottom: '30px',
        fontSize: '16px'
      }}>
        Selecciona un área para iniciar tu evaluación jurídica
      </p>

      {/* Grid de temas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        {Object.keys(topicNames).map((key) => (
          <button
            key={key}
            onClick={() => onSelectTopic(key)}
            style={{
              padding: '16px 20px',
              fontSize: '15px',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background 0.2s ease, transform 0.1s ease',
              textAlign: 'center',
              lineHeight: '1.4'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#0056b3';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#1976d2';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {topicNames[key]}
          </button>
        ))}
      </div>

      {/* Botón de créditos */}
      <button
        onClick={() => window.location.href = '/creditos'}
        style={{
          marginTop: '30px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        ℹ️ Acerca del temario
      </button>

      {/* Mensaje opcional */}
      <p style={{
        marginTop: '20px',
        fontSize: '14px',
        color: '#666',
        fontStyle: 'italic'
      }}>
        Material académico basado en el temario de las Dras. Leidy Rondón y Yolanda Ordóñez
      </p>
    </div>
  );
}