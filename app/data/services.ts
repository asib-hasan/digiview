export interface Service {
  id: number
  slug: string
  title: string
  shortDesc: string
  description: string
  icon: string
  color: string
  highlights: string[]
  image?: string
  content?: string
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'installation',
    title: 'Installation',
    shortDesc: 'Professional installation of traffic, toll, and security systems by certified engineers.',
    description: `ATT's installation teams bring decades of experience installing complex traffic and toll infrastructure across Bangladesh. Our teams follow strict quality procedures ensuring every installation meets the highest standards while minimizing disruption to ongoing traffic operations.`,
    icon: 'Wrench',
    color: 'from-blue-600 to-blue-800',
    image: '/service.png',
    content: `
      <h3>Expert Installation & Commissioning</h3>
      <p>ATT's installation teams bring decades of experience installing complex traffic and toll infrastructure across Bangladesh. Our teams follow strict quality procedures ensuring every installation meets the highest standards while minimizing disruption to ongoing traffic operations.</p>
      <ul>
        <li><strong>Certified Teams:</strong> Highly trained and certified field engineers.</li>
        <li><strong>Minimal Disruption:</strong> Coordinated civil work and cable management.</li>
        <li><strong>Full Documentation:</strong> Comprehensive as-built documentation provided upon commissioning.</li>
      </ul>
    `,
    highlights: ['Site survey & engineering', 'Civil work coordination', 'Certified field teams', 'Cable management', 'System commissioning', 'As-built documentation'],
  },
  {
    id: 2,
    slug: 'maintenance',
    title: 'Maintenance',
    shortDesc: 'Preventive and corrective maintenance contracts to keep your systems running 24/7.',
    description: `ATT offers comprehensive Annual Maintenance Contracts (AMC) that include scheduled preventive maintenance visits, 24/7 emergency response, spare parts management, and performance reporting to maximize system uptime.`,
    icon: 'Settings',
    color: 'from-green-600 to-emerald-800',
    highlights: ['Annual Maintenance Contracts', 'Preventive maintenance schedules', '24/7 emergency response', 'Spare parts management', 'Remote diagnostics', 'Monthly reporting'],
  },
  {
    id: 3,
    slug: 'civil-construction',
    title: 'Civil Contractors & Builders',
    shortDesc: 'Expert civil engineering and construction for roads, bridges, and government infrastructure.',
    description: `ATT's Civil Works division undertakes large-scale construction projects including bridges, culverts, roads, and high-rise buildings. We have successfully completed structural projects for RAJUK, LGED, RHD, and various Port Authorities across Bangladesh.`,
    icon: 'Building2',
    color: 'from-amber-500 to-orange-700',
    highlights: ['Bridge & Road Construction', 'Government infrastructure projects', 'Real estate development', 'River bank protection', 'Educational facilities construction', 'Turnkey project delivery'],
  },
  {
    id: 4,
    slug: 'ship-rescue-system',
    title: 'Ship Rescue System',
    shortDesc: "Marine safety and ship rescue systems for Bangladesh's waterways and ports.",
    description: `ATT supplies and installs ship rescue and marine safety equipment for vessel operators, port authorities, and the Bangladesh Coast Guard. All products comply with international maritime regulations.`,
    icon: 'Anchor',
    color: 'from-cyan-600 to-teal-800',
    highlights: ['Life-saving apparatus', 'Distress signaling systems', 'Emergency communication', 'SOLAS-compliant products', 'Installation & commissioning', 'Crew training support'],
  },
  {
    id: 5,
    slug: 'cargo-vessel',
    title: 'Cargo Vessel',
    shortDesc: "Cargo transportation services across Bangladesh's inland waterways.",
    description: `ATT operates cargo vessels providing reliable freight transport across Bangladesh's inland waterway network, offering charter and scheduled services to manufacturers, traders, and government agencies.`,
    icon: 'Ship',
    color: 'from-slate-600 to-slate-800',
    highlights: ['Inland waterway transport', 'Charter & scheduled services', 'Experienced licensed crew', 'Cargo safety protocols', 'Competitive freight rates', 'Reliable schedules'],
  },
  {
    id: 6,
    slug: 'oil-tanker',
    title: 'Oil Tanker',
    shortDesc: 'Certified oil tanker operations for petroleum product transportation.',
    description: `ATT operates certified oil tanker vessels for the safe transportation of petroleum products including diesel, furnace oil, and lubricants across Bangladesh's waterways, meeting all regulatory requirements.`,
    icon: 'Fuel',
    color: 'from-red-600 to-rose-800',
    highlights: ['Petroleum product transport', 'Certified tank vessels', 'Spill prevention systems', 'Regulatory compliance', 'Insurance & documentation', 'Port coordination'],
  },
  {
    id: 7,
    slug: 'shams-navigation',
    title: 'Shams Navigation, Carrier',
    shortDesc: 'Carrier and navigation services for commercial freight movement across Bangladesh.',
    description: `Shams Navigation is ATT's dedicated carrier service brand providing freight forwarding and navigation services, leveraging our fleet and deep knowledge of Bangladesh's waterway network.`,
    icon: 'Navigation',
    color: 'from-indigo-600 to-blue-800',
    highlights: ['Freight forwarding', 'Full cargo management', 'Port handling & documentation', 'Last-mile delivery', 'Multi-modal transport', 'Real-time tracking'],
  },
]
