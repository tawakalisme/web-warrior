import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Navbar() {
  //this method used in non-pages component file
  const data = useStaticQuery(graphql`
    query NonPageQuery {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return (
    <nav>
      <h1>{data.site.siteMetadata.title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}
