import React from 'react';
import SlideLayout from './SlideLayout';

const Slide01Cover = () => {
  return (
    <SlideLayout 
      slideNumber={1} 
      title="Cover/Purpose 🚀" 
      theme="cover"
    >
      <div className="centered-content">
        <div>
          <h1 className="slide-title">REF-U</h1>
          <p className="slide-subtitle">
            The Future of Sports Fan Engagement
          </p>
          <h2 style={{color: 'white', fontSize: '1.5rem', margin: '1rem 0'}}>
            Pre-Seed Funding Presentation
          </h2>
        </div>
        
        <div>
          <div className="highlight-box" style={{fontSize: '1.1rem', margin: '2rem auto', maxWidth: '550px'}}>
            Seeking $1.5M to build MVP and launch Q1 2025 beta
          </div>
          <p style={{fontSize: '1rem', marginTop: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
            Julian R. Geiger, CEO & Founder<br/>
            contact@ref-u.com | ref-u.com
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide01Cover;
