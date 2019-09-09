import React from "react"
import styles from "./footer.module.scss"

export default ({ children }) => (
  <footer className={styles.container}>
    <div
      className={styles.footer}
    >
      {/* <div className={styles.content}> */}
      {children}
      {/* </div> */}
    </div>
  </footer>
)
