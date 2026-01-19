'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import {
  Calculator,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: Calculator,
    title: 'Strategic Tax Planning',
    description:
      'Proactive tax strategies that minimize your liability year-round, not just at tax time.',
  },
  {
    icon: TrendingUp,
    title: 'Business Growth Advisory',
    description:
      'CFO-level insights and guidance to help you make informed financial decisions.',
  },
  {
    icon: Shield,
    title: 'Audit Protection',
    description:
      'Peace of mind with meticulous record-keeping and representation if needed.',
  },
  {
    icon: Clock,
    title: 'Year-Round Support',
    description:
      'Unlike seasonal firms, we are here for you 365 days a year with dedicated support.',
  },
  {
    icon: BarChart3,
    title: 'AI-Driven Dashboards',
    description:
      'Real-time KPI tracking and financial insights powered by modern technology.',
  },
  {
    icon: Users,
    title: 'Industry Expertise',
    description:
      'Specialized knowledge for contractors, trades, e-commerce, legal, and healthcare.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Features() {
  return (
    <Section background="sage" padding="xl" id="features">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4"
        >
          Why Choose Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 dark:text-white"
        >
          Built for Business Owners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto"
        >
          We combine modern technology with deep expertise to deliver tax and
          accounting services that actually move the needle for your business.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            className="group bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-navy-100 dark:border-navy-700"
          >
            <div className="w-14 h-14 bg-gold-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-400 group-hover:scale-110 transition-all duration-300">
              <feature.icon className="w-7 h-7 text-gold-500 group-hover:text-navy-900 transition-colors" />
            </div>
            <h3 className="text-xl font-display font-semibold text-navy-900 dark:text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-navy-600 dark:text-navy-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
