import SectionHeading from './SectionHeading'

const skills = [
  {
    title: 'Cloud',
    items: ['AWS (EC2, S3, Lambda, EKS, VPC, IAM, Route53, CloudFront, API Gateway)', 'Azure']
  },
  {
    title: 'Containerization',
    items: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'EKS']
  },
  {
    title: 'CI/CD',
    items: ['Jenkins', 'TeamCity', 'Octopus Deploy', 'GitHub Actions']
  },
  {
    title: 'IaC',
    items: ['Terraform', 'CloudFormation', 'AWS CDK', 'Ansible', 'OpenTofu']
  },
  {
    title: 'Observability',
    items: ['Datadog', 'Splunk', 'Prometheus', 'Grafana', 'CloudWatch']
  },
  {
    title: 'Programming',
    items: ['Python', 'SQL', 'Bash']
  },
  {
    title: 'Tools',
    items: ['Git & GitHub', 'Linux', 'JIRA', 'CloudHealth', 'CloudQuery', 'MS Server', 'FinOps', 'Web3 Infra']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading kicker="skills" title="Capabilities" subtitle="Cloud-native, automation-first skillset spanning infrastructure, pipelines and platforms." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(cat => (
            <div key={cat.title} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">{cat.title}</h3>
              <ul className="mt-3 space-y-1 text-gray-700">
                {cat.items.map(item => (
                  <li key={item} className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
