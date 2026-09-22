const CATEGORY_STYLES = {
  Frontend: 'bg-blue-50 text-blue-600',
  Backend: 'bg-emerald-50 text-emerald-600',
  Database: 'bg-amber-50 text-amber-700',
  Language: 'bg-violet-50 text-violet-600',
  Styling: 'bg-cyan-50 text-cyan-600',
  DevOps: 'bg-indigo-50 text-indigo-600',
  Tools: 'bg-rose-50 text-rose-600',
}

const BADGE_STYLES = {
  Popular: 'bg-sky-50 text-sky-600',
  Versatile: 'bg-emerald-50 text-emerald-600',
  Fast: 'bg-orange-50 text-orange-600',
  'Full-Stack': 'bg-slate-100 text-slate-600',
  Standard: 'bg-emerald-50 text-emerald-600',
  'Top SQL': 'bg-sky-50 text-sky-600',
  Cache: 'bg-rose-50 text-rose-600',
  Ubiquitous: 'bg-amber-50 text-amber-700',
  Essential: 'bg-sky-50 text-sky-600',
  Robust: 'bg-slate-100 text-slate-600',
  Modern: 'bg-cyan-50 text-cyan-600',
  Containers: 'bg-blue-50 text-blue-600',
  Flexible: 'bg-emerald-50 text-emerald-600',
  Minimal: 'bg-slate-100 text-slate-600',
}

export default function TechCard({ tech, isAdded, onAdd }) {
  const categoryStyle = CATEGORY_STYLES[tech.category] || 'bg-gray-100 text-gray-600'
  const badgeStyle = BADGE_STYLES[tech.badge] || 'bg-gray-100 text-gray-600'

  return (
    <article className="bg-white rounded-2xl border border-gray-100 card-shadow p-5 flex flex-col transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <span className="h-11 w-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={tech.icon}
            alt={`${tech.name} logo`}
            className="h-6 w-6 object-contain"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </span>
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeStyle}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="font-display font-semibold text-lg text-ink mb-1.5">{tech.name}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{tech.description}</p>

      <div className="flex items-center flex-wrap gap-2 mb-4">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryStyle}`}>
          {tech.category}
        </span>
        <span className="text-xs font-medium text-gray-500 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">
          {tech.difficulty}
        </span>
        <span className="text-xs font-medium text-gray-700 flex items-center gap-1 ml-auto">
          <svg width="13" height="13" viewBox="0 0 20 20" fill="#F59E0B">
            <path d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.2 6-5.4-3-5.4 3 1.2-6L1.4 7.7l6-.7z" />
          </svg>
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          isAdded
            ? 'w-full rounded-xl py-2.5 text-sm font-semibold bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'w-full rounded-xl py-2.5 text-sm font-semibold bg-ink text-white hover:opacity-90 transition-opacity'
        }
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}
