import Nav from "../Nav";
import styles from './index.module.css'

export function Header() {
  return (
    <div>
      <Nav />
      <h1 className={styles.title}>
        NextJS App Practice<br /><small>by Finbar Maginn</small>
      </h1>
      <p className={styles.description}>Refamiliarising myself with server side Javascript</p>
      <p className={styles.description}>
        <code>Javascript, ES6, NodeJS, React, NextJS, JSX, HTML5, CSS3</code>
      </p>
    </div>
  )
}