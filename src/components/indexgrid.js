import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from 'gatsby-image'

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 25px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const Grid = ({ slug, title, subtitle, fluid }) => {
  return (
    <div className="col-md-4">
    <div className="card gridcard h-100">
      <div className="card-body mb-5">
        <Link className="card-title gridcard-title" to={slug}>
          {title}
        </Link>
        <div className="row">
          <Link className="card-text col-10 gridcard-text mt-2" to={slug}>
            {subtitle}
          </Link>
          <div className="col-2">
            <div className="gridcard-image">
            <LogoWrap>
                <Img fluid={fluid} />
            </LogoWrap>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Grid
