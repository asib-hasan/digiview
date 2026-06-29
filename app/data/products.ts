export interface Product {
  id: number
  slug: string
  title: string
  shortDesc: string
  description: string
  icon: string
  color: string
  specs: string[]
  applications: string[]
  image?: string
  content?: string
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'counters-classifiers',
    title: 'Counters & Classifiers',
    shortDesc: 'Precision vehicle counting and classification devices for highways and urban roads.',
    description: `ATT's traffic counters and classifiers are the go-to instruments for transport authorities requiring accurate vehicle count and classification data. Using pneumatic road tubes, inductive loops, or infrared sensors, these portable and permanent devices record vehicle volumes, speeds, and vehicle class (motorcycle, car, truck, bus, etc.) with high accuracy. Data is stored internally and can be downloaded wirelessly or via USB for analysis using ATT's reporting software.`,
    icon: 'Activity',
    color: 'from-blue-500 to-blue-700',
    image: '/product.png',
    content: `
      <h3>Advanced Traffic Classification</h3>
      <p>ATT's traffic counters and classifiers are the go-to instruments for transport authorities requiring accurate vehicle count and classification data. Using pneumatic road tubes, inductive loops, or infrared sensors, these portable and permanent devices record vehicle volumes, speeds, and vehicle class with high accuracy.</p>
      <ul>
        <li><strong>Up to 16-class vehicle classification:</strong> Comprehensive data collection.</li>
        <li><strong>High Accuracy:</strong> Speed measurement accuracy ±2%.</li>
        <li><strong>Durable:</strong> IP67 weatherproof enclosure built for harsh environments.</li>
        <li><strong>Large Capacity:</strong> Internal memory for up to 1 million records.</li>
      </ul>
    `,
    specs: [
      'Up to 16-class vehicle classification',
      'Speed measurement accuracy ±2%',
      'Internal memory: up to 1 million records',
      'Battery life: 3–6 months',
      'IP67 weatherproof enclosure',
      'Bluetooth & USB data download',
    ],
    applications: [
      'Highway traffic surveys',
      'Urban intersection studies',
      'Axle load data collection',
      'Road design & capacity planning',
    ],
  },
  {
    id: 2,
    slug: 'axle-sensors-grout',
    title: 'Axle Sensors & Grout',
    shortDesc: 'High-accuracy piezoelectric axle sensors with specialized installation grout.',
    description: `Accurate axle detection is essential for weigh-in-motion (WIM) systems and traffic classification. ATT supplies high-performance piezoelectric strip sensors and quartz sensors designed for flush installation into the road surface. Paired with our specialized sensor grout compound, these sensors deliver long service life and consistent measurement accuracy even under heavy traffic and adverse weather conditions.`,
    icon: 'Gauge',
    color: 'from-amber-500 to-orange-700',
    specs: [
      'Piezoelectric & quartz sensor types',
      'Axle load accuracy: ±5% at highway speed',
      'Operating temperature: -40°C to +85°C',
      'Designed for flush pavement installation',
      'Compatible with major WIM controllers',
      'Grout cure time: 2–4 hours',
    ],
    applications: [
      'Weigh-in-motion systems',
      'Vehicle classification',
      'Bridge load monitoring',
      'Toll enforcement',
    ],
    image: '/smart_traffic_solution.png',
  },
  {
    id: 3,
    slug: 'portable-axle-weight',
    title: 'Portable Axle Weight',
    shortDesc: 'Rugged portable weigh pads for rapid on-site axle load enforcement.',
    description: `For transport authorities and enforcement agencies that need to conduct axle load checks anywhere on the road network, ATT's portable axle weigh pads provide a reliable and easy-to-deploy solution. The lightweight, low-profile pads can be placed directly on the road surface. Vehicles drive over them at low speed, and axle weights are instantly displayed on the connected display unit, enabling rapid enforcement action against overloaded vehicles.`,
    icon: 'Scale',
    color: 'from-green-500 to-emerald-700',
    specs: [
      'Capacity: up to 30 tonnes per axle',
      'Accuracy: ±1% of reading',
      'Weighing at speeds up to 5 km/h',
      'Pad weight: approx. 12 kg each',
      'Wireless display unit included',
      'Rechargeable battery: 8+ hours operation',
    ],
    applications: [
      'Roadside enforcement checks',
      'Port & industrial facility weighing',
      'Construction site vehicle monitoring',
      'Research & survey programs',
    ],
    image: '/projects/weigh-bridge.png',
  },
  {
    id: 4,
    slug: 'access-control-security',
    title: 'Access Control & Security Products',
    shortDesc: 'Complete range of hardware for intelligent access control and perimeter security.',
    description: `ATT supplies a comprehensive range of access control hardware including RFID card readers, biometric terminals, electric strikes, magnetic locks, automatic boom barriers, and vehicle bollards. All products are selected for proven reliability in the Bangladesh climate and integrate with industry-standard access control software platforms. Whether you need to secure a single door or an entire industrial complex, ATT provides the right hardware solution.`,
    icon: 'Lock',
    color: 'from-violet-500 to-purple-700',
    specs: [
      'RFID readers: 125kHz & 13.56MHz',
      'Biometric: fingerprint & face recognition',
      'Boom barriers: 3m to 6m arm length',
      'IP65 rated for outdoor installation',
      'RS485 & TCP/IP communication',
      'Fail-safe & fail-secure options',
    ],
    applications: [
      'Office & commercial buildings',
      'Industrial facilities & warehouses',
      'Government & embassy compounds',
      'Parking management systems',
    ],
    image: '/slider/hero_access_security.png',
  },
  {
    id: 5,
    slug: 'traffic-products',
    title: 'Traffic Products',
    shortDesc: 'Road safety and traffic management equipment for highways and urban roads.',
    description: `ATT's range of traffic products covers the essential tools for road safety and traffic management. Our portfolio includes portable and fixed variable message signs, traffic signal controllers, radar speed signs, LED warning lights, and road studs. These products are designed to communicate critical information to drivers, helping reduce accidents and improve traffic flow on Bangladesh's rapidly growing road network.`,
    icon: 'AlertTriangle',
    color: 'from-yellow-500 to-amber-700',
    specs: [
      'LED Variable Message Signs (solar powered)',
      'Radar Speed Feedback Signs',
      'Traffic signal LED modules',
      'Solar-powered road studs',
      'Portable warning light systems',
      'Dynamic speed limit signs',
    ],
    applications: [
      'Highway safety zones',
      'Road work zones',
      'School zone speed control',
      'Intersection management',
    ],
    image: '/slider/hero_traffic_system.png',
  },
  {
    id: 6,
    slug: 'wim-controllers',
    title: 'WIM Controllers',
    shortDesc: 'High-performance Weigh-in-Motion controllers for static and dynamic applications.',
    description: `The WIM controller is the intelligent heart of any weigh-in-motion system. ATT supplies advanced WIM controller units that process signals from piezoelectric or quartz sensors to calculate per-axle and gross vehicle weights at traffic speed. Our controllers support multi-sensor configurations for improved accuracy and integrate with enforcement cameras, traffic light systems, and central reporting platforms. Available in portable and permanently installed variants.`,
    icon: 'Cpu',
    color: 'from-sky-500 to-cyan-700',
    specs: [
      'Dynamic WIM accuracy: class B+ (COST 323)',
      'Up to 8 sensor inputs',
      'Speed range: 5–200 km/h',
      'Integrated vehicle classifier',
      'RS232, RS485, Ethernet output',
      'Violation image capture trigger',
    ],
    applications: [
      'Highway WIM enforcement stations',
      'Bridge load monitoring',
      'Toll plazas (weight-based tolling)',
      'Research & pavement studies',
    ],
    image: '/product.png',
  },
  {
    id: 7,
    slug: 'electronic-equipment-pumps',
    title: 'Electronic Equipment & Pumps',
    shortDesc: 'Industrial electronic components, UPS systems, and pumping equipment.',
    description: `Beyond traffic and tolling systems, ATT supplies a range of industrial electronic equipment including UPS systems, industrial power supplies, voltage stabilizers, and pumping equipment for water management and industrial applications. Our electronics sourcing expertise ensures that clients receive quality products from reputable manufacturers, backed by ATT's local after-sales support and maintenance services.`,
    icon: 'Zap',
    color: 'from-red-500 to-rose-700',
    specs: [
      'UPS systems: 1kVA to 200kVA',
      'Industrial power supplies',
      'Voltage stabilizers & regulators',
      'Submersible & centrifugal pumps',
      'Solar-compatible charge controllers',
      'Generator synchronization panels',
    ],
    applications: [
      'Toll plaza power backup',
      'Water treatment facilities',
      'Industrial process control',
      'Remote site power management',
    ],
    image: '/service.png',
  },
  {
    id: 8,
    slug: 'solar-system',
    title: 'Solar System',
    shortDesc: 'Off-grid and hybrid solar power systems for remote traffic and toll infrastructure.',
    description: `Many traffic monitoring and toll collection sites are located far from the main electricity grid. ATT's solar power systems provide reliable, maintenance-free power for traffic counters, WIM systems, variable message signs, and CCTV cameras. Our systems include high-efficiency solar panels, battery banks, charge controllers, and inverters, all pre-engineered for the specific power demands of the installed equipment and the solar irradiance at the site location.`,
    icon: 'Sun',
    color: 'from-orange-400 to-yellow-600',
    specs: [
      'Panel capacity: 50W to 5kW per system',
      'Battery bank: GEL or LiFePO4 options',
      'Autonomy: 3–7 days without sun',
      'MPPT charge controller included',
      'Remote monitoring via GSM/GPRS',
      'IEC 61215 certified panels',
    ],
    applications: [
      'Remote traffic counting stations',
      'Solar-powered speed signs',
      'Off-grid CCTV systems',
      'Solar toll booths',
    ],
    image: '/slider/hero_traffic_system.png',
  },
  {
    id: 9,
    slug: 'remote-outdoor-display',
    title: 'Remote Outdoor Display',
    shortDesc: 'High-brightness LED displays for outdoor traffic information and messaging.',
    description: `ATT's range of remote outdoor LED display units are engineered for clear visibility even in direct sunlight. Used as variable message signs, speed displays, vehicle count displays, and toll rate boards, these units communicate real-time information to drivers and operators. With rugged aluminum enclosures, IP65 protection, and automatic brightness control, our outdoor displays deliver reliable performance in Bangladesh's tropical climate.`,
    icon: 'Monitor',
    color: 'from-indigo-500 to-blue-700',
    specs: [
      'Brightness: up to 8,000 nits',
      'Pixel pitch: 10mm, 16mm, 20mm options',
      'IP65 weatherproof aluminum enclosure',
      'RS485 & wireless (4G/WiFi) control',
      'Automatic brightness adjustment',
      'Operating temperature: -20°C to +60°C',
    ],
    applications: [
      'Variable message signs',
      'Speed limit & advisory displays',
      'Toll rate information boards',
      'Queue length indicators',
    ],
    image: '/slider/hero_toll_collection.png',
  },
]
