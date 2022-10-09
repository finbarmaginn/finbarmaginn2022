import Nav from "../Nav";
import styles from './index.module.css'

export function Header() {
  return (
    <div>
      <h1 className={styles.title}>
        Finbar Maginn{`'`}s NextJS App
      </h1>
      <p className={styles.description}>Refamiliarising myself with server side Javascript</p>
      <p className={styles.description}>
        <code>HTML5, CSS, Javascript, React, NodeJS, NextJs, Webpack</code>
      </p>
      <Nav />
    </div>
  )
}