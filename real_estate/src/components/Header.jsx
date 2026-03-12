function Header() {
  return (

    <header className="bg-zinc-900 text-white py-4">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 font-meta">

        <div className="text-sm">
          Dev.
        </div>

        <nav className="flex gap-4 text-xs">

          <a href="#" className="hover:text-gray-300">
            HOME
          </a>

          <a href="#" className="hover:text-gray-300">
            LISTING
          </a>

          <a href="#" className="hover:text-gray-300">
            ABOUT
          </a>

        </nav>

        <div className="text-xs">
          Contact
        </div>

      </div>

    </header>

  )
}

export default Header