// src/components/Creditos.jsx

import { Link } from 'react-router-dom';

export default function Creditos() {
  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '50px 20px',
      fontFamily: 'Georgia, serif',
      color: '#212529',
      lineHeight: '1.8',
      maxWidth: '1000px',
      margin: '0 auto',
      borderRadius: '14px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
      backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(25, 118, 210, 0.08), transparent 30%), radial-gradient(circle at 80% 70%, rgba(25, 118, 210, 0.06), transparent 30%)'
    }}>
      {/* Encabezado */}
      <header style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{
          fontSize: '36px',
          color: '#1976d2',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}>
          📜 Créditos Académicos y Reconocimientos
        </h1>
        <p style={{
          fontSize: '18px',
          fontStyle: 'italic',
          color: '#444',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Un homenaje al conocimiento, la excelencia y el servicio público
        </p>
      </header>

      {/* Sección 1: Autoras del Temario */}
      <section>
        <h2 style={{
          fontSize: '24px',
          color: '#1976d2',
          borderBottom: '2px solid #1976d2',
          paddingBottom: '8px',
          marginTop: '40px',
          fontWeight: 'bold'
        }}>
          🏛️ Autoras del Temario: Maestras del Derecho Procesal
        </h2>
        <p>
          Este temario fue concebido y desarrollado con rigor jurídico, pedagogía innovadora y profundo compromiso ético por dos de las juristas más influyentes en la formación del nuevo sistema de justicia colombiano:
        </p>

        <div style={{
          backgroundColor: '#e3f2fd',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '20px',
          borderLeft: '5px solid #1976d2'
        }}>
          <h3 style={{
            margin: '0 0 10px 0',
            color: '#0d47a1',
            fontSize: '20px'
          }}>
            <strong>Dra. Leidy Rondón</strong>
          </h3>
          <p style={{ margin: '10px 0' }}>
            Abogada de formación rigurosa, especialista en Derecho Procesal Penal y Derecho Constitucional. Con más de 15 años de experiencia en la formación de funcionarios judiciales, ha sido asesora técnica en la implementación del Sistema Penal Acusatorio en múltiples regiones del país. Su enfoque pedagógico se caracteriza por la claridad, la sistematización del conocimiento y el énfasis en la aplicación práctica de los principios procesales.
          </p>
          <p style={{ margin: '10px 0', fontSize: '14px', color: '#555' }}>
            <em>"La justicia no se construye solo con leyes, sino con personas bien formadas, éticas y comprometidas con la verdad."</em>
          </p>
        </div>

        <div style={{
          backgroundColor: '#e3f2fd',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '20px',
          borderLeft: '5px solid #1976d2'
        }}>
          <h3 style={{
            margin: '0 0 10px 0',
            color: '#0d47a1',
            fontSize: '20px'
          }}>
            <strong>Dra. Yolanda Ordóñez</strong>
          </h3>
          <p style={{ margin: '10px 0' }}>
            Docente universitaria, magistrada auxiliar y formadora de alto impacto en procesos de selección para la Fiscalía General de la Nación. Su labor ha sido clave en la preparación de miles de aspirantes a cargos judiciales, destacándose por su capacidad para sintetizar normas complejas, integrar jurisprudencia actualizada y diseñar estrategias de estudio efectivas. Es reconocida por su enfoque humanista del derecho y su defensa de la dignidad del proceso.
          </p>
          <p style={{ margin: '10px 0', fontSize: '14px', color: '#555' }}>
            <em>"El verdadero poder del Estado no está en sus sanciones, sino en su capacidad para garantizar derechos con justicia y transparencia."</em>
          </p>
        </div>

        <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
          Su colaboración intelectual ha dado vida a un material que trasciende el simple repaso de contenidos: es una <strong>guía de transformación del sistema de justicia</strong>.
        </p>
      </section>

      {/* Sección 2: Propósito y Alcance */}
      <section>
        <h2 style={{
          fontSize: '24px',
          color: '#1976d2',
          borderBottom: '2px solid #1976d2',
          paddingBottom: '8px',
          marginTop: '50px',
          fontWeight: 'bold'
        }}>
          🎯 Propósito, Alcance y Fundamentación Jurídica
        </h2>
        <p>
          Este material académico no es un documento oficial, sino una <strong>herramienta de apoyo pedagógico</strong> diseñada para:
        </p>
        <ul style={{
          marginLeft: '20px',
          marginTop: '10px'
        }}>
          <li><strong>Preparar aspirantes</strong> a pruebas de mérito en la <strong>Fiscalía General de la Nación</strong>.</li>
          <li><strong>Fortalecer la formación continua</strong> de servidores públicos del sistema de justicia.</li>
          <li><strong>Democratizar el acceso al conocimiento</strong> sobre el Sistema Penal Acusatorio.</li>
          <li><strong>Promover la excelencia técnica y ética</strong> en la función pública.</li>
        </ul>

        <p style={{ marginTop: '15px' }}>
          Está fundamentado en:
        </p>
        <ul style={{
          marginLeft: '20px',
          marginTop: '10px'
        }}>
          <li>La <strong>Constitución Política de Colombia</strong> (1991)</li>
          <li>La <strong>Ley 906 de 2004</strong> (Código de Procedimiento Penal)</li>
          <li>La <strong>Ley 909 de 2004</strong> (Carrera Administrativa)</li>
          <li>La <strong>Ley 1437 de 2011</strong> (Código de Procedimiento Administrativo)</li>
          <li>Jurisprudencia de la <strong>Corte Constitucional</strong> y la <strong>Corte Suprema de Justicia</strong></li>
          <li>Tratados internacionales de derechos humanos</li>
        </ul>
      </section>

      {/* Sección 3: Diseño Pedagógico */}
      <section>
        <h2 style={{
          fontSize: '24px',
          color: '#1976d2',
          borderBottom: '2px solid #1976d2',
          paddingBottom: '8px',
          marginTop: '50px',
          fontWeight: 'bold'
        }}>
          🧠 Diseño Pedagógico y Metodología de Aprendizaje
        </h2>
        <p>
          El temario se estructura bajo un modelo de <strong>aprendizaje activo y significativo</strong>, basado en:
        </p>
        <ul style={{
          marginLeft: '20px',
          marginTop: '10px'
        }}>
          <li><strong>Preguntas tipo test</strong> con retroalimentación inmediata y explicaciones jurídicas detalladas.</li>
          <li><strong>Progresión lógica</strong>: desde principios constitucionales hasta la aplicación práctica en el juicio oral.</li>
          <li><strong>Enfoque por competencias</strong>: no solo memorización, sino comprensión, análisis y aplicación.</li>
          <li><strong>Escenarios reales</strong>: casos prácticos basados en la experiencia judicial colombiana.</li>
        </ul>
        <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
          Cada pregunta no solo evalúa, sino <strong>enseña</strong>.
        </p>
      </section>

      {/* Sección 4: Tecnología y Accesibilidad */}
      <section>
        <h2 style={{
          fontSize: '24px',
          color: '#1976d2',
          borderBottom: '2px solid #1976d2',
          paddingBottom: '8px',
          marginTop: '50px',
          fontWeight: 'bold'
        }}>
          🛠️ Tecnología y Accesibilidad
        </h2>
        <p>
          Esta aplicación fue desarrollada con tecnologías modernas de desarrollo web para garantizar:
        </p>
        <ul style={{
          marginLeft: '20px',
          marginTop: '10px'
        }}>
          <li><strong>Accesibilidad total</strong>: funciona en cualquier dispositivo (móvil, tablet, computador).</li>
          <li><strong>Modo offline</strong>: como <strong>PWA (Progressive Web App)</strong>, puedes usarla sin internet.</li>
          <li><strong>Interfaz intuitiva</strong>: diseño limpio, responsive y fácil de navegar.</li>
          <li><strong>Personalización</strong>: modo oscuro, progreso guardado, revisión de respuestas.</li>
        </ul>
        <p style={{ marginTop: '15px' }}>
          Es un ejemplo de cómo la <strong>tecnología al servicio de la justicia</strong> puede transformar la formación jurídica.
        </p>
      </section>

      {/* Sección 5: Uso y Licencia */}
      <section>
        <h2 style={{
          fontSize: '24px',
          color: '#1976d2',
          borderBottom: '2px solid #1976d2',
          paddingBottom: '8px',
          marginTop: '50px',
          fontWeight: 'bold'
        }}>
          📢 Uso, Licencia y Ética Académica
        </h2>
        <p>
          Este material se distribuye bajo una <strong>licencia académica abierta</strong>:
        </p>
        <ul style={{
          marginLeft: '20px',
          marginTop: '10px'
        }}>
          <li>✅ <strong>Uso libre y gratuito</strong> para estudio personal y formación institucional.</li>
          <li>✅ <strong>Reproducción permitida</strong> siempre que se cite a las autoras.</li>
          <li>❌ <strong>No comercial</strong>: prohibido su uso con fines lucrativos.</li>
          <li>❌ <strong>No oficial</strong>: no representa la posición de ninguna institución estatal.</li>
        </ul>
        <p style={{ marginTop: '15px' }}>
          Promovemos una cultura de <strong>ética académica</strong>, donde el conocimiento se comparte, se respeta y se usa para servir mejor.
        </p>
      </section>

      {/* Sección 6: Invitación al Servicio Público */}
      <section>
        <h2 style={{
          fontSize: '24px',
          color: '#1976d2',
          borderBottom: '2px solid #1976d2',
          paddingBottom: '8px',
          marginTop: '50px',
          fontWeight: 'bold'
        }}>
          🌟 Una Invitación al Servicio Público
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: '18px',
          fontStyle: 'italic',
          color: '#333',
          padding: '20px',
          backgroundColor: '#fff8e1',
          borderRadius: '8px',
          border: '1px solid #ffd54f'
        }}>
          "El servicio público no es un privilegio, sino una responsabilidad.<br/>
          No es un cargo, sino una vocación.<br/>
          No es poder, sino servicio."<br/>
          <strong>— Dras. Leidy Rondón y Yolanda Ordóñez</strong>
        </p>
        <p style={{ marginTop: '20px' }}>
          Este temario no solo busca que apruebes una prueba. Busca que te conviertas en un <strong>funcionario íntegro, competente y humano</strong>, capaz de transformar la justicia desde dentro.
        </p>
      </section>

      {/* Botón de regreso */}
      <div style={{
        marginTop: '60px',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
        paddingTop: '30px',
        color: '#666'
      }}>
        <p>© {new Date().getFullYear()} – Aplicación de Evaluación Jurídica</p>
        <p>Desarrollada con base en el temario de las Dras. Leidy Rondón y Yolanda Ordóñez</p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            marginTop: '15px',
            padding: '12px 24px',
            backgroundColor: '#1976d2',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 3px 10px rgba(25, 118, 210, 0.3)',
            transition: 'all 0.2s'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#0d47a1'}
          onMouseOut={e => e.target.style.backgroundColor = '#1976d2'}
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}