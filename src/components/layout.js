import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Sergey Kovalchuk</title>
      <link rel="canonical" href="http://sergeykovalchuk.com" />
      <meta name="description" content="Jack Of All Trades" />
    </Helmet>
    <Header />
    {children}
    <Footer />
  </div>
);

// export const query = graphql`
// {
// 	contentfulProjectCard {
//         title
//         tag
//         thumbnail {
//           id
//         }
//         linkInside
//         linkOutside
//         description {
//           id
//         } 
//         date
//         pictures {
//           id
//         } 
//       }
// }
