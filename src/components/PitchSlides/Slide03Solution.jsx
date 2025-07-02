import React from 'react';
import SlideLayout from './SlideLayout';

const Slide03Solution = () => {
  return (
    <SlideLayout 
      slideNumber={3} 
      title="Our Solution 💡" 
      theme="solution"
    >
      <h1 className="slide-title">
        The first platform combining real-time referee analysis with educational content
      </h1>
      
      <div className="two-column">
        <div>
          <div className="key-point">
            <h3>🏀 Live Game Integration</h3>
            <p>Real-time referee call analysis during live games</p>
          </div>
          
          <div className="key-point">
            <h3>📚 Educational Platform</h3>
            <p>Learn rules through interactive gameplay and expert explanations</p>
          </div>
          
          <div className="key-point">
            <h3>👥 Community Learning</h3>
            <p>Moderated discussions focused on understanding, not arguing</p>
          </div>
        </div>
        
        <div>
          <div className="key-point">
            <h3>🎮 Gamification System</h3>
            <p>XP, levels, and rewards for learning and participation</p>
          </div>
          
          <div className="key-point">
            <h3>📱 Mobile-First Design</h3>
            <p>Built for the next generation of sports fans</p>
          </div>
          
          <div className="key-point">
            <h3>💰 Multiple Revenue Streams</h3>
            <p>Premium features, merchandise, creator tools</p>
          </div>
        </div>
      </div>
      
      <div className="bottom-highlight">
        <div className="highlight-box">
          Turn fan frustration into fan education and engagement
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide03Solution;
