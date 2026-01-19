export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  cta: {
    title: string;
    description: string;
  };
}

export const services: Service[] = [
  {
    slug: 'tax-planning',
    title: 'Tax Planning & Strategy',
    tagline: 'Proactive strategies to minimize your tax burden',
    description:
      'Unlike reactive tax preparation, our proactive tax planning approach helps you make strategic decisions throughout the year. We identify opportunities to legally reduce your tax liability before tax season arrives.',
    icon: 'calculator',
    features: [
      {
        title: 'Entity Structure Optimization',
        description:
          'Evaluate whether your current business structure (LLC, S-Corp, C-Corp) is optimized for tax efficiency.',
      },
      {
        title: 'Retirement Planning',
        description:
          'Implement tax-advantaged retirement strategies like SEP IRAs, Solo 401(k)s, and defined benefit plans.',
      },
      {
        title: 'Quarterly Tax Projections',
        description:
          'Stay ahead of your tax obligations with regular projections and estimated payment recommendations.',
      },
      {
        title: 'Deduction Maximization',
        description:
          'Identify and document every legitimate business deduction to minimize taxable income.',
      },
      {
        title: 'Income Timing Strategies',
        description:
          'Strategic timing of income and expenses to optimize your tax position across years.',
      },
      {
        title: 'Tax Credit Identification',
        description:
          'Uncover overlooked tax credits including R&D credits, work opportunity credits, and more.',
      },
    ],
    benefits: [
      'Reduce your effective tax rate by 15-30%',
      'No surprises at tax time',
      'Year-round expert guidance',
      'Audit-ready documentation',
      'Strategic business decisions',
    ],
    process: [
      {
        step: 1,
        title: 'Discovery Call',
        description:
          'We review your current tax situation and identify immediate opportunities.',
      },
      {
        step: 2,
        title: 'Tax Analysis',
        description:
          'Deep dive into your financials to create a comprehensive tax strategy.',
      },
      {
        step: 3,
        title: 'Strategy Presentation',
        description:
          'Present actionable recommendations with projected tax savings.',
      },
      {
        step: 4,
        title: 'Implementation',
        description:
          'Execute the strategy with ongoing monitoring and adjustments.',
      },
    ],
    cta: {
      title: 'Start Saving on Taxes Today',
      description:
        'Schedule a free consultation to discover how much you could save with proactive tax planning.',
    },
  },
  {
    slug: 'tax-preparation',
    title: 'Tax Preparation',
    tagline: 'Expert preparation with maximum deductions',
    description:
      'Our tax preparation service goes beyond simply filing forms. We ensure every legitimate deduction is captured while maintaining audit-ready documentation and compliance with all federal and state requirements.',
    icon: 'file-text',
    features: [
      {
        title: 'Business Tax Returns',
        description:
          'Complete preparation of partnership, S-Corp, C-Corp, and sole proprietor returns.',
      },
      {
        title: 'Personal Tax Returns',
        description:
          'Individual tax return preparation coordinated with your business filings.',
      },
      {
        title: 'Multi-State Filing',
        description:
          'Handle complex multi-state tax obligations for businesses operating across state lines.',
      },
      {
        title: 'Amended Returns',
        description:
          'Correct errors or claim missed deductions from previous years.',
      },
      {
        title: 'Extension Management',
        description:
          'File extensions and manage deadlines to avoid penalties.',
      },
      {
        title: 'IRS Correspondence',
        description:
          'Handle notices and communications with tax authorities on your behalf.',
      },
    ],
    benefits: [
      'Maximize every deduction',
      'Minimize audit risk',
      'Multi-state expertise',
      'Year-round support',
      'Electronic filing included',
    ],
    process: [
      {
        step: 1,
        title: 'Document Collection',
        description:
          'Secure portal to upload your tax documents at your convenience.',
      },
      {
        step: 2,
        title: 'Review & Preparation',
        description:
          'Our team prepares your returns with attention to every detail.',
      },
      {
        step: 3,
        title: 'Client Review',
        description:
          'Review your returns with us and ask any questions.',
      },
      {
        step: 4,
        title: 'Filing & Confirmation',
        description:
          'E-file your returns and receive confirmation of acceptance.',
      },
    ],
    cta: {
      title: 'Get Your Taxes Done Right',
      description:
        'Let our experts handle your tax preparation while you focus on your business.',
    },
  },
  {
    slug: 'bookkeeping',
    title: 'Bookkeeping & Accounting',
    tagline: 'Clean books for informed decisions',
    description:
      'Accurate, up-to-date books are the foundation of good business decisions. Our bookkeeping service provides real-time visibility into your finances with monthly reconciliation, financial statements, and cash flow tracking.',
    icon: 'book-open',
    features: [
      {
        title: 'Monthly Reconciliation',
        description:
          'Bank and credit card accounts reconciled monthly to ensure accuracy.',
      },
      {
        title: 'Financial Statements',
        description:
          'Regular profit & loss statements and balance sheets delivered on schedule.',
      },
      {
        title: 'Cash Flow Tracking',
        description:
          'Monitor your cash position with real-time tracking and projections.',
      },
      {
        title: 'Expense Categorization',
        description:
          'Proper categorization of all transactions for tax optimization.',
      },
      {
        title: 'Accounts Receivable',
        description:
          'Track outstanding invoices and manage collections efficiently.',
      },
      {
        title: 'Accounts Payable',
        description:
          'Manage vendor payments and maintain good supplier relationships.',
      },
    ],
    benefits: [
      'Real-time financial visibility',
      'Tax-ready books year-round',
      'Informed decision making',
      'Reduced accounting costs',
      'Audit-ready records',
    ],
    process: [
      {
        step: 1,
        title: 'System Setup',
        description:
          'Connect your accounts and set up your chart of accounts.',
      },
      {
        step: 2,
        title: 'Historical Cleanup',
        description:
          'Clean up and organize any backlogged transactions.',
      },
      {
        step: 3,
        title: 'Ongoing Management',
        description:
          'Regular reconciliation and reporting on your schedule.',
      },
      {
        step: 4,
        title: 'Monthly Review',
        description:
          'Video review of your financials with actionable insights.',
      },
    ],
    cta: {
      title: 'Get Your Books in Order',
      description:
        'Start with clean, accurate books that make tax time painless.',
    },
  },
  {
    slug: 'payroll',
    title: 'Payroll Services',
    tagline: 'Hassle-free payroll processing',
    description:
      'Our comprehensive payroll service handles everything from processing to tax filings. Pay your employees and contractors accurately and on time while we manage compliance with federal, state, and local requirements.',
    icon: 'users',
    features: [
      {
        title: 'Automated Processing',
        description:
          'Set up recurring payroll that runs automatically on your schedule.',
      },
      {
        title: 'Tax Filings Included',
        description:
          'All federal, state, and local payroll tax filings handled automatically.',
      },
      {
        title: 'Direct Deposit',
        description:
          'Fast, secure direct deposits to employee bank accounts.',
      },
      {
        title: 'Contractor Payments',
        description:
          'Pay 1099 contractors and generate year-end tax forms.',
      },
      {
        title: 'Benefits Administration',
        description:
          'Manage health insurance, retirement, and other benefit deductions.',
      },
      {
        title: 'Employee Portal',
        description:
          'Self-service portal for employees to access pay stubs and W-2s.',
      },
    ],
    benefits: [
      'Never miss a deadline',
      'Reduce payroll errors',
      'Stay compliant',
      'Save admin time',
      'Happy employees',
    ],
    process: [
      {
        step: 1,
        title: 'Setup & Migration',
        description:
          'Set up your payroll system and migrate existing employee data.',
      },
      {
        step: 2,
        title: 'Configure Benefits',
        description:
          'Set up deductions for taxes, benefits, and retirement.',
      },
      {
        step: 3,
        title: 'Process Payroll',
        description:
          'Run payroll on your schedule with automated tax calculations.',
      },
      {
        step: 4,
        title: 'File & Report',
        description:
          'All tax filings and reports handled automatically.',
      },
    ],
    cta: {
      title: 'Simplify Your Payroll',
      description:
        'Let us handle payroll so you can focus on growing your business.',
    },
  },
  {
    slug: 'cfo-advisory',
    title: 'CFO & Business Advisory',
    tagline: 'Strategic financial guidance for growth',
    description:
      'Get CFO-level financial guidance without the full-time cost. Our advisory services help you make data-driven decisions, plan for growth, and navigate complex financial challenges with confidence.',
    icon: 'trending-up',
    features: [
      {
        title: 'Financial Forecasting',
        description:
          'Build accurate projections for revenue, expenses, and cash flow.',
      },
      {
        title: 'KPI Dashboards',
        description:
          'Real-time dashboards tracking the metrics that matter to your business.',
      },
      {
        title: 'Growth Strategy',
        description:
          'Financial planning and analysis to support sustainable growth.',
      },
      {
        title: 'Pricing Optimization',
        description:
          'Analyze margins and optimize pricing for maximum profitability.',
      },
      {
        title: 'Funding Preparation',
        description:
          'Prepare financial packages for loans, investors, or lines of credit.',
      },
      {
        title: 'Exit Planning',
        description:
          'Long-term planning for business sale, succession, or transition.',
      },
    ],
    benefits: [
      'Data-driven decisions',
      'Accelerated growth',
      'Improved profitability',
      'Reduced financial risk',
      'Expert guidance on demand',
    ],
    process: [
      {
        step: 1,
        title: 'Financial Assessment',
        description:
          'Comprehensive review of your current financial position.',
      },
      {
        step: 2,
        title: 'Goal Setting',
        description:
          'Define clear financial goals and success metrics.',
      },
      {
        step: 3,
        title: 'Strategy Development',
        description:
          'Create a roadmap to achieve your financial objectives.',
      },
      {
        step: 4,
        title: 'Ongoing Advisory',
        description:
          'Regular meetings and continuous support as you execute.',
      },
    ],
    cta: {
      title: 'Get Expert Financial Guidance',
      description:
        'Schedule a consultation to discuss your business goals and how we can help.',
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
