import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"

import * as styles from "../styles/home.module.css"

export const query = graphql`
  query GetDescription {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Web Warrior Design</h2>
          <h3>Develop & Deploy</h3>
          <p>{data.site.siteMetadata.description}</p>
          <Link to="/projects" className={styles.btn}>
            Go To My Projects
          </Link>
        </div>
        <StaticImage
          src="../images/banner.png"
          alt="site banner"
          layout="constrained"
        />
      </section>
    </Layout>
  )
}
