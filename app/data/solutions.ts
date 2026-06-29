export interface Solution {
  id: number
  slug: string
  title: string
  shortDesc: string
  description: string
  icon: string
  color: string
  features: string[]
  image?: string
  content?: string
}

export const solutions: Solution[] = [
  {
    id: 1,
    slug: 'toll-management',
    title: 'Toll Management & Operation',
    shortDesc: 'End-to-end electronic toll collection, management, and long-term operations.',
    description: `ATT is the market leader in Electronic Toll Collection (ETC) in Bangladesh. We supply, install, and maintain state-of-the-art toll equipment, including lane processing systems, plaza servers, and central monitoring software. With decades of experience operating major toll plazas like Nalka-Hatikamrul-Banpara and Khan Jahan Ali Bridge, we handle millions in toll revenues efficiently and transparently.`,
    icon: 'CreditCard',
    color: 'from-blue-600 to-blue-800',
    image: '/smart_traffic_solution.png',
    content: `
      <h3>Transforming Highway Operations</h3>
      <p>ATT is the undisputed market leader in <strong>Electronic Toll Collection (ETC)</strong> in Bangladesh. We design, deploy, and maintain state-of-the-art toll equipment, including lane processing systems, plaza servers, and central monitoring software.</p>
      <ul>
        <li><strong>Electronic Toll Collection (ETC) equipment:</strong> Contactless RFID and smart card integration.</li>
        <li><strong>Plaza Server and Central Monitoring:</strong> High-availability architecture for uninterrupted operations.</li>
        <li><strong>Web-based online toll reporting:</strong> Real-time transparent revenue tracking.</li>
        <li><strong>Long-term plaza operations:</strong> End-to-end management with dedicated on-ground staff.</li>
      </ul>
      <p>With decades of experience operating major toll plazas like the Nalka-Hatikamrul-Banpara and Khan Jahan Ali Bridge, we ensure optimal throughput and handle millions in toll revenues efficiently and securely.</p>
    `,
    features: [
      'Electronic Toll Collection (ETC) equipment',
      'Plaza Server and Central Monitoring',
      'Web-based online toll reporting',
      'Lane Processing Systems',
      'Long-term plaza operations',
      'Hardware & software integration',
    ],
  },
  {
    id: 2,
    slug: 'ship-building',
    title: 'Ship Building, Navigation & Rescue',
    shortDesc: 'Comprehensive marine services, fleet operation, and ship building.',
    description: `Through our maritime divisions—Mehboob & Masood Navigation, Shams Navigation, and Engineer Mehboob Ship Builders—we offer extensive ship operation, cargo carrier services, and ship building. We own and operate a large fleet of inland cargo vessels and oil tankers, transporting essential commodities across Bangladesh's waterways and internationally to India and Myanmar.`,
    icon: 'Ship',
    color: 'from-cyan-600 to-teal-800',
    features: [
      'Cargo Vessel & Oil Tanker operations',
      'Ship building and manufacturing',
      'Ship rescue operations',
      'Inland & coastal freight forwarding',
      'Vessel charter and scheduled services',
      'Maritime safety equipment',
    ],
  },
  {
    id: 3,
    slug: 'weighing-management',
    title: 'Weighing Management',
    shortDesc: 'Advanced Weigh-in-Motion and static truck weighing scales.',
    description: `ATT designs and manufactures high-capacity weighing systems essential for infrastructure protection and logistics. Our portfolio includes 100+ Metric Ton Weighbridge scales, portable weigh pads, and sophisticated Weigh-in-Motion (WIM) systems integrated into major highways and bridges (like Bangabandhu Bridge) to prevent structural damage from overloaded vehicles.`,
    icon: 'Scale',
    color: 'from-green-600 to-emerald-800',
    achievements: [
      'Weigh-in-Motion (WIM) systems',
      '100 Metric Ton Static Truck Scales',
      'Portable Axle Weighing Scales',
      'Axle load data collection & surveying',
      'Integration with toll & security systems',
      'Local manufacturing & software development',
    ],
  } as any,
  {
    id: 4,
    slug: 'civil-work',
    title: 'Civil Work & Building Construction',
    shortDesc: 'Civil contractors, builders, and real estate developers for major infrastructure.',
    description: `ATT's civil engineering arm executes complex government and private infrastructure projects. From constructing approach roads and bridges in Purbachal New Town, to building schools, culverts, and undertaking extensive river bank protection works (e.g., Atai River), we bring robust engineering capabilities to national development.`,
    icon: 'Building2',
    color: 'from-orange-500 to-orange-700',
    features: [
      'Bridge & Culvert construction',
      'Highway and rural road development',
      'High-rise building construction',
      'River bank protection & dredging',
      'Real Estate development',
      'Government civil contracting (LGED, RAJUK)',
    ],
  },
  {
    id: 5,
    slug: 'access-control',
    title: 'Human & Vehicle Access Control',
    shortDesc: 'Intelligent access management for critical infrastructure and facilities.',
    description: `We secure critical facilities with advanced access control systems. Our solutions range from biometric turnstiles, speed lanes, and trilocks for human access (as deployed at the Bangladesh Secretariat) to automatic boom barriers, license plate recognition (LPR), and UHF RFID readers for vehicular access control at ports and commercial sites.`,
    icon: 'KeyRound',
    color: 'from-violet-600 to-purple-800',
    features: [
      'Biometric and RFID readers',
      'Speed lanes, trilocks, & full-height turnstiles',
      'Automatic boom barriers',
      'UHF RFID vehicle recognition',
      'License Plate Recognition (LPR)',
      'Under Vehicle Inspection Systems (UVIS)',
    ],
  },
  {
    id: 6,
    slug: 'cctv-surveillance',
    title: 'CCTV Surveillance & Security',
    shortDesc: 'Comprehensive video surveillance and perimeter security systems.',
    description: `ATT installs and maintains extensive CCTV surveillance networks for high-security environments like Chittagong Port Authority. Our offerings include IP and analog cameras, PTZ doom/bullet cameras, network switches, NVRs, and complete control room setups, ensuring 24/7 monitoring and perimeter protection for fencing, gates, and buildings.`,
    icon: 'Shield',
    color: 'from-red-600 to-rose-800',
    features: [
      'IP and Analog CCTV systems',
      'PTZ, Dome, and Bullet cameras',
      'Perimeter security and fencing',
      'Under Vehicle Inspection integration',
      'Central monitoring control rooms',
      'Network switches and wireless transmission',
    ],
  },
  {
    id: 7,
    slug: 'parking-management',
    title: 'Parking Management',
    shortDesc: 'Automated parking systems with slot-wise information and software integration.',
    description: `We offer complete Parking Management solutions designed to optimize space utilization and streamline vehicle flow. Our systems feature automated in-out parking gates, ticket dispensers, and integrated software that provides real-time slot-wise parking information, ideal for commercial buildings, airports, and urban parking facilities.`,
    icon: 'CarFront', // Need an icon, using a related one or just Car
    color: 'from-slate-600 to-slate-800',
    features: [
      'Automated In-Out parking gates',
      'Slot-wise parking information',
      'Integrated management software',
      'Ticket & card dispensers',
      'Integration with access control',
      'Revenue tracking & reporting',
    ],
  },
]
