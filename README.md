# 🧱 Dev Stack Builder

**Dev Stack** is an interactive web app that helps developers explore frontend, backend,
database, and tooling technologies, and assemble them into a personal "stack" for their
next project — one technology per category, compared side by side.

## ✨ About the project

Browse a curated catalog of 15 technologies (React, Node.js, PostgreSQL, Docker, and
more), each with a rating, difficulty level, and category. Add any of them to **Your
Stack**, see them collected in a live sidebar, and remove them one at a time or all at
once — all backed by toast notifications so you always know what just happened.

## 🛠️ Technologies used

- **React 18** (with Hooks) — component structure and state management
- **Vite** — dev server and build tool
- **Tailwind CSS** — utility-first styling and the shared brand gradient theme
- **React-Toastify** — toast notifications for stack actions
- **JSON** — technology data, loaded at runtime via `fetch`, not hardcoded

## 🚀 Features

1. **Build-your-own stack** — Add any technology to "Your Stack" with one click; the
   button instantly becomes disabled and reads "✓ Added to Stack" so you always know
   what's already selected. Trying to add the same technology twice shows a warning
   toast instead of a duplicate entry.
2. **Fully responsive, gradient-themed UI** — A sticky navbar (with a dedicated mobile
   hamburger layout), a two-tone hero heading, and a technology grid that reflows from
   3 columns on desktop to 1 on mobile. The brand gradient (orange → pink → violet) is
   defined once in `tailwind.config.js` / `index.css` and reused everywhere.
3. **Real async data loading** — Technology data lives in `public/data/technologies.json`
   and is fetched at runtime with `fetch` inside a `useEffect`, complete with a loading
   spinner and an error state, instead of being imported as a hardcoded array.

## 📦 Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## 📁 Project structure

```
src/
  components/
    Navbar.jsx      # sticky navbar + mobile hamburger menu
    Hero.jsx         # two-tone gradient heading + illustration
    TechCard.jsx      # single technology card
    TechGrid.jsx      # responsive grid of TechCards
    YourStack.jsx     # sidebar: selected stack, remove / remove all
    Footer.jsx        # brand block, link groups, bottom bar
    Loader.jsx         # loading spinner
  App.jsx              # data fetching, stack state, toast wiring
  main.jsx
public/
  data/technologies.json   # technology dataset (fetched at runtime)
```

---

## 🧠 React questions

**What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly inside
JavaScript. Under the hood it compiles down to `React.createElement()` calls. It's used
because it makes component structure easy to read and write — you can see what the UI
will look like right next to the logic that drives it, instead of building elements
manually with function calls.

**What is the difference between props and state?**
Props are values passed *into* a component from its parent — they're read-only from the
component's own perspective, similar to function arguments. State is data a component
manages *itself*, and can change over time in response to user actions or events. In
this project, a `TechCard` receives `tech` and `isAdded` as props from `TechGrid`, while
`App` owns the `stack` state that changes every time something is added or removed.

**What does the useState hook do, and where did you use it in this project?**
`useState` lets a function component hold and update its own local state, and re-renders
the component whenever that state changes. It's used throughout the app — for example
`App.jsx` uses `useState` to track `technologies`, `stack`, `loading`, and `error`, and
`Navbar.jsx` uses it to track whether the mobile menu is `open`.

**What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects — code that reaches outside of React's rendering, like
data fetching, subscriptions, or timers — after a component renders. It was needed to
load the JSON data because fetching is an asynchronous side effect: it can't happen
during render itself, so `App.jsx` uses `useEffect` (with an empty dependency array) to
fetch `technologies.json` once when the component first mounts, and update state when
the response arrives.

**Why does every item in a .map() list need a unique key prop?**
The `key` prop helps React tell list items apart between renders, so it can figure out
exactly which items were added, removed, or reordered instead of re-rendering the whole
list from scratch. Without a stable, unique key, React can mismatch items and cause
bugs or wasted re-renders — in this project, each technology's own `id` field is used as
the key when mapping over the technology list and the stack list.

**What is conditional rendering? Show one place you used it (example: the empty stack
message).**
Conditional rendering means showing different UI depending on some condition, using
plain JavaScript (like ternaries or `&&`) inside JSX rather than a special templating
syntax. In `YourStack.jsx`, the component checks whether `stack.length === 0` — if it
is, it renders the "Your stack is empty. Add technologies to get started." message;
otherwise, it renders the list of selected items and the "Remove All" button.

**How do you pass data from a parent component to a child component, and how does a
child send something back to the parent?**
A parent passes data down to a child through props — for example `App.jsx` passes
`technologies`, `stackIds`, and `onAdd` down to `TechGrid`, which passes them further
down to each `TechCard`. For a child to send something *back* up, the parent passes a
function down as a prop, and the child calls that function (usually with some data as an
argument). In this project, `TechCard`'s "Add to Stack" button calls the `onAdd(tech)`
function it received as a prop, which runs `handleAdd` back in `App.jsx` and updates the
stack state there.
