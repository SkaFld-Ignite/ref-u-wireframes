import React, { useEffect, useState } from 'react';
import { getClient } from '../lib/sanity/client';

export default function SanityPreview({ documentId, type }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getClient(true).fetch(
          `*[_type == $type && _id == $documentId][0]`,
          { type, documentId }
        );
        setContent(data);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    // Set up real-time listening
    const subscription = getClient(true)
      .listen(
        `*[_type == $type && _id == $documentId][0]`,
        { type, documentId }
      )
      .subscribe((update) => {
        setContent(update.result);
      });

    fetchContent();

    return () => subscription.unsubscribe();
  }, [documentId, type]);

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        Loading content...
      </div>
    );
  }

  if (!content) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        No content found
      </div>
    );
  }

  // Render different content types
  switch (type) {
    case 'slide':
      return (
        <div className="slide-preview">
          <h2>{content.title}</h2>
          <div className="slide-content">
            {/* Add your slide content rendering here */}
          </div>
        </div>
      );

    case 'businessModel':
      return (
        <div className="business-model-preview">
          <h2>{content.title}</h2>
          <div className="overview">
            {/* Add your business model content rendering here */}
          </div>
          <div className="revenue-streams">
            {content.revenueStreams?.map((stream, index) => (
              <div key={index} className="revenue-stream">
                <h3>{stream.name}</h3>
                <p>{stream.description}</p>
                <div className="metrics">
                  {stream.metrics?.map((metric, i) => (
                    <div key={i} className="metric">
                      <span className="label">{metric.label}:</span>
                      <span className="value">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'marketAnalysis':
      return (
        <div className="market-analysis-preview">
          <h2>{content.title}</h2>
          <div className="overview">
            {/* Add your market analysis content rendering here */}
          </div>
          <div className="competitors">
            {content.competitors?.map((competitor, index) => (
              <div key={index} className="competitor">
                <h3>{competitor.name}</h3>
                <p>{competitor.description}</p>
                <div className="strengths">
                  <h4>Strengths</h4>
                  <ul>
                    {competitor.strengths?.map((strength, i) => (
                      <li key={i}>{strength}</li>
                    ))}
                  </ul>
                </div>
                <div className="weaknesses">
                  <h4>Weaknesses</h4>
                  <ul>
                    {competitor.weaknesses?.map((weakness, i) => (
                      <li key={i}>{weakness}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          Unknown content type
        </div>
      );
  }
}
