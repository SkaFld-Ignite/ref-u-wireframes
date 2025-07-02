import React from 'react';
import SlideLayout from './SlideLayout';

const Slide04WhyNow = () => {
  return (
    <SlideLayout 
      slideNumber={4} 
      title="Why Now? ⏰" 
      theme="default"
    >
      <h1 className="slide-title">
        Perfect timing for sports fan engagement revolution
      </h1>
      
      <div style={{textAlign: 'center', margin: '1.5rem 0'}}>
        <div className="big-number">73%</div>
        <p style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '2rem', color: '#1a202c'}}>
          of sports fans now consume content on mobile devices
        </p>
      </div>
      
      <div className="two-column">
        <div>
          <div className="key-point">
            <h3>🎮 Gamification is Mainstream</h3>
            <p>
              Duolingo (500M+ users) and fitness apps have proven interactive learning works
            </p>
          </div>
          
          <div className="key-point">
            <h3>📚 Educational Content Demand</h3>
            <p>
              YouTube sports content generates 2B+ views monthly
            </p>
          </div>
        </div>
        
        <div>
          <div className="key-point">
            <h3>👶 Gen Z Sports Engagement</h3>
            <p>
              Traditional TV viewership down 15%, but digital sports engagement up 45%
            </p>
          </div>
          
          <div className="key-point">
            <h3>🤖 Real-Time Technology</h3>
            <p>
              Advanced APIs and AI now make instant sports analysis technically feasible
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide04WhyNow;
