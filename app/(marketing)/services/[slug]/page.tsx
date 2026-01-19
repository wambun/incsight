import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section, Button } from '@/components/shared';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/content/services';
import {
  Calculator,
  FileText,
  BookOpen,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  calculator: Calculator,
  'file-text': FileText,
  'book-open': BookOpen,
  users: Users,
  'trending-up': TrendingUp,
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Calculator;

  return (
    <>
      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gold-400 rounded-xl flex items-center justify-center">
                <Icon className="w-7 h-7 text-navy-900" />
              </div>
              <span className="text-sm font-semibold text-gold-400 uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
              {service.title}
            </h1>
            <p className="mt-6 text-xl text-navy-300">{service.tagline}</p>
            <p className="mt-4 text-lg text-navy-400">{service.description}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-lg font-semibold text-gold-400 mb-6">
              Key Benefits
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section background="light" padding="xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
            What&apos;s Included
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 dark:text-white">
            Comprehensive {service.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.features.map((feature) => (
            <div
              key={feature.title}
              className="bg-navy-50 dark:bg-navy-800 rounded-2xl p-8"
            >
              <h3 className="text-lg font-display font-semibold text-navy-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-navy-600 dark:text-navy-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section background="sage" padding="xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 dark:text-white">
            Our Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.process.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector Line */}
              {index < service.process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gold-400/30 -translate-x-4" />
              )}
              <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-navy-900 font-bold text-lg mb-6">
                  {step.step}
                </div>
                <h3 className="text-lg font-display font-semibold text-navy-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-navy-600 dark:text-navy-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            {service.cta.title}
          </h2>
          <p className="mt-4 text-lg text-navy-300">{service.cta.description}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
