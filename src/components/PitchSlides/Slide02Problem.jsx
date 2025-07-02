import React from 'react';
import SlideLayout from './SlideLayout';

const Slide02Problem = () => {
  return (
    <SlideLayout 
      slideNumber={2} 
      title="The Problem 🔥" 
      theme="problem"
    >
      <h1 className="slide-title">
        Sports fans are frustrated and disconnected
      </h1>
      
      <div className="two-column">
        <div>
          <div className="key-point">
            <h3>78% of sports fans disagree with referee calls</h3>
            <p>But they don't understand the rules behind the calls</p>
          </div>
          
          <div className="key-point">
            <h3>65% of sports discussions focus on controversial calls</h3>
            <p>Fan frustration drives disengagement from traditional sports media</p>
          </div>
        </div>
        
        <div>
          <div className="key-point">
            <h3>Gen Z fans seek interactive experiences</h3>
            <p>Traditional sports media doesn't meet their engagement expectations</p>
          </div>
          
          <div className="key-point">
            <h3>No platform combines education with real-time analysis</h3>
            <p>Fans want to learn, not just argue about referee decisions</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Problem;
