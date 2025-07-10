import React from 'react';
import SlideLayout from './SlideLayout';

const Slide08Investment = () => {
  return (
    <SlideLayout 
      slideNumber={8} 
      title="Investment Opportunity 💰" 
      theme="cover"
    >
      <div className="centered-content">
        <div>
          <h1 className="slide-title">Investment Opportunity</h1>
          
          <div className="big-number" style={{color: 'white', fontSize: '4rem'}}>
            $1.5M
          </div>
          
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)'}}>
            Pre-Seed Round | $15M Pre-Money Valuation
          </p>
        </div>
        
        <div className="two-column" style={{textAlign: 'left', color: 'white'}}>
          <div>
            <h3 style={{color: 'white', fontSize: '1.1rem', marginBottom: '1rem'}}>🎯 Use of Funds</h3>
            <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>
              • 50% Product Development & Engineering<br/>
              • 25% Beta Launch & User Acquisition<br/>
              • 15% Content & Partnerships<br/>
              • 10% Operations & Legal
            </p>
          </div>
          
          <div>
            <h3 style={{color: 'white', fontSize: '1.1rem', marginBottom: '1rem'}}>📊 Investor Returns</h3>
            <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>
              • 10x return in 5 years<br/>
              • Exit Potential: $50M-500M acquisition<br/>
              • Comparable exits: DraftKings $3.3B, Discord $15B
            </p>
          </div>
        </div>
        
        <div>
          <div style={{marginTop: '2rem', fontSize: '1.1rem'}}>
            <strong>Let's build the future of sports fan engagement together</strong>
          </div>
          
          <p style={{marginTop: '1rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)'}}>
            contact@ref-u.com | (555) 123-4567
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide08Investment;
