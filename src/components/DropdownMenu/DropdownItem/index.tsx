import Link from 'next/link'
import React from 'react'

type Props = {
  href: string
  name: string
}

const DropdownItem: React.FC<Props> = ({ href, name }) => {
  return (
    <li>
      <Link
        href={href}
        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
      >
        <a>{name}</a>
      </Link>
    </li>
  )
}

export default DropdownItem
