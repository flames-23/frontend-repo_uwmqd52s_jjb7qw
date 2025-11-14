import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Cloud-native DevOps Engineer with 3+ years designing, implementing and operating scalable, secure cloud infrastructure across 100+ accounts. Automation, reliability and observability focused. AWS Community Builder and Perplexity AI Fellow.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-6 border border-gray-100">
            <h3 className="font-semibold">Highlights</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
              <li>99.99% uptime platforms with seamless auto-scaling</li>
              <li>Production CI/CD with security gates and zero-downtime deploys</li>
              <li>ChatOps automation cutting provisioning from hours to seconds</li>
              <li>Web3 infra with managed blockchain and CDK</li>
            </ul>
          </div>
        </div>
      </section>
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-10 text-center text-sm text-gray-600">© {new Date().getFullYear()} Garvit Kulshrestha • Built with love in the cloud</footer>
    </div>
  )
}

export default App
