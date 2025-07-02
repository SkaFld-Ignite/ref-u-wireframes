import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import aiService from '../../services/aiServiceClient';
import './AIContentEditor.css';

const AIContentEditor = ({ 
  originalContent, 
  onSave, 
  onCancel, 
  contentType = 'general',
  title = 'Edit Content with AI'
}) => {
  const [content, setContent] = useState(originalContent);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [customPrompt, setCustomPrompt] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [editHistory, setEditHistory] = useState([originalContent]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [apiKey, setApiKey] = useState('');
  const [provider, setProvider] = useState('openai');
  const [showApiSetup, setShowApiSetup] = useState(false);

  useEffect(() => {
    // Check if API key is already set in localStorage
    const savedApiKey = localStorage.getItem('ai_api_key');
    const savedProvider = localStorage.getItem('ai_provider') || 'openai';
    
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setProvider(savedProvider);
      aiService.setApiKey(savedApiKey, savedProvider);
    } else {
      setShowApiSetup(true);
    }
  }, []);

  const quickActions = [
    { label: 'Make More Professional', prompt: 'Make this content more professional and business-appropriate:' },
    { label: 'Simplify Language', prompt: 'Simplify this content to make it clearer and easier to understand:' },
    { label: 'Add More Detail', prompt: 'Expand this content with more relevant details and examples:' },
    { label: 'Make More Concise', prompt: 'Make this content more concise while keeping all key points:' },
    { label: 'Improve for Investors', prompt: 'Optimize this content for investor presentations, focusing on value and ROI:' }
  ];

  const handleApiSetup = () => {
    if (!apiKey.trim()) {
      setError('Please enter a valid API key');
      return;
    }

    localStorage.setItem('ai_api_key', apiKey);
    localStorage.setItem('ai_provider', provider);
    aiService.setApiKey(apiKey, provider);
    setShowApiSetup(false);
    setError(null);
  };

  const handleAIEdit = async (prompt = null) => {
    if (!apiKey) {
      setShowApiSetup(true);
      setError('Please configure your AI API key first');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await aiService.editContent(content, contentType, prompt || customPrompt);

      if (result.success) {
        const newContent = result.content;
        setContent(newContent);
        
        // Add to history
        const newHistory = editHistory.slice(0, historyIndex + 1);
        newHistory.push(newContent);
        setEditHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
        
        setCustomPrompt('');
      } else {
        setError(result.error || 'Failed to edit content');
      }
    } catch (err) {
      setError(err.message || 'Failed to process AI request');
      console.error('AI Edit Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setContent(editHistory[historyIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < editHistory.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setContent(editHistory[historyIndex + 1]);
    }
  };

  const handleReset = () => {
    setContent(originalContent);
    setHistoryIndex(0);
    setEditHistory([originalContent]);
  };

  const handleSave = () => {
    onSave(content);
  };

  if (showApiSetup) {
    return (
      <div className="ai-content-editor">
        <div className="ai-api-setup">
          <div className="ai-setup-header">
            <h3>🤖 AI Configuration Required</h3>
            <p>To use AI editing features, please configure your API key:</p>
          </div>

          <div className="ai-setup-form">
            <div className="ai-setup-field">
              <label>AI Provider:</label>
              <select 
                value={provider} 
                onChange={(e) => setProvider(e.target.value)}
                className="ai-setup-select"
              >
                <option value="openai">OpenAI (GPT-4)</option>
                <option value="anthropic">Anthropic (Claude)</option>
              </select>
            </div>

            <div className="ai-setup-field">
              <label>API Key:</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder={provider === 'openai' ? 'sk-...' : 'sk-ant-...'}
                className="ai-setup-input"
              />
              <small>
                {provider === 'openai' ? (
                  <>Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener">OpenAI</a></>
                ) : (
                  <>Get your API key from <a href="https://console.anthropic.com/" target="_blank" rel="noopener">Anthropic</a></>
                )}
              </small>
            </div>

            {error && (
              <div className="ai-error-message">
                <span>⚠️ {error}</span>
              </div>
            )}

            <div className="ai-setup-actions">
              <button 
                className="ai-btn ai-btn-secondary" 
                onClick={onCancel}
              >
                Cancel
              </button>
              <button 
                className="ai-btn ai-btn-primary" 
                onClick={handleApiSetup}
              >
                Save & Continue
              </button>
            </div>

            <div className="ai-setup-note">
              <p><strong>Privacy Note:</strong> Your API key is stored locally in your browser and never sent to our servers. All AI requests go directly to your chosen provider.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-content-editor">
      <div className="ai-editor-modal">
        <div className="ai-editor-header">
          <h3>{title}</h3>
          <div className="ai-editor-actions">
            <button 
              className="ai-btn ai-btn-secondary"
              onClick={() => setShowPreview(!showPreview)}
            >
              {showPreview ? 'Edit' : 'Preview'}
            </button>
            <button 
              className="ai-btn ai-btn-secondary"
              onClick={handleUndo}
              disabled={historyIndex <= 0}
            >
              ↶ Undo
            </button>
            <button 
              className="ai-btn ai-btn-secondary"
              onClick={handleRedo}
              disabled={historyIndex >= editHistory.length - 1}
            >
              ↷ Redo
            </button>
            <button 
              className="ai-btn ai-btn-secondary"
              onClick={handleReset}
            >
              Reset
            </button>
            <button 
              className="ai-btn ai-btn-secondary"
              onClick={() => setShowApiSetup(true)}
              title="Change AI Settings"
            >
              ⚙️
            </button>
          </div>
        </div>

        {error && (
          <div className="ai-error-message">
            <span>⚠️ {error}</span>
            <button onClick={() => setError(null)}>×</button>
          </div>
        )}

        <div className="ai-editor-content">
          {showPreview ? (
            <div className="ai-preview-panel">
              <h4>Preview</h4>
              <div className="ai-preview-content">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="ai-edit-panel">
              <textarea
                className="ai-content-textarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content to edit..."
                rows={15}
              />
            </div>
          )}
        </div>

        <div className="ai-prompt-section">
          <h4>AI Editing Options</h4>
          
          <div className="ai-quick-actions">
            <h5>Quick Actions:</h5>
            <div className="ai-quick-buttons">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="ai-btn ai-btn-quick"
                  onClick={() => handleAIEdit(action.prompt)}
                  disabled={isLoading}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          <div className="ai-custom-prompt">
            <h5>Custom Prompt:</h5>
            <div className="ai-prompt-input-group">
              <textarea
                className="ai-prompt-textarea"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Enter custom editing instructions..."
                rows={3}
              />
              <button
                className="ai-btn ai-btn-primary"
                onClick={() => handleAIEdit()}
                disabled={isLoading || !customPrompt.trim()}
              >
                {isLoading ? 'Processing...' : '✨ Edit with AI'}
              </button>
            </div>
          </div>
        </div>

        <div className="ai-editor-footer">
          <button 
            className="ai-btn ai-btn-secondary" 
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancel
          </button>
          <button 
            className="ai-btn ai-btn-success" 
            onClick={handleSave}
            disabled={isLoading}
          >
            Save Changes
          </button>
        </div>

        {isLoading && (
          <div className="ai-loading-overlay">
            <div className="ai-loading-spinner">
              <div className="ai-spinner"></div>
              <p>AI is editing your content...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIContentEditor;
