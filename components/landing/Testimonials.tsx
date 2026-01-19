'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "IncSight transformed our financial operations. Their proactive tax planning saved us over $40,000 last year alone.",
    author: 'Michael Rodriguez',
    title: 'Owner, Rodriguez Electric LLC',
    rating: 5,
  },
  {
    quote:
      "Finally, an accounting firm that understands contractors. They speak our language and deliver real results.",
    author: 'Sarah Chen',
    title: 'CEO, Chen Plumbing Services',
    rating: 5,
  },
  {
    quote:
      "The AI dashboards give me instant visibility into my business. I can make decisions based on real data now.",
    author: 'David Thompson',
    title: 'Founder, Thompson HVAC',
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Testimonials() {
  return (
    <Section background="navy" padding="xl" id="testimonials">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4"
        >
          Client Success Stories
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white"
        >
          Trusted by Business Owners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto"
        >
          Join hundreds of service-based businesses who have transformed their
          finances with IncSight.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.author}
            variants={itemVariants}
            className="relative bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 border border-navy-700"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-2">
              <Quote className="w-12 h-12 text-gold-400/20" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-gold-400 text-gold-400"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg text-navy-200 mb-6 leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold-400/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-gold-400">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-navy-400">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {[
          { value: '$2.4M+', label: 'Tax Savings Delivered' },
          { value: '500+', label: 'Businesses Served' },
          { value: '98%', label: 'Client Retention' },
          { value: '15+', label: 'Years Experience' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-gold-400">
              {stat.value}
            </p>
            <p className="mt-2 text-navy-300">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
