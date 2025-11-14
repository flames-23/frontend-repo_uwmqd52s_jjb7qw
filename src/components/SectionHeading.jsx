export default function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {kicker && <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-2">{kicker}</p>}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-3">{subtitle}</p>}
    </div>
  )
}
