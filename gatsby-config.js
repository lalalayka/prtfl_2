module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "kppdnfprtr27",
        accessToken:
          "18046f244e5e68bc01bb7a4ca34e562d3f3cf791ee9ddcec493f486f13c457ce"
      }
    }
  ]
};
