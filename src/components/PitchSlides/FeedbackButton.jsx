import React from 'react';

const FeedbackButton = ({ slideNumber, slideTitle }) => {
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
*Feedback submitted from: ${typeof window !== 'undefined' ? window.location.href : 'https://ref-u-wireframes-site.vercel.app/pre-seed-pitch-slides'}*
*Date: ${new Date().toLocaleDateString()}*`;
  
  const url = `https://github.com/SkaFld-Ignite/ref-u-wireframes/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&labels=investor-feedback,slide-${slideNumber}`;

  return (
    <div style={{
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      zIndex: 1000
    }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: '#2563EB',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          fontSize: '0.875rem',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textDecoration: 'none',
          display: 'inline-block'
        }}
        onMouseOver={(e) => e.target.style.background = '#1d4ed8'}
        onMouseOut={(e) => e.target.style.background = '#2563EB'}
        title="Click to provide feedback on this slide (opens GitHub issue form)"
      >
        💬 Feedback
      </a>
    </div>
  );
};

export default FeedbackButton;
