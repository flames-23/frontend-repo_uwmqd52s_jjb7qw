import SectionHeading from './SectionHeading'

const roles = [
  {
    company: 'Zynga Games',
    role: 'Cloud Engineer',
    period: "Jul'24 - Present",
    points: [
      'Owning cloud platforms and guardrails across multi-account AWS at scale',
      'Driving cost-optimized, reliable workloads with automation-first mindset',
    ],
  },
  {
    company: 'Euronext Solutions',
    role: 'Cloud Engineer',
    period: "Jun'22 - Jun'24",
    points: [
      'Built secure landing zones and automated pipelines across environments',
      'Standardized IaC modules and rollouts improving delivery speed and reliability',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading kicker="experience" title="Where I've Built at Scale" subtitle="High-impact roles focusing on reliability, automation and developer velocity." />
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((r) => (
            <div key={r.company} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{r.company}</h3>
                <span className="text-sm text-gray-500">{r.period}</span>
              </div>
              <p className="text-blue-700 font-medium mt-1">{r.role}</p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                {r.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
