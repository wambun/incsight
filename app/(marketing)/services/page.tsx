import { Metadata } from 'next';
import Link from 'next/link';
import { Section, Button } from '@/components/shared';
import { services } from '@/content/services';
import {
  Calculator,
  FileText,
  BookOpen,
  Users,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive tax and accounting services including tax planning, preparation, bookkeeping, payroll, and CFO advisory.',
};

const iconMap: { [key: string]: React.ElementType } = {
  calculator: Calculator,
  'file-text': FileText,
  'book-open': BookOpen,
  users: Users,
  'trending-up': TrendingUp,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
            Comprehensive Financial{' '}
            <span className="text-gold-400">Solutions</span>
          </h1>
          <p className="mt-6 text-lg text-navy-300">
            From tax planning to CFO-level advisory, we provide everything your
            business needs to optimize finances and accelerate growth.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="light" padding="xl">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Calculator;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white dark:bg-navy-800 rounded-2xl p-8 border border-navy-100 dark:border-navy-700 hover:border-gold-400 dark:hover:border-gold-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gold-400/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400 transition-colors">
                    <Icon className="w-8 h-8 text-gold-500 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-display font-semibold text-navy-900 dark:text-white group-hover:text-gold-500 transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-navy-600 dark:text-navy-300">
                      {service.tagline}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature.title}
                          className="inline-block px-3 py-1 text-xs font-medium bg-navy-50 dark:bg-navy-700 text-navy-600 dark:text-navy-300 rounded-full"
                        >
                          {feature.title}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-gold-500 font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section background="sage" padding="xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-lg text-navy-600 dark:text-navy-300">
            Schedule a free consultation and we&apos;ll help you identify the
            services that will have the biggest impact on your business.
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
