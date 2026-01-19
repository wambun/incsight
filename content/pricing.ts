export interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: {
    text: string;
    included: boolean;
  }[];
  cta: {
    text: string;
    href: string;
  };
  highlighted: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Entrepreneur',
    tagline: 'Perfect for solopreneurs and small businesses',
    price: '$299',
    period: '/month',
    description:
      'Essential bookkeeping and tax services to keep your finances in order.',
    features: [
      { text: 'Quarterly bookkeeping', included: true },
      { text: 'Financial statements', included: true },
      { text: 'Annual tax return preparation', included: true },
      { text: 'Email support', included: true },
      { text: 'Monthly video reviews', included: false },
      { text: 'AI-driven KPI dashboards', included: false },
      { text: 'CFO advisory calls', included: false },
      { text: 'Payroll processing', included: false },
    ],
    cta: {
      text: 'Get Started',
      href: '/contact?plan=entrepreneur',
    },
    highlighted: false,
  },
  {
    name: 'Growing',
    tagline: 'Most popular for growing businesses',
    price: '$599',
    period: '/month',
    description:
      'Comprehensive services with strategic insights to fuel your growth.',
    features: [
      { text: 'Monthly bookkeeping', included: true },
      { text: 'Financial statements', included: true },
      { text: 'Annual tax return preparation', included: true },
      { text: 'Priority email & phone support', included: true },
      { text: 'Monthly video reviews', included: true },
      { text: 'AI-driven KPI dashboards', included: true },
      { text: 'Quarterly CFO advisory calls', included: true },
      { text: 'Payroll processing (add-on)', included: false },
    ],
    cta: {
      text: 'Get Started',
      href: '/contact?plan=growing',
    },
    highlighted: true,
  },
  {
    name: 'Custom',
    tagline: 'Tailored solutions for complex needs',
    price: 'Custom',
    period: '',
    description:
      'Fully customized services for businesses with specialized requirements.',
    features: [
      { text: 'Everything in Growing', included: true },
      { text: 'Custom service frequency', included: true },
      { text: 'Multi-entity support', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Weekly CFO advisory', included: true },
      { text: 'Payroll processing included', included: true },
      { text: 'Tax planning & strategy', included: true },
      { text: 'Audit support', included: true },
    ],
    cta: {
      text: 'Contact Us',
      href: '/contact?plan=custom',
    },
    highlighted: false,
  },
];

export const faqs = [
  {
    question: 'What accounting software do you use?',
    answer:
      'We primarily use Xero for our bookkeeping services due to its powerful features and integrations. However, we can also accommodate QuickBooks users if needed.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Schedule a free consultation through our contact form. We will discuss your needs, review your current situation, and recommend the best plan for your business.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes, you can upgrade or adjust your plan at any time as your business needs change. We will work with you to find the right fit.',
  },
  {
    question: 'Do you offer year-round support?',
    answer:
      'Unlike seasonal tax firms, we provide year-round support. We are available to answer questions and provide guidance whenever you need it.',
  },
  {
    question: 'What is included in tax return preparation?',
    answer:
      'All plans include preparation of your annual business tax return. Personal tax returns and additional filings may be available as add-ons depending on your plan.',
  },
  {
    question: 'Do you work with businesses outside Miami?',
    answer:
      'Yes! We operate entirely online and work with businesses across all 50 states. Our remote-first approach means we can serve you wherever you are.',
  },
];
