import { Metadata } from 'next';
import Link from 'next/link';
import { Section, Button } from '@/components/shared';
import { industries } from '@/content/industries';
import {
  ShoppingCart,
  Scale,
  Stethoscope,
  Wrench,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Specialized tax and accounting solutions for e-commerce, legal firms, healthcare professionals, and contractors.',
};

const iconMap: { [key: string]: React.ElementType } = {
  'shopping-cart': ShoppingCart,
  scale: Scale,
  stethoscope: Stethoscope,
  wrench: Wrench,
};

const colorMap: { [key: string]: string } = {
  purple: 'bg-purple-500',
  amber: 'bg-amber-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">
            Industry Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
            Specialized Solutions for{' '}
            <span className="text-gold-400">Your Industry</span>
          </h1>
          <p className="mt-6 text-lg text-navy-300">
            We don&apos;t believe in one-size-fits-all accounting. Our team has
            deep expertise in specific industries, delivering tailored strategies
            that address your unique challenges.
          </p>
        </div>
      </Section>

      {/* Industries */}
      <Section background="light" padding="xl">
        <div className="space-y-16">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon] || Wrench;
            const bgColor = colorMap[industry.color] || 'bg-blue-500';
            const isEven = index % 2 === 0;

            return (
              <div
                key={industry.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div
                    className={`inline-flex w-16 h-16 ${bgColor} rounded-xl items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white">
                    {industry.title}
                  </h2>
                  <p className="mt-4 text-lg text-navy-600 dark:text-navy-300">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {industry.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl font-display font-bold text-gold-500">
                          {stat.value}
                        </p>
                        <p className="text-sm text-navy-500 dark:text-navy-400">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button href={`/industries/${industry.slug}`}>
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Challenges Card */}
                <div
                  className={`bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 ${
                    !isEven ? 'lg:col-start-1' : ''
                  }`}
                >
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-6">
                    Common Challenges
                  </h3>
                  <ul className="space-y-4">
                    {industry.challenges.map((challenge) => (
                      <li key={challenge.title}>
                        <p className="font-medium text-navy-900 dark:text-white">
                          {challenge.title}
                        </p>
                        <p className="text-sm text-navy-600 dark:text-navy-300 mt-1">
                          {challenge.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Contractors Section */}
      <Section background="sage" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex w-16 h-16 bg-blue-500 rounded-xl items-center justify-center mb-6">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white">
              Contractors & Trades
            </h2>
            <p className="mt-4 text-lg text-navy-600 dark:text-navy-300">
              Electricians, plumbers, HVAC technicians, and construction
              professionals. We understand the unique tax challenges of the
              trades industry.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Equipment and vehicle deductions',
                'Job costing and project accounting',
                'Subcontractor management',
                'Quarterly estimated taxes',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-navy-700 dark:text-navy-200"
                >
                  <span className="w-2 h-2 bg-gold-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/contact">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-navy-800 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-4">
              Our Contractors Save
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-navy-600 dark:text-navy-300">
                    Average Tax Savings
                  </span>
                  <span className="font-bold text-gold-500">$28,500</span>
                </div>
                <div className="h-3 bg-navy-100 dark:bg-navy-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gold-400 rounded-full w-3/4" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-navy-600 dark:text-navy-300">
                    Deductions Found
                  </span>
                  <span className="font-bold text-gold-500">$67,200</span>
                </div>
                <div className="h-3 bg-navy-100 dark:bg-navy-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gold-400 rounded-full w-4/5" />
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-navy-500 dark:text-navy-400">
              Based on average results for contractor clients in 2024
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Don&apos;t See Your Industry?
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            We work with businesses across many industries. Schedule a
            consultation to discuss how we can help your specific situation.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
