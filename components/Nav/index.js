import Link from 'next/link'
import styles from './index.module.scss'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/projects"><a>Projects</a></Link></li>
        <li><Link href="/profile"><a>Profile</a></Link></li>
      </ul>
    </nav>
  )
}