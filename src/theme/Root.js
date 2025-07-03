import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { SanityContext, client, usePreviewSubscription } from '@site/src/lib/sanity';
import InvestorComment from '@site/src/components/InvestorComment';

export default function Root({children}) {
  return (
    <SanityContext.Provider value={{ client, usePreviewSubscription }}>
      {children}
      <BrowserOnly>
        {() => <InvestorComment pageId="global" section="General Feedback" />}
      </BrowserOnly>
    </SanityContext.Provider>
  );
}
