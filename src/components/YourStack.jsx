export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length

  return (
    <aside className="lg:w-80 w-full lg:sticky lg:top-24 h-fit">
      <div className="bg-white rounded-2xl border border-gray-100 card-shadow p-5">
        <h3 className="font-display font-semibold text-lg text-ink">Your Stack</h3>
        <p className="text-sm text-gray-400 mb-4">
          {count} Technology {count === 1 ? 'Selected' : 'Selected'}
        </p>

        {count === 0 ? (
          <div className="py-10 text-center">
            <p className="text-sm text-gray-400">
              Your stack is empty. Add technologies to get started.
            </p>
          </div>
        ) : (
          <>
            <ul className="flex flex-col gap-3 mb-4">
              {stack.map((tech) => (
                <li
                  key={tech.id}
                  className="flex items-center gap-3 border border-gray-100 rounded-xl p-3"
                >
                  <span className="h-9 w-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      className="h-5 w-5 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-ink truncate">
                      {tech.name}
                    </span>
                    <span className="block text-xs text-gray-400">{tech.category}</span>
                  </span>
                  <button
                    onClick={() => onRemove(tech)}
                    aria-label={`Remove ${tech.name} from stack`}
                    className="text-gray-300 hover:text-rose-500 transition-colors shrink-0"
                  >
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 5l10 10M15 5L5 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={onRemoveAll}
              className="w-full rounded-xl py-2.5 text-sm font-semibold text-rose-500 border border-rose-200 hover:bg-rose-50 transition-colors"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  )
}
