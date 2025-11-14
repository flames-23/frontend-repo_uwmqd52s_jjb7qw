import { useState } from 'react'
import SectionHeading from './SectionHeading'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const r = await fetch(`${API}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (r.ok) {
        setStatus('Thanks! I will get back to you shortly.')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (e) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading kicker="contact" title="Let’s Build Together" subtitle="Reach out for opportunities, collaborations or just a good cloud chat." />
        <form onSubmit={submit} className="mx-auto max-w-xl bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 gap-4">
            <input value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} placeholder="Name" className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" required />
            <input value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} type="email" placeholder="Email" className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" required />
            <textarea value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} placeholder="Message" rows="5" className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" required />
            <button type="submit" className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition">Send Message</button>
            {status && <p className="text-sm text-gray-700">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
