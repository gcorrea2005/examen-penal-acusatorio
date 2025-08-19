// src/components/Header.jsx

import { useState } from 'react';

export default function Header({ onHome, onCreditos }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#1976d2',
      color: 'white',
      padding: '12px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
    }}>
      {/* Logo / Título */}
      <div style={{
        fontSize: '18px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        📚 Examen Jurídico
      </div>

      {/* Menú para escritorio */}
      <nav style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end'
      }}>
        <button
          onClick={onHome}
          style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '6px 12px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          🏠 Inicio
        </button>
        <button
          onClick={onCreditos}
          style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '6px 12px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          ℹ️ Créditos
        </button>
      </nav>

      {/* Menú hamburguesa para móviles */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'transparent',
          color: 'white',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px'
        }}
      >
        ☰
      </button>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: '#1976d2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          padding: '10px 0',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 999
        }}>
          <button
            onClick={() => {
              onHome();
              setMenuOpen(false);
            }}
            style={{
              background: 'transparent',
              color: 'white',
              border: 'none',
              textAlign: 'left',
              padding: '12px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            🏠 Inicio
          </button>
          <button
            onClick={() => {
              onCreditos();
              setMenuOpen(false);
            }}
            style={{
              background: 'transparent',
              color: 'white',
              border: 'none',
              textAlign: 'left',
              padding: '12px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            ℹ️ Créditos
          </button>
        </div>
      )}
    </header>
  );
}
