import React from 'react';
import SlideLayout from './SlideLayout';

const Slide07Team = () => {
  return (
    <SlideLayout 
      slideNumber={7} 
      title="The Team 👥" 
      theme="team"
    >
      <h1 className="slide-title">
        Experienced leadership with proven track record
      </h1>
      
      <div className="two-column">
        <div>
          <div className="team-section">
            <h3>👑 Chief Executive Officer</h3>
            <h4>Julian R. Geiger - CEO</h4>
            <div className="team-highlights">
              <p>• Former CEO of Aeropostale ($3B+ retail empire)</p>
              <p>• 30+ years retail & consumer brand experience</p>
              <p>• Columbia MBA, proven leader in consumer engagement</p>
            </div>
          </div>
          
          <div className="team-section">
            <h3>🧠 Advisory Board</h3>
            <div className="team-highlights">
              <p>• <strong>Former ESPN Executive</strong> - Content strategy</p>
              <p>• <strong>Ex-NBA Referee</strong> - Rules expertise</p>
              <p>• <strong>Tech Industry Veteran</strong> - Scaling guidance</p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="team-section">
            <h3>⚡ Chief Technology Officer</h3>
            <h4>Charles Sims, CTO</h4>
            <div className="team-highlights">
              <p>• Former CTO of LA Clippers and United Talent Agency</p>
              <p>• Executed over $1.5B in M&A transactions across media & sports</p>
              <p>• Deep expertise in building scalable, real-time sports and media platforms</p>
            </div>
          </div>
          
          <div className="team-section">
            <h3>🎯 Why We'll Win</h3>
            <div className="team-highlights">
              <p>✅ <strong>Retail & consumer brand mastery</strong></p>
              <p>✅ <strong>Technical scalability & innovation</strong></p>
              <p>✅ <strong>Sports industry insider connections</strong></p>
              <p>✅ <strong>Proven execution track record</strong></p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bottom-highlight">
        <div className="highlight-box">
          This team combines retail excellence with cutting-edge technology
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide07Team;
