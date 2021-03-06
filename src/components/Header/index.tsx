import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DropdownMenu from '@components/DropdownMenu'
import NavBar from './NavBar'

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3">
              <Image
                alt="Like Lion"
                src="https://flowbite.com/docs/images/logo.svg"
                height={24}
                width={24}
              />

              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Like Lion
              </span>
            </a>
          </Link>
          <div className="flex items-center md:order-2">
            {/* Button mobile 1 */}
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <Image
                className="w-8 h-8 rounded-full"
                alt="User Photo"
                src="https://flowbite.com/docs/images/logo.svg"
                height={24}
                width={24}
              />
            </button>
            {/* Dropdown menu */}
            <div
              className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown"
            >
              <DropdownMenu />
            </div>
            {/* Button mobile 2 */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              mobileNavOpen ? '' : 'hidden'
            } w-full md:block md:w-auto`}
            id="mobile-menu-2"
          >
            <NavBar />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
