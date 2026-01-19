export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
}

export const industries: Industry[] = [
  {
    slug: 'ecommerce',
    title: 'E-commerce',
    tagline: 'Tax and accounting solutions for online sellers',
    description:
      'E-commerce businesses face unique challenges including multi-state sales tax compliance, inventory accounting, and marketplace integrations. We have built a suite of services specifically designed for online retailers and digital entrepreneurs.',
    icon: 'shopping-cart',
    color: 'purple',
    challenges: [
      {
        title: 'Multi-State Sales Tax',
        description:
          'Economic nexus laws mean you may owe sales tax in dozens of states, each with different rules and deadlines.',
      },
      {
        title: 'Inventory Accounting',
        description:
          'Proper inventory valuation methods (FIFO, LIFO, weighted average) significantly impact your tax liability.',
      },
      {
        title: 'Marketplace Complexity',
        description:
          'Selling on Amazon, Shopify, eBay, and your own site creates complex revenue tracking and reconciliation needs.',
      },
      {
        title: 'Cost of Goods Sold',
        description:
          'Accurately calculating COGS including shipping, packaging, and fees is critical for profitability.',
      },
    ],
    solutions: [
      {
        title: 'Sales Tax Automation',
        description:
          'Automated multi-state sales tax compliance with registration, collection, and filing handled for you.',
      },
      {
        title: 'Inventory Management',
        description:
          'Proper inventory accounting methods optimized for your tax situation.',
      },
      {
        title: 'Platform Integrations',
        description:
          'Direct integrations with Shopify, Amazon, eBay, and other platforms for seamless data sync.',
      },
      {
        title: 'Profitability Analysis',
        description:
          'True profitability reporting by product, channel, and marketplace.',
      },
    ],
    testimonial: {
      quote:
        "IncSight helped us navigate sales tax in 23 states. What seemed impossible is now automated and I don't think about it anymore.",
      author: 'Jennifer Park',
      title: 'Founder, Park Essentials',
    },
    stats: [
      { value: '$180K+', label: 'Avg. Sales Tax Savings' },
      { value: '50+', label: 'E-commerce Clients' },
      { value: '23', label: 'States Covered' },
    ],
  },
  {
    slug: 'legal',
    title: 'Legal Firms',
    tagline: 'Accounting solutions built for lawyers',
    description:
      'Law firms have unique accounting requirements including trust accounting, client billing reconciliation, and partner distributions. Our team understands the specific needs of solo practitioners and law firms.',
    icon: 'scale',
    color: 'amber',
    challenges: [
      {
        title: 'Trust Accounting (IOLTA)',
        description:
          'Maintaining compliant client trust accounts with proper segregation and reporting.',
      },
      {
        title: 'Billable Hour Tracking',
        description:
          'Reconciling time billing systems with actual collections and revenue recognition.',
      },
      {
        title: 'Partner Distributions',
        description:
          'Complex partner compensation structures and quarterly distributions.',
      },
      {
        title: 'Bar Compliance',
        description:
          'Meeting state bar accounting and reporting requirements.',
      },
    ],
    solutions: [
      {
        title: 'Trust Account Management',
        description:
          'Compliant IOLTA accounting with three-way reconciliation and reporting.',
      },
      {
        title: 'Practice Management Integration',
        description:
          'Integration with Clio, MyCase, and other legal practice management software.',
      },
      {
        title: 'Partner Accounting',
        description:
          'K-1 preparation and partner capital account management.',
      },
      {
        title: 'Compliance Reporting',
        description:
          'Reports designed to meet state bar requirements and audit requests.',
      },
    ],
    testimonial: {
      quote:
        'Finally, an accountant who understands IOLTA compliance. IncSight has saved us countless hours and worry.',
      author: 'Robert Martinez',
      title: 'Partner, Martinez & Associates',
    },
    stats: [
      { value: '100%', label: 'Bar Audit Pass Rate' },
      { value: '40+', label: 'Law Firm Clients' },
      { value: '12', label: 'Years Experience' },
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare Professionals',
    tagline: 'Specialized solutions for medical practices',
    description:
      'Healthcare professionals face unique tax and accounting challenges from practice management to retirement planning. Our SimpliMD service is specifically designed for doctors, dentists, and medical professionals.',
    icon: 'stethoscope',
    color: 'green',
    challenges: [
      {
        title: 'Practice Structure',
        description:
          'Choosing the right entity structure (S-Corp, PC, LLC) for liability protection and tax efficiency.',
      },
      {
        title: 'Revenue Cycle',
        description:
          'Complex revenue recognition with insurance reimbursements, patient payments, and write-offs.',
      },
      {
        title: 'Student Loans',
        description:
          'Managing student loan repayment strategies alongside practice growth.',
      },
      {
        title: 'Retirement Planning',
        description:
          'Maximizing tax-advantaged retirement contributions for high-income professionals.',
      },
    ],
    solutions: [
      {
        title: 'Entity Optimization',
        description:
          'Structure your practice for maximum tax efficiency and liability protection.',
      },
      {
        title: 'Practice Management',
        description:
          'Integration with medical billing systems and practice management software.',
      },
      {
        title: 'Loan Strategies',
        description:
          'PSLF qualification tracking and refinancing analysis.',
      },
      {
        title: 'Retirement Maximization',
        description:
          'Cash balance plans, defined benefit plans, and mega backdoor Roth strategies.',
      },
    ],
    testimonial: {
      quote:
        "IncSight's SimpliMD program helped me save over $60,000 in taxes last year through their retirement strategies.",
      author: 'Dr. Amanda Chen',
      title: 'Private Practice Physician',
    },
    stats: [
      { value: '$60K+', label: 'Avg. Tax Savings' },
      { value: '75+', label: 'Healthcare Clients' },
      { value: '8+', label: 'Specialties Served' },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}
