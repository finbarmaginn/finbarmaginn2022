import Link from 'next/link'
import { githubIcon } from '../../icons'
import styles from './index.module.scss'
import SVG from 'react-inlinesvg'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href='/profile'>
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link href='/redux-example'>
            <a>Redux Example</a>
          </Link>
        </li>
        <li>
          <a href='https://github.com/finbarmaginn/finbarmaginn2022' target="_blank" rel="noreferrer">
            View on GitHub <SVG src={githubIcon}></SVG>
          </a>
        </li>
      </ul>
    </nav>
  );
}