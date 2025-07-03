import React, { createContext } from 'react';

// Stub Sanity integration to prevent build errors
// TODO: Implement proper Sanity client configuration

export const SanityContext = createContext({});

export const client = {
  create: async () => {
    console.warn('Sanity client not configured - no data will be saved');
    return Promise.resolve();
  }
};

export const usePreviewSubscription = () => {
  console.warn('Sanity preview subscription not configured');
  return { data: null };
};
