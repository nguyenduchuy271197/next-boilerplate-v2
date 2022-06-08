import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  href: string
  name: string
}

const NavItem: React.FC<Props> = ({ href, name }) => {
  const router = useRouter()
  return (
    <li>
      <Link href={href}>
        <a
          className={`nav-item ${router.pathname === href ? 'active' : ''}`}
          aria-current="page"
        >
          {name}
        </a>
      </Link>
    </li>
  )
}

export default NavItem
