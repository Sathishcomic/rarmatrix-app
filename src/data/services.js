export const SERVICE_BANDS = [
  {
    id: 'managed-it',
    title: 'Managed IT Services',
    desc: 'Technical resources and operational support to help organizations maintain day-to-day IT operations.',
    tags: ['Desktop Support', 'Remote/Onsite', 'Monitoring', 'M365'],
    cta: 'Request IT Service',
  },
  {
    id: 'infrastructure',
    title: 'IT Infrastructure',
    desc: 'Network, server, endpoint and data center support — from deployment to preventive maintenance.',
    tags: ['Network', 'Servers', 'Data Center', 'Endpoints'],
    cta: 'Request IT-Infra Proposal',
  },
  {
    id: 'cloud-security',
    title: 'Cloud & Cybersecurity',
    desc: 'Cloud solutions designed around your business requirements, backed by layered security practices.',
    tags: ['AWS', 'Azure', 'Endpoint Security', 'MFA'],
    cta: 'Request Cybersecurity Review',
  },
  {
    id: 'amc',
    title: 'Annual Maintenance Contracts',
    desc: 'Desktop, server, network and printer maintenance with scheduled health checks and vendor coordination.',
    tags: ['Preventive', 'Onsite', 'Remote'],
    cta: 'Request AMC Proposal',
  },
  {
    id: 'projects',
    title: 'Technology Projects',
    desc: 'Office IT setup, network deployment, cloud migration and multi-location technology rollouts.',
    tags: ['Office Setup', 'Migration', 'Rollouts'],
    cta: 'Request IT Project',
  },
  {
    id: 'procurement',
    title: 'IT Procurement',
    desc: 'Laptops, servers, networking equipment and software licenses, with vendor and warranty coordination.',
    tags: ['Hardware', 'Licenses', 'Asset Tagging'],
    cta: 'Request Procurement Support',
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
