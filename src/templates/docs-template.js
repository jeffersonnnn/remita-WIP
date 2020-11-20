import React from "react"
import InnerLayout from "../layouts/inner-layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const DocsTemplate = ({ data }) => {
    const post = data.markdownRemark.frontmatter
    return (
        <InnerLayout>
            <SEO title={post.title} />
                {/* <h1 className="align-left">{post.title}</h1> */}
                <div className="container">
                    <div className="docs-content">
                        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
                    </div>
                </div>
        </InnerLayout>
    )
}


export const postQuery = graphql`

    query docsBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            id
            html
            frontmatter {
                title
                subtitle
            }
        }
    }

`

export default DocsTemplate