import sanityClient from '@sanity/client';
import { config } from './config';

export const client = sanityClient({
  ...config,
  token: process.env.SANITY_API_TOKEN, // For authenticated requests
});

export const previewClient = sanityClient({
  ...config,
  token: process.env.SANITY_PREVIEW_TOKEN,
  useCdn: false,
});

// Helper to determine which client to use
export const getClient = (preview = false) => (preview ? previewClient : client);

// Fetch slide content
export async function getSlide(slug, preview = false) {
  const currentClient = getClient(preview);
  
  return currentClient.fetch(
    `*[_type == "slide" && slug.current == $slug][0]{
      title,
      content,
      "slideNumber": coalesce(slideNumber, 0),
      "type": coalesce(type, "default"),
      metrics,
      charts,
      images
    }`,
    { slug }
  );
}

// Fetch all business model content
export async function getBusinessModel(preview = false) {
  const currentClient = getClient(preview);
  
  return currentClient.fetch(
    `*[_type == "businessModel"][0]{
      overview,
      revenueModel,
      marketSize,
      projections,
      charts,
      metrics
    }`
  );
}

// Fetch market analysis
export async function getMarketAnalysis(preview = false) {
  const currentClient = getClient(preview);
  
  return currentClient.fetch(
    `*[_type == "marketAnalysis"][0]{
      overview,
      targetMarket,
      competition,
      opportunities,
      risks,
      charts
    }`
  );
}

// Live preview subscription
export function subscribeToUpdates(documentId, callback) {
  const subscription = previewClient
    .listen(`*[_id == $documentId]`, { documentId })
    .subscribe(update => {
      callback(update);
    });

  return () => subscription.unsubscribe();
}
