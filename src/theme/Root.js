import React from 'react';
import { SanityContext, client, usePreviewSubscription } from '@site/src/lib/sanity';
import InvestorComment from '@site/src/components/InvestorComment';
import { useLocation } from '@docusaurus/router';

export default function Root({children}) {
  const location = useLocation();
  const currentPage = location.pathname.replace(/^\/|\/$/g, '') || 'home';

  return (
    <SanityContext.Provider value={{ client, usePreviewSubscription }}>
      {children}
      <InvestorComment 
        pageId={currentPage} 
        section={currentPage.split('/').pop().replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())}
      />
    </SanityContext.Provider>
  );
}
