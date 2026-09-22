export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-5 md:px-8 pt-14 md:pt-24 pb-16 md:pb-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          <h1 className="font-display font-extrabold leading-[1.08] text-4xl sm:text-5xl lg:text-6xl text-ink">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed max-w-md">
            Explore frontend, backend, database, and tooling options, compare them side by
            side, and put together the stack that fits your next project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="bg-brand-gradient text-white font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="border border-gray-300 text-ink font-semibold text-sm px-6 py-3 rounded-full hover:border-ink transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right: original isometric stack illustration */}
        <div className="flex justify-center md:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 420 380"
      className="w-full max-w-md"
      role="img"
      aria-label="Illustration of a layered development stack"
    >
      <defs>
        <linearGradient id="heroTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE1D3" />
          <stop offset="100%" stopColor="#C9B6FF" />
        </linearGradient>
        <linearGradient id="heroLeft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
        <linearGradient id="heroRight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
        <linearGradient id="heroBase" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF7A45" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>

      {/* soft glow */}
      <ellipse cx="210" cy="320" rx="140" ry="24" fill="#8B5CF6" opacity="0.15" />

      {/* base platform (isometric) */}
      <polygon points="210,150 340,215 210,280 80,215" fill="url(#heroBase)" opacity="0.9" />
      <polygon points="80,215 210,280 210,330 80,265" fill="url(#heroLeft)" />
      <polygon points="340,215 210,280 210,330 340,265" fill="url(#heroRight)" />

      {/* floating top module */}
      <polygon points="210,40 300,85 210,130 120,85" fill="url(#heroTop)" />
      <polygon points="120,85 210,130 210,175 120,130" fill="#A78BFA" />
      <polygon points="300,85 210,130 210,175 300,130" fill="#F472B6" />

      {/* connector struts */}
      <line x1="150" y1="118" x2="150" y2="195" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
      <line x1="270" y1="118" x2="270" y2="195" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" />

      {/* small orbiting chips */}
      <circle cx="150" cy="100" r="9" fill="#FF7A45" />
      <circle cx="270" cy="100" r="9" fill="#EC4899" />
      <rect x="195" y="60" width="30" height="30" rx="7" fill="white" opacity="0.9" />
      <text x="210" y="81" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="14" fill="#8B5CF6">
        {'</>'}
      </text>

      {/* code dots on base */}
      <circle cx="175" cy="215" r="4" fill="white" opacity="0.85" />
      <circle cx="195" cy="222" r="4" fill="white" opacity="0.85" />
      <circle cx="215" cy="215" r="4" fill="white" opacity="0.85" />
      <circle cx="245" cy="222" r="4" fill="white" opacity="0.85" />
    </svg>
  )
}
