import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">Garvit<span className="text-blue-600">.cloud</span></a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              {l.label}
            </a>
          ))}
          <div className="h-5 w-px bg-gray-300 mx-2" />
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-gray-100">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-gray-100">
              <Linkedin size={18} />
            </a>
            <a href="#contact" aria-label="Email" className="p-2 rounded-md hover:bg-gray-100">
              <Mail size={18} />
            </a>
          </div>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/80 backdrop-blur">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-gray-800 py-2">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
