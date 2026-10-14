export const SERVICE_BANDS = [
  {
    id: 'managed-it',
    title: 'Managed IT Services',
    desc: 'Technical resources and operational support to help organizations maintain day-to-day IT operations.',
    tags: ['Desktop Support', 'Remote/Onsite', 'Monitoring', 'M365'],
    cta: 'Request IT Service',
    overview: 'Keep everyday technology dependable with structured support for users, endpoints and common business IT operations.',
    deliverables: ['End-user and desktop support', 'Endpoint setup and troubleshooting', 'Microsoft 365 user support', 'Remote or onsite support coordination'],
  },
  {
    id: 'infrastructure',
    title: 'IT Infrastructure',
    desc: 'Network, server, endpoint and data center support — from deployment to preventive maintenance.',
    tags: ['Network', 'Servers', 'Data Center', 'Endpoints'],
    cta: 'Request IT-Infra Proposal',
    overview: 'Plan, deploy and maintain the core systems that connect users, devices and business applications.',
    deliverables: ['Network and Wi-Fi deployment', 'Server and endpoint configuration', 'Infrastructure health checks', 'Technical documentation and handover'],
  },
  {
    id: 'cloud-security',
    title: 'Cloud & Cybersecurity',
    desc: 'Cloud solutions designed around your business requirements, backed by layered security practices.',
    tags: ['AWS', 'Azure', 'Endpoint Security', 'MFA'],
    cta: 'Request Cybersecurity Review',
    overview: 'Improve cloud and security operations through practical assessment, implementation and support aligned to your environment.',
    deliverables: ['Cloud environment setup and migration planning', 'Identity and access configuration', 'Endpoint protection coordination', 'Security and configuration reviews'],
  },
  {
    id: 'amc',
    title: 'Annual Maintenance Contracts',
    desc: 'Desktop, server, network and printer maintenance with scheduled health checks and vendor coordination.',
    tags: ['Preventive', 'Onsite', 'Remote'],
    cta: 'Request AMC Proposal',
    overview: 'Set a clear maintenance rhythm for business technology, with an agreed scope for preventive checks and issue coordination.',
    deliverables: ['Asset and environment review', 'Scheduled preventive maintenance', 'Issue logging and service coordination', 'Vendor and warranty follow-up'],
  },
  {
    id: 'projects',
    title: 'Technology Projects',
    desc: 'Office IT setup, network deployment, cloud migration and multi-location technology rollouts.',
    tags: ['Office Setup', 'Migration', 'Rollouts'],
    cta: 'Request IT Project',
    overview: 'Move technology initiatives from requirements to deployment through planned, documented implementation work.',
    deliverables: ['Office and workplace IT setup', 'Network and endpoint rollouts', 'Cloud migration support', 'Testing, documentation and handover'],
  },
  {
    id: 'procurement',
    title: 'IT Procurement',
    desc: 'Laptops, servers, networking equipment and software licenses, with vendor and warranty coordination.',
    tags: ['Hardware', 'Licenses', 'Asset Tagging'],
    cta: 'Request Procurement Support',
    overview: 'Coordinate technology purchasing around compatibility, business requirements and the planned deployment environment.',
    deliverables: ['Hardware and software requirement review', 'Product and vendor coordination', 'License and warranty tracking', 'Asset tagging and deployment planning'],
  },
];

export const RESOURCE_MODELS = [
  { id: 'dedicated', title: 'Dedicated IT Resources', desc: 'Dedicated professionals working for the client organization according to the agreed engagement model.' },
  { id: 'onsite', title: 'Onsite IT Resources', desc: "Technical professionals deployed at the client's premises." },
  { id: 'remote', title: 'Remote IT Resources', desc: 'Professionals supporting client environments remotely.' },
  { id: 'hybrid', title: 'Hybrid IT Resources', desc: 'Combination of onsite and remote support.' },
  { id: 'project-based', title: 'Project-Based Resources', desc: 'Professionals deployed for a defined technology project or implementation.' },
];

export const TECHNICAL_ROLES = [
  { title: 'Desktop Support Engineers', items: ['Windows support', 'Hardware troubleshooting', 'End-user & M365 support'] },
  { title: 'System Administrators', items: ['Windows Server, AD, DNS', 'Group policy, backup', 'Server monitoring'] },
  { title: 'Network Engineers', items: ['Routing & switching', 'LAN / WAN / Wi-Fi', 'Firewall & VPN'] },
  { title: 'Cloud Engineers', items: ['AWS & Azure', 'Cloud migration', 'Cloud administration'] },
  { title: 'Cybersecurity Professionals', items: ['Endpoint security', 'Identity & access', 'Security monitoring'] },
  { title: 'Infrastructure Engineers', items: ['Server & storage', 'Virtualization', 'Infra deployment'] },
  { title: 'Field Engineers', items: ['Onsite troubleshooting', 'Hardware deployment', 'Preventive maintenance'] },
  { title: 'IT Project Resources', items: ['Deployment engineers', 'Migration engineers', 'System integration'] },
];

export const DEPLOYMENT_PROCESS = [
  { step: '01', title: 'Understand', desc: "Understand the client's business, technology environment and requirements." },
  { step: '02', title: 'Source', desc: 'Identify suitable professionals from the RARMATRIX talent network.' },
  { step: '03', title: 'Screen', desc: 'Evaluate technical skills, experience and role suitability.' },
  { step: '04', title: 'Select', desc: 'Coordinate candidate interviews and client approval.' },
  { step: '05', title: 'Deploy', desc: 'Deploy the selected professional to the agreed environment.' },
  { step: '06', title: 'Support', desc: 'Maintain ongoing resource coordination and engagement support.' },
];

export const ENGAGEMENT_MODELS = [
  { title: 'Dedicated Resource', desc: 'A technical professional dedicated to the client.' },
  { title: 'Team Deployment', desc: 'Multiple RARMATRIX professionals assigned to a client environment.' },
  { title: 'Project-Based Engagement', desc: 'Technical team deployed for a defined project.' },
  { title: 'Managed Support', desc: 'RARMATRIX provides ongoing IT support according to the agreed scope.' },
  { title: 'AMC', desc: 'Annual IT maintenance and support.' },
  { title: 'On-Demand Technical Support', desc: 'Technical professionals deployed according to specific requirements.' },
];
