export interface Blog {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
}

export const blogs: Blog[] = [
  {
    id: 1,
    slug: 'future-of-electronic-toll-collection',
    title: 'The Future of Electronic Toll Collection in Bangladesh',
    excerpt: 'How modern ETC systems are reducing congestion and improving highway efficiency across the country.',
    content: `
      <p>As Bangladesh's highway infrastructure rapidly expands, the need for efficient traffic management has never been greater. Traditional manual toll collection methods often lead to severe bottlenecks, especially during peak holiday seasons. This is where Electronic Toll Collection (ETC) steps in as a game-changer.</p>
      
      <p>ETC systems utilize RFID technology and high-speed data processing to allow vehicles to pass through toll plazas without stopping. At Asian Traffic Technologies (ATT), we have pioneered the implementation of these systems across major national highways. Our recent deployments have shown a remarkable 60% reduction in average wait times at toll plazas.</p>
      
      <h3>Key Benefits of Modern ETC</h3>
      <ul>
        <li><strong>Reduced Congestion:</strong> Continuous vehicle flow prevents long queues from forming.</li>
        <li><strong>Environmental Impact:</strong> Less idling means significantly reduced greenhouse gas emissions.</li>
        <li><strong>Data Insights:</strong> Real-time traffic data helps authorities plan better road maintenance and expansion.</li>
        <li><strong>Revenue Security:</strong> Automated digital payments reduce revenue leakage and operational costs.</li>
      </ul>
      
      <p>Looking ahead, the integration of ETC with smart city networks and weigh-in-motion systems will create a fully interconnected transportation ecosystem. As the market leader enjoying an 80% share in this sector, ATT remains committed to bringing these world-class technologies to Bangladesh.</p>
    `,
    author: 'ATT Editorial Team',
    date: 'May 15, 2026',
    category: 'Technology',
    image: '/projects/toll-plaza.png',
  },
  {
    id: 2,
    slug: 'importance-of-weigh-in-motion',
    title: 'Why Weigh-In-Motion Systems Are Crucial for Highway Lifespan',
    excerpt: 'Overloaded vehicles are the silent destroyers of road infrastructure. Discover how WIM technology protects our highways.',
    content: `
      <p>A significant challenge facing national highway networks worldwide is the premature degradation of pavement caused by overloaded commercial vehicles. In Bangladesh, where freight transport relies heavily on roads, this issue is particularly acute.</p>
      
      <p>Weigh-In-Motion (WIM) technology offers a dynamic solution. Unlike static weighbridges that require trucks to stop—causing delays and logistical headaches—WIM systems measure the axle weights and gross vehicle weights as vehicles drive over sensors embedded in the road at normal highway speeds.</p>
      
      <h3>How WIM Technology Works</h3>
      <p>Modern WIM systems utilize piezoelectric sensors, quartz sensors, or bending plates installed flush with the road surface. When a vehicle passes over, the system instantly calculates the load on each axle. If an overload is detected, integrated License Plate Recognition (LPR) cameras capture the vehicle's details for enforcement action.</p>
      
      <p>ATT has successfully installed numerous WIM systems, including the critical Axle Load Control Station in Sitakunda. By enforcing weight limits automatically, these systems play a pivotal role in extending the lifespan of our roads and bridges, ultimately saving billions of Taka in premature maintenance costs.</p>
    `,
    author: 'Engineering Dept',
    date: 'April 28, 2026',
    category: 'Infrastructure',
    image: '/projects/weigh-bridge.png',
  },
  {
    id: 3,
    slug: 'advanced-cctv-port-security',
    title: 'Enhancing Port Security with Advanced CCTV Surveillance',
    excerpt: 'A look into how integrated surveillance systems are securing critical national assets like the Chittagong Port.',
    content: `
      <p>Seaports are the lifeblood of international trade, handling massive volumes of cargo daily. Ensuring the security of these sprawling, complex environments requires more than just high fences and guards; it requires intelligent, integrated surveillance.</p>
      
      <p>At the Chittagong Port Authority, ATT has implemented state-of-the-art CCTV surveillance systems designed to monitor vast areas in real-time. These aren't just standard cameras; they are high-definition, PTZ (Pan-Tilt-Zoom) units equipped with night vision and integrated with advanced video analytics.</p>
      
      <h3>Features of Modern Port Surveillance</h3>
      <ul>
        <li><strong>Automatic Number Plate Recognition (ANPR):</strong> Tracking every vehicle that enters and exits the port gates.</li>
        <li><strong>Under-Vehicle Inspection:</strong> Scanning the chassis of trucks for contraband or security threats without halting traffic.</li>
        <li><strong>Perimeter Protection:</strong> Automated alerts if unauthorized personnel breach secure zones.</li>
      </ul>
      
      <p>By providing a comprehensive view of operations, these systems not only enhance security but also improve operational efficiency, helping port authorities track cargo movement and resolve logistical bottlenecks swiftly.</p>
    `,
    author: 'Security Systems Division',
    date: 'March 10, 2026',
    category: 'Security',
    image: '/projects/cctv.png',
  }
]
