import React, { useState } from 'react';

const TypeformWidget = ({ slideId, slideName }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const typeformUrl = `https://form.typeform.com/to/YOUR_FORM_ID?slide=${slideId}&slide_name=${encodeURIComponent(slideName)}`;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          padding: '1rem 1.5rem',
          fontSize: '0.9rem',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
      >
        📝 Quick Feedback
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            width: '90%',
            maxWidth: '600px',
            height: '80%',
            position: 'relative'
          }}>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: '#f3f4f6',
                border: 'none',
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                cursor: 'pointer',
                zIndex: 10001
              }}
            >
              ✕
            </button>
            <iframe
              src={typeformUrl}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '12px'
              }}
              title="Investor Feedback Form"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TypeformWidget;
