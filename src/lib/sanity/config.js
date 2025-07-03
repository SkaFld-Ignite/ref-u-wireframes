export const config = {
  projectId: "YOUR_PROJECT_ID", // You'll get this from Sanity
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};

export const SANITY_CONTENT_TYPES = {
  SLIDE: 'slide',
  BUSINESS_MODEL: 'businessModel',
  MARKET_ANALYSIS: 'marketAnalysis',
  TECHNICAL_SPECS: 'technicalSpecs',
};

export const PREVIEW_SECRET = "your-preview-secret"; // Set this in your environment variables
