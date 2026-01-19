import { Metadata } from 'next';
import { Section, Button } from '@/components/shared';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about IncSight - expert tax services and accounting solutions for service-based businesses across the United States.',
};

const values = [
  {
    icon: Target,
    title: 'Proactive Approach',
    description:
      'We do not wait for tax season. We work with you year-round to optimize your finances and minimize surprises.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'Clear pricing, honest advice, and open communication. You will always know where you stand.',
  },
  {
    icon: Heart,
    title: 'Client Success',
    description:
      'Your success is our success. We measure ourselves by the results we deliver for your business.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We are not just accountants - we are partners invested in your long-term growth and prosperity.',
  },
];

const stats = [
  { value: '$2.4M+', label: 'Tax Savings Delivered' },
  { value: '500+', label: 'Businesses Served' },
  { value: '98%', label: 'Client Retention Rate' },
  { value: '15+', label: 'Years Combined Experience' },
];

const team = [
  {
    name: 'Marcus Thompson',
    role: 'Founder & Lead Tax Strategist',
    bio: 'CPA with 15+ years experience specializing in small business taxation and strategic planning.',
  },
  {
    name: 'Sarah Chen',
    role: 'Director of Client Services',
    bio: 'Former Big 4 accountant dedicated to delivering white-glove service to every client.',
  },
  {
    name: 'David Rodriguez',
    role: 'Senior Bookkeeping Manager',
    bio: 'Expert in cloud accounting systems with deep experience in Xero and QuickBooks.',
  },
];

const partners = [
  { name: 'Xero', description: 'Platinum Partner' },
  { name: 'QuickBooks', description: 'ProAdvisor' },
  { name: 'Gusto', description: 'Certified Partner' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">
              About IncSight
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
              Your Partner in{' '}
              <span className="text-gold-400">Financial Success</span>
            </h1>
            <p className="mt-6 text-lg text-navy-300">
              Based in Miami and serving businesses nationwide, IncSight
              provides expert tax services and accounting solutions designed to
              help service-based businesses thrive.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <p className="text-3xl font-display font-bold text-gold-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-navy-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Story */}
      <Section background="light" padding="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white">
              Built by Business Owners, for Business Owners
            </h2>
            <div className="mt-6 space-y-4 text-navy-600 dark:text-navy-300">
              <p>
                IncSight was founded with a simple belief: business owners
                deserve more than just compliance-focused accounting. They
                deserve strategic partners who understand their challenges and
                are invested in their success.
              </p>
              <p>
                After years of watching small business owners overpay on taxes
                and miss opportunities for growth, we set out to build a
                different kind of accounting firm—one that combines modern
                technology with genuine expertise and care.
              </p>
              <p>
                Today, we serve hundreds of service-based businesses across the
                country, helping them minimize taxes, optimize finances, and
                build lasting wealth. Our clients are not just numbers on a
                spreadsheet—they are partners in a shared mission of success.
              </p>
            </div>
          </div>

          <div className="bg-navy-50 dark:bg-navy-800 rounded-2xl p-8">
            <h3 className="text-xl font-display font-semibold text-navy-900 dark:text-white mb-6">
              Why Clients Choose Us
            </h3>
            <ul className="space-y-4">
              {[
                'Year-round proactive support, not just tax season',
                'Deep expertise in service-based businesses',
                'Modern technology with AI-driven insights',
                'Transparent pricing with no hidden fees',
                'Dedicated team that knows your business',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-700 dark:text-navy-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="sage" padding="xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
            Our Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white">
            What Drives Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white dark:bg-navy-800 rounded-2xl p-8 text-center"
            >
              <div className="w-14 h-14 bg-gold-400/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-7 h-7 text-gold-500" />
              </div>
              <h3 className="text-lg font-display font-semibold text-navy-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-navy-600 dark:text-navy-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section background="light" padding="xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white">
            Meet the Experts
          </h2>
          <p className="mt-4 text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            Our team combines decades of experience with a passion for helping
            businesses succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-navy-50 dark:bg-navy-800 rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-gold-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-gold-500">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-display font-semibold text-navy-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gold-500 font-medium mt-1">{member.role}</p>
              <p className="mt-4 text-navy-600 dark:text-navy-300">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technology Partners */}
      <Section background="sage" padding="lg">
        <div className="text-center">
          <span className="inline-block text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
            Technology Partners
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 dark:text-white mb-8">
            Powered by Industry-Leading Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white dark:bg-navy-800 rounded-xl px-8 py-4 flex items-center gap-4"
              >
                <Award className="w-8 h-8 text-gold-500" />
                <div className="text-left">
                  <p className="font-semibold text-navy-900 dark:text-white">
                    {partner.name}
                  </p>
                  <p className="text-sm text-navy-500 dark:text-navy-400">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Ready to Work Together?
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            Schedule a free consultation to learn how IncSight can help your
            business minimize taxes and maximize growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              View Pricing
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
