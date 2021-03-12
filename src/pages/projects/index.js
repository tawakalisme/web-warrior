import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../../components/Layout"

import * as styles from "../../styles/projects.module.css"

export default function Projects({ data }) {
  const projects = data.projectsData.nodes
  const contact = data.contactData.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>My Projects</h1>
        <h3>My Projects & Portfolio</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} alt={project.frontmatter.title}/>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>
          Email me at <strong>{contact}</strong>
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getProjects {
    projectsData: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          date
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    contactData: site {
      siteMetadata {
        contact
      }
    }
  }
`
