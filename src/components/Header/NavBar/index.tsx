import NavItem from './NavItem'

const navItems = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
  { href: '/services', name: 'Services' },
  { href: '/pricing', name: 'Pricing' },
  { href: '/contact', name: 'Contact' },
]

const NavBar = () => {
  return (
    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      {navItems.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </ul>
  )
}

export default NavBar
