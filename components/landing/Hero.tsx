'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/shared/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const highlights = [
  'Tax Planning & Strategy',
  'Year-Round Support',
  'AI-Driven Insights',
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gold-400/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/10 rounded-full text-gold-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              Expert Tax & Accounting Services
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight"
            >
              Minimize Taxes.
              <br />
              <span className="text-gold-400">Maximize Profits.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-6 text-lg sm:text-xl text-navy-300 max-w-xl mx-auto lg:mx-0"
            >
              Strategic tax planning and premium accounting solutions for
              service-based businesses. We help contractors, tradespeople, and
              professionals keep more of what they earn.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={fadeIn}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-navy-200"
                >
                  <CheckCircle className="w-5 h-5 text-gold-400" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeIn}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button href="/contact" size="lg">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View Pricing
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-400 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-navy-900">$</span>
                    </div>
                    <div>
                      <p className="text-navy-300 text-sm">Tax Savings</p>
                      <p className="text-2xl font-bold text-white">$47,250</p>
                    </div>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-navy-300">Revenue</span>
                      <span className="text-white font-semibold">$425,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-navy-300">Deductions Found</span>
                      <span className="text-gold-400 font-semibold">+$89,500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-navy-300">Effective Tax Rate</span>
                      <span className="text-green-400 font-semibold">18.2%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gold-400 text-navy-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                Year-Round Support
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
