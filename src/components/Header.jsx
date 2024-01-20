import headerLogo from '../assets/natepicone-logo-256.png'

function Header({ className }) {

  return (
    <header className={`bg-amber-300 text-sky-900 z-50 ${className}`}>
      <nav className="mx-auto flex items-center justify-between border-b-2 border-sky-300 p-6 lg:px-8" aria-label="Global">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">nate picone</span>
          <img className="h-8 w-auto" src={headerLogo} alt="" />
        </a>
        <div className="">
          {/* <a href="#" className="text-slate-500 font-semibold leading-6 hover:text-sky-500 transition-colors duration-300 delay-100 ease-in-out line-through">
            Blog
          </a> */}
        </div>
      </nav>
    </header>
  )
};

export default Header;