import React from 'react';
import './PitchSlides.css';
import FeedbackButton from './FeedbackButton';

const SlideLayout = ({ 
  children, 
  className = '', 
  slideNumber,
  title,
  theme = 'default',
  fullHeight = true 
}) => {
  return (
    <div className={`pitch-slide-container ${theme} ${className}`}>
      <FeedbackButton slideNumber={slideNumber} slideTitle={title} />
      <div className="slide-header">
        <span className="slide-number">Slide {slideNumber}</span>
        <h2 className="slide-header-title">{title}</h2>
      </div>
      <div className={`slide-content ${fullHeight ? 'full-height' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
