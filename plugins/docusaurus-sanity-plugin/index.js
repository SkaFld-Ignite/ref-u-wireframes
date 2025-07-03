const { getClient } = require('../../src/lib/sanity/client');

module.exports = function (context, options) {
  return {
    name: 'docusaurus-sanity-plugin',
    
    async contentLoaded({content, actions}) {
      const {createData, addRoute} = actions;
      
      // Fetch all content from Sanity
      const slides = await getClient().fetch(`*[_type == "slide"]`);
      const businessModel = await getClient().fetch(`*[_type == "businessModel"][0]`);
      const marketAnalysis = await getClient().fetch(`*[_type == "marketAnalysis"][0]`);
      
      // Create data files
      await createData(
        'slides.json',
        JSON.stringify(slides)
      );
      
      await createData(
        'business-model.json',
        JSON.stringify(businessModel)
      );
      
      await createData(
        'market-analysis.json',
        JSON.stringify(marketAnalysis)
      );
      
      // Add dynamic routes
      slides.forEach((slide) => {
        addRoute({
          path: `/slides/${slide.slug.current}`,
          component: '@site/src/components/SanityPreview',
          modules: {
            content: await createData(
              `slide-${slide.slug.current}.json`,
              JSON.stringify(slide)
            ),
          },
          exact: true,
        });
      });
    },
    
    async postBuild({siteConfig, routesPaths, outDir}) {
      // Optional: Add post-build processing here
    },
  };
};
