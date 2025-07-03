const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'jrm3dyyn',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01'
});

module.exports = function (options) {
  return async function transformer(root) {
    const slides = await client.fetch(`*[_type == "slide"]`);
    const businessModel = await client.fetch(`*[_type == "businessModel"][0]`);
    const marketAnalysis = await client.fetch(`*[_type == "marketAnalysis"][0]`);

    // Store the data in the Docusaurus build context
    global.__SANITY_DATA__ = {
      slides,
      businessModel,
      marketAnalysis
    };
  };
};
