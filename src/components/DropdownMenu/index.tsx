import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import DropdownHead from './DropdownHead'
import DropdownItem from './DropdownItem'

const DropdownMenu = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      <DropdownHead />
      <ul className="py-1" aria-labelledby="dropdown">
        <DropdownItem href="#" name="Dashboard" />
        <DropdownItem href="#" name="Settings" />
        <DropdownItem href="#" name="Earnings" />
        <DropdownItem href="#" name="Sign out" />
      </ul>
    </>
  )
}

export default DropdownMenu
