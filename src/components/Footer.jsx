const PRODUCT_LINKS = ['Home', 'Technologies', 'Projects']
const COMPANY_LINKS = ['About', 'Contact', 'Careers']
const LEGAL_LINKS = ['Privacy Policy', 'Terms of Service']
const SOCIALS = ['GitHub', 'Twitter', 'LinkedIn']

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#home" className="inline-flex items-center mb-3">
              <img src="/assets/logo.png" alt="Dev Stack" className="h-8 w-auto" />
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-4">
              Curated tools, technologies, and resources for developers building modern
              software.
            </p>
            <div className="flex items-center gap-4">
              {SOCIALS.map((s) => (
                <a key={s} href="#" className="text-sm font-medium text-gray-500 hover:text-ink">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <FooterGroup title="Product" links={PRODUCT_LINKS} />
          <FooterGroup title="Company" links={COMPANY_LINKS} />
          <FooterGroup title="Legal" links={LEGAL_LINKS} />
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-sm text-gray-400 hover:text-ink">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-ink">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterGroup({ title, links }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-wide text-ink mb-3">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-gray-500 hover:text-ink transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
