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
        Conservative path to $1.2M ARR in 36 months
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
            $17K
          </div>
          <p>1K Beta Users</p>
        </div>
        
        <div className="metric-card">
          <h3 style={{color: '#2563EB'}}>Month 24</h3>
          <div className="metric-value" style={{color: '#2563EB'}}>
            $300K
          </div>
          <p>25K Active Users</p>
        </div>
        
        <div className="metric-card">
          <h3 style={{color: '#7c3aed'}}>Month 36</h3>
          <div className="metric-value" style={{color: '#7c3aed'}}>
            $1.2M
          </div>
          <p>100K Active Users</p>
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
            • Beta Launch: Q1 2025<br/>
            • Product-market fit: Month 18<br/>
            • Break-even: Month 30<br/>
            • Series A ready: Month 24-30
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide06Financials;
