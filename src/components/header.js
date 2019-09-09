import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
          <StaticQuery
          query = {graphql 
          `
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
          `
        }
        render = { data => (
          <div>
          <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >{data.site.siteMetadata.title}
          </Link>
            </h1>
         </div>
        )

        }
          >

          </StaticQuery>
          
        
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
