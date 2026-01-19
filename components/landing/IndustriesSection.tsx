'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Section } from '@/components/shared/Section';
import { ArrowRight, ShoppingCart, Scale, Stethoscope, Wrench } from 'lucide-react';

const industries = [
  {
    icon: Wrench,
    title: 'Contractors & Trades',
    description:
      'Electricians, plumbers, HVAC technicians, and construction professionals.',
    href: '/industries',
    color: 'bg-blue-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description:
      'Online retailers and digital entrepreneurs with multi-state sales tax complexity.',
    href: '/industries/ecommerce',
    color: 'bg-purple-500',
  },
  {
    icon: Scale,
    title: 'Legal Firms',
    description:
      'Solo practitioners and law firms with trust accounting requirements.',
    href: '/industries/legal',
    color: 'bg-amber-500',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Professionals',
    description:
      'Doctors, dentists, and medical professionals with specialized tax needs.',
    href: '/industries/healthcare',
    color: 'bg-green-500',
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function IndustriesSection() {
  return (
    <Section background="cream" padding="xl" divider id="industries">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4"
          >
            Industry Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 dark:text-white"
          >
            Specialized Solutions for{' '}
            <span className="text-gold-500">Your Industry</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-navy-600 dark:text-navy-300"
          >
            We don&apos;t believe in one-size-fits-all accounting. Our team has
            deep expertise in specific industries, allowing us to provide
            tailored strategies that address your unique challenges.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {industries.map((industry) => (
            <motion.div key={industry.title} variants={itemVariants}>
              <Link
                href={industry.href}
                className="group flex items-center gap-6 p-6 bg-navy-50 dark:bg-navy-800 rounded-xl hover:bg-navy-900 dark:hover:bg-navy-700 transition-all duration-300 border border-navy-100 dark:border-navy-700"
              >
                <div
                  className={`w-14 h-14 ${industry.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <industry.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-semibold text-navy-900 dark:text-white group-hover:text-white">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-navy-600 dark:text-navy-300 group-hover:text-navy-200">
                    {industry.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-navy-400 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
