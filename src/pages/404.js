import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./404.module.css";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className={styles.header}>NOT FOUND</h1>
    <p className={styles.error-message}>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
