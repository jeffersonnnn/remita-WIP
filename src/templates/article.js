import React from "react"
import Layout from "../components/layout"

class ArticleTemplate extends React.Component {
  render() {

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <p>Article</p>
      </Layout>
    )
  }
}

export default ArticleTemplate;