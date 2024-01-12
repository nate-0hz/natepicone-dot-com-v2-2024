import { useState } from 'react'
import headerLogo from '../assets/natepicone-logo-256.png'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-sky-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">nate picone</span>
          <img className="h-8 w-auto" src={headerLogo} alt="" />
        </a>
        <div className="">
          <a href="#" className="text-slate-500 font-semibold leading-6 hover:text-sky-500 transition-colors duration-300 delay-100 ease-in-out">
            Blog
          </a>
        </div>
      </nav>
    </header>
  )
};

export default Header;