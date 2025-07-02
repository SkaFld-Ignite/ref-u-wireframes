import React from 'react';
import SlideLayout from './SlideLayout';

const Slide05Market = () => {
  return (
    <SlideLayout 
      slideNumber={5} 
      title="Market Opportunity ��" 
      theme="market"
    >
      <h1 className="slide-title">
        Large addressable market with clear entry point
      </h1>
      
      <div className="three-column">
        <div className="market-card">
          <h3>Total Addressable Market</h3>
          <div className="market-value">$15.2B</div>
          <p>
            Sports media, interactive entertainment, and educational technology combined
          </p>
        </div>
        
        <div className="market-card">
          <h3>Service Addressable Market</h3>
          <div className="market-value sam">$2.8B</div>
          <p>
            Interactive sports platforms focused on real-time engagement and education
          </p>
        </div>
        
        <div className="market-card">
          <h3>Service Obtainable Market</h3>
          <div className="market-value som">$340M</div>
          <p>
            Sports fans seeking interactive referee education and real-time call analysis
          </p>
        </div>
      </div>
      
      <div className="bottom-highlight">
        <div className="key-point">
          <h3>🎯 Market Entry Strategy</h3>
          <p>
            Target the underserved referee education segment to build loyal user base, 
            then expand to broader sports content and adjacent markets
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide05Market;
