import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 25px;

  @media (max-width: 400px) and (orientation: landscape) {
    flex: 0 5 25px;
  }
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icon-apay.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <LogoWrap>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </LogoWrap>
  )
}

export default Image
