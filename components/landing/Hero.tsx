'use client';

import { motion } from 'framer-motion';
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
    <section className="relative min-h-screen lg:min-h-[800px] flex">
      {/* Left Side - Content */}
      <div className="relative w-full lg:w-1/2 bg-navy-900 flex items-center">
        <div className="w-full max-w-[600px] mx-auto px-6 sm:px-8 lg:px-12 lg:ml-auto lg:mr-0 py-20 lg:py-0">
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
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight"
            >
              Minimize Taxes.
              <br />
              <span className="text-gold-400">Maximize Profits.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-6 text-lg text-navy-300 max-w-md"
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
        </div>
      </div>

      {/* Right Side - Visual/Image Placeholder */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden">
        {/* Gradient Background - Placeholder for future image */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600" />

        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cream-100/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Geometric Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative">
            {/* Abstract Financial Chart/Bars */}
            <div className="flex items-end gap-4 h-64">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '40%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-12 bg-gradient-to-t from-gold-400/40 to-gold-400/80 rounded-t-lg"
              />
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '65%' }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-12 bg-gradient-to-t from-gold-400/50 to-gold-400/90 rounded-t-lg"
              />
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '85%' }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-12 bg-gradient-to-t from-gold-400/60 to-gold-400 rounded-t-lg"
              />
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-12 bg-gradient-to-t from-gold-500 to-gold-400 rounded-t-lg shadow-lg shadow-gold-400/30"
              />
            </div>

            {/* Floating Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <p className="text-navy-200 text-sm">Average Tax Savings</p>
              <p className="text-2xl font-bold text-white mt-1">$47,250</p>
              <p className="text-gold-400 text-sm mt-1">+32% vs. last year</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </section>
  );
}
