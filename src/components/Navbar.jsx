function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg">Garvit • Cloud Engineer</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#experience" className="hover:text-gray-900">Experience</a>
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="/test" className="ml-2 inline-flex items-center rounded-md bg-gray-900 text-white px-3 py-1.5 hover:bg-gray-800">/test</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
