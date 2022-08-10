import Link from 'next/link'

export default function Nav() {
    return (
        <div>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
            </ul>
            <ul>
                <li><Link href="/projects"><a>Projects</a></Link></li>
            </ul>
        </div>
    )
}