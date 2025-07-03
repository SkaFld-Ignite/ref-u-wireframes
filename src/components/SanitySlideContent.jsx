import React from 'react';
import { PortableText } from '@portabletext/react';
import {
  Slide01Cover,
  Slide02Problem,
  Slide03Solution,
  Slide04WhyNow,
  Slide05Market,
  Slide06Financials,
  Slide07Team,
  Slide08Investment
} from './PitchSlides';

const components = {
  block: ({value}) => {
    const style = value.style || 'normal';
    if (style === 'h1') {
      return <h1 className="slide-title">{value.children[0].text}</h1>;
    }
    return <p>{value.children[0].text}</p>;
  },
  metrics: ({value}) => (
    <div className="metrics-grid">
      {value.map((metric, i) => (
        <div key={i} className="metric-card">
          <h3>{metric.label}</h3>
          <div className="metric-value">{metric.value}</div>
        </div>
      ))}
    </div>
  )
};

const SlideComponents = {
  cover: Slide01Cover,
  problem: Slide02Problem,
  solution: Slide03Solution,
  market: Slide05Market,
  financials: Slide06Financials,
  team: Slide07Team,
  investment: Slide08Investment
};

export default function SanitySlideContent({ slideId }) {
  // Get the slide data from the global store
  const slideData = global.__SANITY_DATA__?.slides?.find(slide => slide._id === slideId);

  if (!slideData) {
    return <div>Loading...</div>;
  }

  const SlideComponent = SlideComponents[slideData.type];
  if (!SlideComponent) {
    return <div>Invalid slide type</div>;
  }

  return (
    <SlideComponent>
      <PortableText value={slideData.content} components={components} />
      {slideData.metrics && (
        <div className="metrics-grid">
          {slideData.metrics.map((metric, i) => (
            <div key={i} className="metric-card">
              <h3>{metric.label}</h3>
              <div className="metric-value">{metric.value}</div>
            </div>
          ))}
        </div>
      )}
    </SlideComponent>
  );
}
