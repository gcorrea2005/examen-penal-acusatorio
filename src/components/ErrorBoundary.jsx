// src/components/ErrorBoundary.jsx

import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error capturado por ErrorBoundary:', error);
    console.error('Información del error:', errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          margin: '40px',
          border: '2px solid #ff4d4d',
          borderRadius: '8px',
          backgroundColor: '#fff0f0',
          fontFamily: 'Arial, sans-serif',
          color: '#d32f2f'
        }}>
          <h2>💥 Se produjo un error</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
              Haga clic para ver detalles del error
            </summary>
            <p><strong>Error:</strong> {this.state.error?.toString()}</p>
            <p><strong>Component Stack:</strong></p>
            <code>{this.state.errorInfo?.componentStack}</code>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
