'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, Button } from '@/components/shared';
import { pricingPlans, faqs } from '@/content/pricing';
import { Check, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
            Simple, Transparent{' '}
            <span className="text-gold-400">Pricing</span>
          </h1>
          <p className="mt-6 text-lg text-navy-300">
            Choose the plan that fits your business. No hidden fees, no
            surprises. All plans include year-round support.
          </p>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section background="light" padding="xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-navy-800 rounded-2xl p-8 border-2 ${
                plan.highlighted
                  ? 'border-gold-400 shadow-xl'
                  : 'border-navy-100 dark:border-navy-700'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold-400 text-navy-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h2 className="text-2xl font-display font-bold text-navy-900 dark:text-white">
                  {plan.name}
                </h2>
                <p className="text-navy-500 dark:text-navy-400 mt-1">
                  {plan.tagline}
                </p>
                <div className="mt-6">
                  <span className="text-5xl font-display font-bold text-navy-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-navy-500 dark:text-navy-400">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-navy-600 dark:text-navy-300">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-navy-300 dark:text-navy-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={
                        feature.included
                          ? 'text-navy-700 dark:text-navy-200'
                          : 'text-navy-400 dark:text-navy-500'
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href={plan.cta.href}
                variant={plan.highlighted ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.cta.text}
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8 text-navy-500 dark:text-navy-400">
          All plans require a 3-month minimum commitment. Prices exclude
          applicable taxes.
        </p>
      </Section>

      {/* FAQs */}
      <Section background="sage" padding="xl">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-navy-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-navy-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-navy-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-4 text-navy-600 dark:text-navy-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            Schedule a free consultation and we&apos;ll help you find the
            perfect plan for your business.
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
