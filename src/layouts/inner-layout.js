import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/navbar/navbar"
import Footer from "../components/footer"
import Sidebar from "../components/sidebar"
import styled from 'styled-components'
import '../styles/index.scss'

// To-Do: Bring all layouts into this folder

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
`
const Content = styled.div`
  display: flex;
  position: relative;
`
const Main = styled.div`
`

const InnerLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <div className="content">
          <Content>
            <Sidebar />
              <Main>
                {children}
              </Main>
          </Content>
        </div>
        </Container>
      <Footer />
    </>
  )
}

InnerLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InnerLayout
