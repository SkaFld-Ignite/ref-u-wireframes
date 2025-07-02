import React from 'react';
import SlideLayout from './SlideLayout';

const Slide06Financials = () => {
  return (
    <SlideLayout 
      slideNumber={6} 
      title="Financial Projections 📈" 
      theme="default"
    >
      <h1 className="slide-title">
        Path to $10M ARR by Month 36
      </h1>
      
      <div className="four-column">
        <div className="metric-card">
          <h3 style={{color: '#64748b'}}>Today</h3>
          <div className="metric-value" style={{color: '#64748b'}}>
            Pre-Beta
          </div>
          <p>MVP 85% Done</p>
        </div>
        
        <div className="metric-card">
          <h3 style={{color: '#059669'}}>Month 12</h3>
          <div className="metric-value" style={{color: '#059669'}}>
            $250K
          </div>
          <p>Beta Launch Q4 2025</p>
        </div>
        
        <div className="metric-card">
          <h3 style={{color: '#2563EB'}}>Month 24</h3>
          <div className="metric-value" style={{color: '#2563EB'}}>
            $3.2M
          </div>
          <p>Total Breakeven</p>
        </div>
        
        <div className="metric-card">
          <h3 style={{color: '#7c3aed'}}>Month 36</h3>
          <div className="metric-value" style={{color: '#7c3aed'}}>
            $10M
          </div>
          <p>Scale & Series A</p>
        </div>
      </div>
      
      <div className="two-column">
        <div className="key-point">
          <h3>💰 Revenue Model</h3>
          <p>
            • 12% premium conversion rate (industry benchmark)<br/>
            • $119 annual LTV per user<br/>
            • 27% annual churn rate<br/>
            • 6.8% e-commerce conversion rate
          </p>
        </div>
        
        <div className="key-point">
          <h3>🔥 Key Milestones</h3>
          <p>
            • Beta Launch: Q4 2025 (Month 12)<br/>
            • Monthly Breakeven: Month 18<br/>
            • Total Breakeven: Month 24<br/>
            • Series A ready: Month 24-30
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide06Financials;
