import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Projects() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const r = await fetch(`${API}/projects`)
      const data = await r.json()
      setItems(data.data || [])
    } catch (e) {
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  const seed = async () => {
    try {
      await fetch(`${API}/seed-projects`, { method: 'POST' })
      await load()
    } catch {}
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading kicker="projects" title="Featured Work" subtitle="Production-grade platforms, pipelines and automation." />
        {loading ? (
          <p className="text-center text-gray-600">Loading projects…</p>
        ) : items.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600">No projects yet. Seed from resume?</p>
            <button onClick={seed} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Seed Projects</button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <article key={p._id} className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition">{p.title}</h3>
                <p className="mt-2 text-gray-700 text-sm">{p.summary}</p>
                {Array.isArray(p.tech) && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
