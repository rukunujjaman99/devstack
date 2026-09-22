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

        {/* Right: banner illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/banner-stack.png"
            alt="Isometric illustration of a layered development stack"
            className="w-full max-w-sm md:max-w-md"
            width={526}
            height={526}
          />
        </div>
      </div>
    </section>
  )
}
