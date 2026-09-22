An interactive web app that helps developers browse frontend, backend, database, and tooling technologies, and assemble them into a personal "stack" for their next project — one technology per category, compared side by side.

Technology used

React 18 (Hooks)
Vite
Tailwind CSS
React-Toastify
JSON (fetched at runtime, not hardcoded)

3 features

Build-your-own stack — add any technology with one click; the button instantly disables and reads "✓ Added to Stack," and trying to add a duplicate shows a warning toast instead of a duplicate entry.
Fully responsive, gradient-themed UI — sticky navbar with a proper mobile hamburger layout, two-tone gradient hero heading, and a technology grid that reflows from 3 columns on desktop to 1 on mobile, all sharing one gradient defined in a single place.
Real async data loading — technology data lives in technologies.json and is fetched at runtime inside a useEffect, with a genuine loading spinner and error state rather than a hardcoded array.
