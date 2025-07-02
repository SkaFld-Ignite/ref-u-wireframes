import React, { useState } from 'react';
import AIContentEditor from './AIContentEditor';
import './AIContentEditor.css';

const EditableContent = ({ 
  children, 
  contentType = 'general',
  title = 'Edit Content',
  onContentChange = null,
  className = '',
  ...props 
}) => {
  const [showEditor, setShowEditor] = useState(false);
  const [currentContent, setCurrentContent] = useState('');

  const extractTextContent = (element) => {
    if (typeof element === 'string') {
      return element;
    }
    
    if (React.isValidElement(element)) {
      if (element.props.children) {
        return extractTextContent(element.props.children);
      }
      return '';
    }
    
    if (Array.isArray(element)) {
      return element.map(extractTextContent).join('\n');
    }
    
    return String(element || '');
  };

  const handleEditClick = () => {
    const textContent = extractTextContent(children);
    setCurrentContent(textContent);
    setShowEditor(true);
  };

  const handleSave = (newContent) => {
    setShowEditor(false);
    
    if (onContentChange) {
      onContentChange(newContent);
    } else {
      // If no callback provided, update the DOM directly
      const wrapper = document.querySelector(`[data-ai-editable="${currentContent.substring(0, 50)}"]`);
      if (wrapper) {
        // For markdown content, render as HTML
        if (newContent.includes('##') || newContent.includes('**') || newContent.includes('*')) {
          // Simple markdown to HTML conversion
          let html = newContent
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/gim, '<em>$1</em>')
            .replace(/\n/gim, '<br>');
          
          wrapper.innerHTML = html;
        } else {
          wrapper.textContent = newContent;
        }
      }
    }
  };

  const handleCancel = () => {
    setShowEditor(false);
  };

  return (
    <>
      <div 
        className={`ai-editable-wrapper ${className}`}
        data-ai-editable={currentContent.substring(0, 50)}
        {...props}
      >
        <button
          className="ai-edit-button"
          onClick={handleEditClick}
          title="Edit with AI"
        >
          ✨ Edit
        </button>
        <div className="ai-editable-content">
          {children}
        </div>
      </div>

      {showEditor && (
        <AIContentEditor
          originalContent={currentContent}
          onSave={handleSave}
          onCancel={handleCancel}
          contentType={contentType}
          title={title}
        />
      )}
    </>
  );
};

// HOC for making any component editable
export const withAIEditing = (WrappedComponent, options = {}) => {
  return React.forwardRef((props, ref) => {
    const {
      contentType = 'general',
      title = 'Edit Content',
      onContentChange,
      ...restProps
    } = props;

    return (
      <EditableContent
        contentType={options.contentType || contentType}
        title={options.title || title}
        onContentChange={onContentChange}
        className={options.className}
      >
        <WrappedComponent ref={ref} {...restProps} />
      </EditableContent>
    );
  });
};

// Pre-configured components for common content types
export const EditablePitchSlide = ({ children, ...props }) => (
  <EditableContent 
    contentType="pitch_slide" 
    title="Edit Pitch Slide"
    {...props}
  >
    {children}
  </EditableContent>
);

export const EditableMarketAnalysis = ({ children, ...props }) => (
  <EditableContent 
    contentType="market_analysis" 
    title="Edit Market Analysis"
    {...props}
  >
    {children}
  </EditableContent>
);

export const EditableBusinessModel = ({ children, ...props }) => (
  <EditableContent 
    contentType="business_model" 
    title="Edit Business Model"
    {...props}
  >
    {children}
  </EditableContent>
);

export const EditableTeamDescription = ({ children, ...props }) => (
  <EditableContent 
    contentType="team_description" 
    title="Edit Team Description"
    {...props}
  >
    {children}
  </EditableContent>
);

export const EditableFinancialProjections = ({ children, ...props }) => (
  <EditableContent 
    contentType="financial_projections" 
    title="Edit Financial Projections"
    {...props}
  >
    {children}
  </EditableContent>
);

export default EditableContent;
