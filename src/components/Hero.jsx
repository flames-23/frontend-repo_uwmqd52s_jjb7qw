import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-blue-600">Cloud Engineer • DevOps • AWS Community Builder</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Garvit Kulshrestha
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Designing, automating and operating scalable, secure cloud platforms across 100+ accounts. Kubernetes, IaC, CI/CD and observability at production scale.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition">View Projects</a>
            <a href="#contact" className="bg-white text-gray-900 px-5 py-3 rounded-lg shadow border hover:bg-gray-50 transition">Get in Touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
