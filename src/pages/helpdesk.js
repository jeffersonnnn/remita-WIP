import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/search"
import styled from "styled-components"
// import { graphql } from "gatsby"

import AcceptPay from "../components/images/cardacceptpay"
import DFS from "../components/images/carddfs"
import Lending from "../components/images/cardlending"
import RDS from "../components/images/cardrds"
import Regulatory from "../components/images/cardregulatory"
import Transfer from "../components/images/cardtransfer"
import ArticleCard from "../components/article-card"

const DivWrap = styled.div`
  margin: 50px auto;
  width: 80%;
  text-align: center;
`

const HelpDesk = () => (
  <Layout>
    <SEO title="Help Desk" />
      <h1 className="sectionthree-text">How can we help?</h1>

      <DivWrap>
        <Search placeholder="Get quick answers to your questions" />
      </DivWrap>

      <div className="container">
      <div className="row my-5">
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <Link className="card-title gridcard-title" to="/accept-payments-overview">Accept Payments</Link>
              <div class="row">
                <Link className="card-text col-10 gridcard-text mt-2" to="/accept-payments-overview">
                  Receive payments via multiple channels including Local and
                  International Debit/Credit Cards, Online Banking, USSD etc.
                </Link>
                <div className="col-2">
                  <div className="gridcard-image">
                  <AcceptPay />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <Link className="card-title gridcard-title" to="/funds-transfer-overview">Funds Transfer</Link>
              <div className="row">
                <Link className="card-text col-10 gridcard-text mt-2" to="/funds-transfer-overview">
                  Send funds Account-to-Account between Commercial and Micro-Finance Banks
                </Link>                
                <div className="col-2">
                    <div className="gridcard-image">
                    <DFS />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <Link className="card-title gridcard-title" to="/reference-data-services-overview">Reference Data Services</Link>
              <div className="row">
                <Link className="card-text col-10 gridcard-text mt-2" to="/reference-data-services-overview">
                  Validate your customer’s identity and associated information in
                  an automated manner.
                </Link>  
                <div className="col-2">
                    <div className="gridcard-image">
                    <Lending />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <Link className="card-title gridcard-title" to="/lending-support-services-overview">Lending Support Services</Link>
              <div className="row">
                <Link className="card-text col-10 gridcard-text mt-2" to="/lending-support-services-overview">
                Expand your loan portfolio as well as your lendable ecosystem and ensure guaranteed repayments with near zero default rates. 
                </Link>
                <div className="col-2">
                    <div className="gridcard-image">
                    <RDS />
                    </div>
                </div>
              </div>
              </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <Link className="card-title gridcard-title" to="/digital-financial-services">Digital Financial Services</Link>
              <div className="row">
                <Link className="card-text col-10 gridcard-text mt-2" to="/dfs">
                  Wide range of financial services accessed and delivered via Remita as well as Partner touch-points. These include Biller services, Wallet services, Cash-outs, etc.
                </Link>
                <div className="col-2">
                    <div className="gridcard-image">
                    <Regulatory />
                    </div>
                </div>
              </div>
              </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <Link className="card-title gridcard-title" to="/regulatory-payments">Regulatory Payments</Link>
              <div className="row">
                <Link className="card-text col-10 gridcard-text mt-2" to="/regulatory-payments">
                  Remit Tax and Pension payments to various Tax Authorities with corresponding schedules delivered to the relevant authorities via a simple API call. 
                </Link>
                <div className="col-2">
                    <div className="gridcard-image">
                    <Transfer />
                    </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
      {/* <StaticQuery query={ArticlesQuery} render={data => {
        return (
          <div className="row my-5">
            {data.allMarkdownRemark.edges.map(({ node }, key) => (
              <Grid 
              key={key}
              title={node.frontmatter.title}
              subtitle={node.frontmatter.subtitle}
              slug={node.fields.slug}
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              />
            ))}
          </div>
        )
      }} /> */}
    </div>

    <div className="">
      <div className="col-12 text-center mt-5">
        <h4 className="py-4 bold-text">Recent Updates</h4>
      </div>
      <div className="container">
        <div className="d-flex flex-column">
            <ArticleCard 
                title="What Kinds of company use remita?" 
                description="This companies include all sizes of business. Some include..." 
                time="Last updated 3 mins ago" />
            <ArticleCard 
                title="What Kinds of company use remita?" 
                description="This companies include all sizes of business. Some include..." 
                time="Last updated 5 mins ago" />
            <ArticleCard 
                title="What Kinds of company use remita?" 
                description="This companies include all sizes of business. Some include..." 
                time="Last updated 10 mins ago" />
        </div>
      </div>
    </div>   
      
  </Layout>
)

// const ArticlesQuery = graphql `
// query {
//   allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
//     edges {
//       node {
//         id
//         frontmatter {
//           title
//           subtitle
//           date
//           featuredImage {
//             childImageSharp {
//               fluid(maxWidth: 600) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//         fields {
//           slug
//         }
//         excerpt
//       }
//     }
//   }
// }
// `


// const pageQuery = graphql`
//   fragment IndexArticleFragment on File {
//     childMarkdownRemark {
//       id
//     }
//   }
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//         texts {
//           articlesInCollectionZeroText
//           articlesInCollectionOneText
//           articlesInCollectionTwoText
//           articlesInCollectionMultipleText
//         }
//       }
//     }
//     collections: allCollectionsYaml {
//       edges {
//         node {
//           id
//           title
//           icon
//           description
//           articles {
//             file {
//               ...IndexArticleFragment
//             }
//           }
//           sections {
//             articles {
//               file {
//                 ...IndexArticleFragment
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `


export default HelpDesk;


