import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { getClient } from '../lib/sanity/client';

const serializers = {
  types: {
    code: ({node}) => (
      <pre data-language={node.language}>
        <code>{node.code}</code>
      </pre>
    ),
    image: ({node}) => (
      <img
        src={getClient().image(node).url()}
        alt={node.alt}
        style={{maxWidth: '100%', height: 'auto'}}
      />
    ),
    metrics: ({node}) => (
      <div className="metrics-grid">
        {node.metrics.map((metric, i) => (
          <div key={i} className="metric-card">
            <h3>{metric.label}</h3>
            <div className="metric-value">{metric.value}</div>
            <div className={`trend trend-${metric.trend}`}>
              {metric.trend === 'up' && '↑'}
              {metric.trend === 'down' && '↓'}
              {metric.trend === 'neutral' && '→'}
            </div>
          </div>
        ))}
      </div>
    ),
    chart: ({node}) => {
      const chartData = JSON.parse(node.data);
      return (
        <div className="chart-container">
          {/* Implement your preferred charting library here */}
          {node.type === 'bar' && <BarChart data={chartData} />}
          {node.type === 'line' && <LineChart data={chartData} />}
          {node.type === 'pie' && <PieChart data={chartData} />}
        </div>
      );
    }
  },
  marks: {
    link: ({mark, children}) => {
      const { blank, href } = mark;
      return blank ? 
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a> :
        <a href={href}>{children}</a>;
    }
  }
};

export default function SanityContent({ content }) {
  return (
    <BlockContent
      blocks={content}
      serializers={serializers}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
    />
  );
}
