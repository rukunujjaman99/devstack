import { useEffect, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Loader from './components/Loader.jsx'
import TechGrid from './components/TechGrid.jsx'
import YourStack from './components/YourStack.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Load the technology data from the JSON file (not hardcoded in the component).
  useEffect(() => {
    let isMounted = true

    fetch('/data/technologies.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load technologies')
        return res.json()
      })
      .then((data) => {
        if (isMounted) setTechnologies(data)
      })
      .catch((err) => {
        if (isMounted) setError(err.message)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const stackIds = useMemo(() => new Set(stack.map((t) => t.id)), [stack])

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  function handleRemove(tech) {
    setStack((prev) => prev.filter((t) => t.id !== tech.id))
    toast.info(`${tech.name} removed from your stack.`)
  }

  function handleRemoveAll() {
    setStack([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="technologies" className="max-w-7xl mx-auto px-5 md:px-8 pb-24">
        <div className="mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">
            Explore the <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="text-gray-500 mt-2">Pick one technology per category to build your ideal stack.</p>
        </div>

        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-center text-sm text-rose-500 py-16">
            Couldn't load technologies right now. Please refresh the page.
          </p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1 w-full">
              <TechGrid technologies={technologies} stackIds={stackIds} onAdd={handleAdd} />
            </div>
            <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        )}
      </section>

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={2800}
        newestOnTop
        theme="light"
      />
    </div>
  )
}
