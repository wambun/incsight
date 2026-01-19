import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section, Button } from '@/components/shared';
import {
  industries,
  getIndustryBySlug,
  getAllIndustrySlugs,
} from '@/content/industries';
import {
  ShoppingCart,
  Scale,
  Stethoscope,
  Wrench,
  ArrowRight,
  CheckCircle,
  Quote,
} from 'lucide-react';

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

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: 'Industry Not Found' };
  }

  return {
    title: `${industry.title} Accounting & Tax Services`,
    description: industry.description,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const Icon = iconMap[industry.icon] || Wrench;
  const bgColor = colorMap[industry.color] || 'bg-blue-500';

  return (
    <>
      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-semibold text-gold-400 uppercase tracking-wider">
                Industry Solutions
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
              {industry.title}
            </h1>
            <p className="mt-6 text-xl text-navy-300">{industry.tagline}</p>
            <p className="mt-4 text-lg text-navy-400">{industry.description}</p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              {industry.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-display font-bold text-gold-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-navy-300">{stat.label}</p>
                </div>
              ))}
            </div>

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

          {/* Testimonial Card */}
          {industry.testimonial && (
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Quote className="w-10 h-10 text-gold-400/40 mb-4" />
              <p className="text-lg text-white leading-relaxed">
                &ldquo;{industry.testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-400/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gold-400">
                    {industry.testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {industry.testimonial.author}
                  </p>
                  <p className="text-sm text-navy-300">
                    {industry.testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Challenges */}
      <Section background="sage" padding="xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
            We Understand
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 dark:text-white">
            Your Unique Challenges
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industry.challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="bg-white dark:bg-navy-800 rounded-2xl p-8"
            >
              <h3 className="text-xl font-display font-semibold text-navy-900 dark:text-white mb-3">
                {challenge.title}
              </h3>
              <p className="text-navy-600 dark:text-navy-300">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Solutions */}
      <Section background="light" padding="xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 dark:text-white">
            How We Help
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industry.solutions.map((solution) => (
            <div
              key={solution.title}
              className="flex gap-4 p-6 bg-navy-50 dark:bg-navy-800 rounded-xl"
            >
              <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-display font-semibold text-navy-900 dark:text-white">
                  {solution.title}
                </h3>
                <p className="mt-2 text-navy-600 dark:text-navy-300">
                  {solution.description}
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
            Ready to Optimize Your {industry.title} Finances?
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            Schedule a free consultation to discover how we can help your{' '}
            {industry.title.toLowerCase()} business save on taxes and grow.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/industries" variant="outline" size="lg">
              View All Industries
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
