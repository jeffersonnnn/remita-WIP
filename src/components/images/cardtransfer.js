import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageWrap = styled.div`
  margin: auto 0;
  flex: 0 1 120px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 120px;
  }
`
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "fundstransfer" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 700, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ImageWrap as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </ImageWrap>  
)
}

export default Image
