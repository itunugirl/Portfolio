import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter()

  // Check if the current route is the same as the link href
  const isActive = router.pathname === href

  return (
    <Link href={href} passHref>
      <a
        className={`ml-4 ${
          isActive ? 'text-yellow-300 font-bold' : 'text-white'
        }`}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavLink
