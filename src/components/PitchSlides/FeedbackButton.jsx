import React from 'react';

const FeedbackButton = ({ slideNumber, slideTitle }) => {
  const createIssueUrl = () => {
    const title = `Feedback: Slide ${slideNumber} - ${slideTitle}`;
    const body = `## Slide ${slideNumber}: ${slideTitle}

**What works well:**
- 

**Suggestions for improvement:**
- 

**Questions:**
- 

**Overall rating:** ⭐⭐⭐⭐⭐ (1-5 stars)

---
*Feedback submitted from: ${window.location.href}*
*Date: ${new Date().toLocaleDateString()}*`;
    
    const url = `https://github.com/SkaFld-Ignite/ref-u-wireframes/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&labels=investor-feedback,slide-${slideNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      zIndex: 1000
    }}>
      <button
        onClick={createIssueUrl}
        style={{
          background: '#2563EB',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          fontSize: '0.875rem',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
        onMouseOver={(e) => e.target.style.background = '#1d4ed8'}
        onMouseOut={(e) => e.target.style.background = '#2563EB'}
      >
        💬 Feedback
      </button>
    </div>
  );
};

export default FeedbackButton;
