"use client";

import React from "react";

const AboutHeading: React.FC = () => {
  const headingStyle: React.CSSProperties = {
    fontSize: '2.25rem',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    color: '#ffffff',
    background: 'transparent',
    backgroundImage: 'none',
    WebkitBackgroundClip: 'initial',
    backgroundClip: 'initial',
    WebkitTextFillColor: '#ffffff',
    marginBottom: '2rem',
    textAlign: 'center',
    fontFamily: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    display: 'block',
    width: '100%'
  };

  return (
    <h1 style={headingStyle}>
      About AURORA9
    </h1>
  );
};

export default AboutHeading;
