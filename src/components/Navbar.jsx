import { useState } from 'react'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Left: brand */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <span className="h-8 w-8 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-display font-bold text-sm">
              DS
            </span>
            <span className="font-display font-bold text-lg text-ink hidden xs:inline">
              Dev <span className="text-brand-gradient">Stack</span>
            </span>
          </a>

          {/* Center: nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={
                  i === 0
                    ? 'text-sm font-medium text-brand-pink'
                    : 'text-sm font-medium text-gray-600 hover:text-ink transition-colors'
                }
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right: auth actions (desktop) */}
          <div className="hidden md:flex items-center gap-5">
            <button className="text-sm font-medium text-gray-700 hover:text-ink transition-colors">
              Sign In
            </button>
            <button className="text-sm font-semibold text-white bg-brand-gradient px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>

          {/* Mobile: hamburger left is handled by order below at small screens */}
          <div className="flex md:hidden items-center gap-3">
            <button className="text-xs font-medium text-gray-700">Sign In</button>
            <button className="text-xs font-semibold text-white bg-brand-gradient px-4 py-1.5 rounded-full">
              Sign Up
            </button>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 -mr-2 text-ink"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-5 py-3 flex flex-col gap-3">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={i === 0 ? 'text-sm font-medium text-brand-pink' : 'text-sm font-medium text-gray-600'}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
