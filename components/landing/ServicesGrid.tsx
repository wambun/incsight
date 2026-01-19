'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/shared/Button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Tax Planning',
    description:
      'Proactive strategies to legally minimize your tax burden throughout the year.',
    href: '/services/tax-planning',
    features: [
      'Entity structure optimization',
      'Retirement planning strategies',
      'Quarterly tax projections',
    ],
  },
  {
    title: 'Tax Preparation',
    description:
      'Expert preparation of business and personal tax returns with maximum deductions.',
    href: '/services/tax-preparation',
    features: [
      'Business tax returns',
      'Personal tax returns',
      'Multi-state filings',
    ],
  },
  {
    title: 'Bookkeeping',
    description:
      'Clean, accurate books that give you real-time visibility into your finances.',
    href: '/services/bookkeeping',
    features: [
      'Monthly reconciliation',
      'Financial statements',
      'Cash flow tracking',
    ],
  },
  {
    title: 'Payroll Services',
    description:
      'Hassle-free payroll processing with automatic tax filings and compliance.',
    href: '/services/payroll',
    features: [
      'Automated processing',
      'Tax filings included',
      'Direct deposit',
    ],
  },
  {
    title: 'CFO Advisory',
    description:
      'Strategic financial guidance to help you scale and make smart decisions.',
    href: '/services/cfo-advisory',
    features: [
      'Financial forecasting',
      'KPI dashboards',
      'Growth strategy',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesGrid() {
  return (
    <Section background="light" padding="xl" id="services">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4"
        >
          Our Services
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 dark:text-white"
        >
          Comprehensive Financial Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto"
        >
          From tax planning to CFO-level advisory, we provide everything you
          need to optimize your business finances.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className={`group relative bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 hover:bg-navy-900 dark:hover:bg-navy-700 transition-all duration-300 ${
              index === services.length - 1 && services.length % 3 !== 0
                ? 'md:col-span-2 lg:col-span-1'
                : ''
            }`}
          >
            <h3 className="text-xl font-display font-semibold text-navy-900 dark:text-white group-hover:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-navy-600 dark:text-navy-300 group-hover:text-navy-200 mb-6">
              {service.description}
            </p>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-navy-500 dark:text-navy-400 group-hover:text-navy-300"
                >
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={service.href}
              className="inline-flex items-center gap-2 text-gold-500 group-hover:text-gold-400 font-semibold transition-colors min-h-[44px]"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Button href="/services" variant="secondary" size="lg">
          View All Services
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </Section>
  );
}
