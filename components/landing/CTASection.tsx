'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/shared/Button';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

export function CTASection() {
  return (
    <Section background="cream" padding="xl">
      <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-12 md:p-16 lg:p-20">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-400/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4"
          >
            Get Started Today
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white"
          >
            Ready to Transform Your{' '}
            <span className="text-gold-400">Business Finances?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto"
          >
            Schedule a free consultation to discover how we can help you
            minimize taxes, optimize your finances, and grow your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/contact" size="lg">
              <Calendar className="w-5 h-5" />
              Schedule Free Consultation
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              <MessageCircle className="w-5 h-5" />
              View Pricing Plans
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-sm text-navy-400"
          >
            No commitment required. Let&apos;s talk about your business goals.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
