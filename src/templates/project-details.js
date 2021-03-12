import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as detailStyles from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const image = getImage(data.markdownRemark.frontmatter.featuredImg)
  const { title, stack } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={detailStyles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={detailStyles.featured}>
          <GatsbyImage image={image} alt={title} />
        </div>
        <div
          className={detailStyles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        slug
        date
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
