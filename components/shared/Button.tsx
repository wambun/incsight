'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const variantClasses = {
  primary:
    'bg-gold-400 text-navy-900 hover:bg-gold-500 focus:ring-gold-400/50',
  secondary:
    'bg-navy-900 text-white hover:bg-navy-800 dark:bg-white dark:text-navy-900 dark:hover:bg-navy-50',
  outline:
    'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-navy-900',
  ghost:
    'text-navy-900 hover:bg-navy-100 dark:text-white dark:hover:bg-navy-800',
  link: 'text-gold-400 hover:text-gold-500 underline-offset-4 hover:underline p-0',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm min-h-[44px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-4 text-lg min-h-[44px]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      external,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      variantClasses[variant],
      variant !== 'link' && sizeClasses[size],
      className
    );

    if (href) {
      const linkProps = external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {};

      return (
        <Link href={href} className={classes} {...linkProps}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
