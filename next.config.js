const composePlugins = require("next-compose-plugins");
const mdxEnhanced = require("next-mdx-enhanced");

module.exports = composePlugins(
  [
    mdxEnhanced({
      layoutPath: "./templates",
    }),
  ],
  {
    images: {
      domains: [
        "previews.123rf.com",
        "www.w3.org",
        "upload.wikimedia.org",
        "seeklogo.com",
        "www.nasa.gov",
      ],
    },
  }
);
