'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Button } from '@/components/shared';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@incsight.net',
    href: 'mailto:info@incsight.net',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(305) 555-0123',
    href: 'tel:+13055550123',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Miami, FL (Remote Nationwide)',
    href: null,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 9am - 6pm EST',
    href: null,
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState('success');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
            Let&apos;s Talk About Your{' '}
            <span className="text-gold-400">Business</span>
          </h1>
          <p className="mt-6 text-lg text-navy-300">
            Schedule a free consultation to discuss how we can help you minimize
            taxes, optimize finances, and grow your business.
          </p>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section background="light" padding="xl">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold text-navy-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-navy-600 dark:text-navy-300 mb-8">
              Ready to transform your business finances? Reach out through any
              of the channels below or fill out the form.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4 min-h-[44px]">
                  <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 dark:text-navy-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-navy-900 dark:text-white hover:text-gold-500 transition-colors inline-flex items-center min-h-[44px]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-navy-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-navy-900 rounded-2xl text-white">
              <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
              <p className="text-navy-300 text-sm">
                Schedule a 30-minute call to discuss your business needs and
                discover how we can help. No commitment required.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-lg border border-navy-100 dark:border-navy-700">
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-navy-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-navy-600 dark:text-navy-300">
                    Thank you for reaching out. We&apos;ll get back to you within
                    24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setFormState('idle');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: '',
                        message: '',
                      });
                    }}
                    variant="outline"
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-navy-700 dark:text-navy-200 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[44px] bg-navy-50 dark:bg-navy-700 border border-navy-200 dark:border-navy-600 rounded-lg text-navy-900 dark:text-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy-700 dark:text-navy-200 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[44px] bg-navy-50 dark:bg-navy-700 border border-navy-200 dark:border-navy-600 rounded-lg text-navy-900 dark:text-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy-700 dark:text-navy-200 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[44px] bg-navy-50 dark:bg-navy-700 border border-navy-200 dark:border-navy-600 rounded-lg text-navy-900 dark:text-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-navy-700 dark:text-navy-200 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[44px] bg-navy-50 dark:bg-navy-700 border border-navy-200 dark:border-navy-600 rounded-lg text-navy-900 dark:text-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                        placeholder="Your Company LLC"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-navy-700 dark:text-navy-200 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 min-h-[44px] bg-navy-50 dark:bg-navy-700 border border-navy-200 dark:border-navy-600 rounded-lg text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="tax-planning">Tax Planning</option>
                      <option value="tax-preparation">Tax Preparation</option>
                      <option value="bookkeeping">Bookkeeping</option>
                      <option value="payroll">Payroll</option>
                      <option value="cfo-advisory">CFO Advisory</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy-700 dark:text-navy-200 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 min-h-[44px] bg-navy-50 dark:bg-navy-700 border border-navy-200 dark:border-navy-600 rounded-lg text-navy-900 dark:text-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-none"
                      placeholder="Tell us about your business and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full"
                    size="lg"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
