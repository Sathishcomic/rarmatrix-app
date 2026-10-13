// NAV_LINKS: website navigation map. Each label routes to a specific page and the dropdowns
// point to specific section anchors inside the Services and Solutions pages.
export const NAV_LINKS = [
  {
    label: 'Services',
    to: '/services',
    dropdown: [
      { title: 'Managed IT Services', desc: 'Desktop, remote & onsite support', to: '/services#managed-it' },
      { title: 'IT Infrastructure', desc: 'Network, server & endpoint', to: '/services#infrastructure' },
      { title: 'Cloud & Cybersecurity', desc: 'AWS, Azure, endpoint security', to: '/services#cloud-security' },
      { title: 'AMC', desc: 'Annual maintenance contracts', to: '/services#amc' },
      { title: 'IT Procurement', desc: 'Hardware, licenses, assets', to: '/services#procurement' },
    ],
  },
  {
    label: 'Solutions',
    to: '/solutions',
    dropdown: [
      { title: 'Dedicated IT Resources', desc: 'Engaged for your organization', to: '/solutions#dedicated' },
      { title: 'Onsite / Remote / Hybrid', desc: 'Flexible deployment models', to: '/solutions#flexible' },
      { title: 'Project-Based Resources', desc: 'Defined-scope engagements', to: '/solutions#project-based' },
      { title: 'Technology Projects', desc: 'Office setup to cloud migration', to: '/projects' },
    ],
  },
  { label: 'Industries', to: '/industries' },
  { label: 'Our Works', to: '/projects' },
  { label: 'Careers', to: '/careers' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

// FOOTER_LINKS: footer quick links to company pages and business actions. Update labels here
// whenever the business wants new content, CTAs or page destinations.
export const FOOTER_LINKS = {
  services: ['IT Staffing', 'Managed IT', 'Infrastructure', 'Networking', 'Cloud', 'Cybersecurity', 'AMC', 'IT Projects', 'IT Procurement'],
  industries: ['IT/ITES', 'Manufacturing', 'Automotive', 'Healthcare', 'BFSI', 'GCC', 'Retail', 'Logistics', 'Education', 'SMEs'],
  company: [
    { label: 'About', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Our Works', to: '/projects' },
    { label: 'Resources', to: '/resources' },
    { label: 'Contact', to: '/contact' },
  ],
  business: [
    { label: 'Request IT Resource', to: '/request-resource' },
    { label: 'Talk to Our Team', to: '/contact' },
    { label: 'Request AMC', to: '/contact' },
    { label: 'Start a Project', to: '/start-project' },
  ],
};
