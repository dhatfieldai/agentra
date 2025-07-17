'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Handle ChunkLoadError specifically
    if (error.name === 'ChunkLoadError') {
      console.log('Detected ChunkLoadError, attempting to reload...');
      // Attempt to reload the page after a brief delay
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--background)' }}>
          <div className="text-center space-y-4 max-w-md mx-auto px-4">
            <h1 className="text-heading-1 text-white">Something went wrong</h1>
            <p className="text-body" style={{ color: '#cbd5e1' }}>
              We encountered an issue loading the page. Please try refreshing.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 text-white text-body font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
