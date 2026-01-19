'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Tax Planning', href: '/services/tax-planning' },
    { label: 'Tax Preparation', href: '/services/tax-preparation' },
    { label: 'Bookkeeping', href: '/services/bookkeeping' },
    { label: 'Payroll', href: '/services/payroll' },
    { label: 'CFO Advisory', href: '/services/cfo-advisory' },
  ],
  industries: [
    { label: 'E-commerce', href: '/industries/ecommerce' },
    { label: 'Legal Firms', href: '/industries/legal' },
    { label: 'Healthcare', href: '/industries/healthcare' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <Container>
        <div className="py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block">
                <Image
                  src="/static/images/logo.png"
                  alt="IncSight"
                  width={140}
                  height={36}
                  className="h-9 w-auto invert"
                />
              </Link>
              <p className="mt-4 text-navy-300 max-w-md">
                Expert tax services and accounting solutions designed to
                minimize your tax liability and maximize your business profits.
              </p>

              {/* Contact Info */}
              <div className="mt-6 space-y-1">
                <a
                  href="mailto:info@incsight.net"
                  className="flex items-center gap-3 text-navy-300 hover:text-gold-400 transition-colors min-h-[44px] py-2"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@incsight.net</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-navy-300 hover:text-gold-400 transition-colors min-h-[44px] py-2"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>(123) 456-7890</span>
                </a>
                <div className="flex items-center gap-3 text-navy-300 min-h-[44px] py-2">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>Miami, FL (Remote Nationwide)</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-navy-800 text-navy-300 hover:bg-gold-400 hover:text-navy-900 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
                Services
              </h3>
              <ul className="space-y-1">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-navy-300 hover:text-white transition-colors inline-flex items-center min-h-[44px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
                Industries
              </h3>
              <ul className="space-y-1">
                {footerLinks.industries.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-navy-300 hover:text-white transition-colors inline-flex items-center min-h-[44px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4 mt-8">
                Company
              </h3>
              <ul className="space-y-1">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-navy-300 hover:text-white transition-colors inline-flex items-center min-h-[44px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
                Stay Updated
              </h3>
              <p className="text-navy-300 mb-4">
                Get tax tips and business insights delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gold-400 text-navy-900 font-semibold rounded-lg hover:bg-gold-500 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-navy-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-400 text-sm">
              &copy; {new Date().getFullYear()} IncSight. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-navy-400 hover:text-white text-sm transition-colors inline-flex items-center min-h-[44px] px-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
