'use client';

import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'light' | 'dark' | 'navy' | 'sage' | 'cream' | 'transparent';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  divider?: boolean;
  id?: string;
}

const backgroundClasses = {
  light: 'bg-white dark:bg-navy-950',
  dark: 'bg-navy-900 text-white',
  navy: 'bg-navy-900 text-white',
  sage: 'bg-navy-50 dark:bg-navy-800',
  cream: 'bg-cream-100 dark:bg-navy-900',
  transparent: 'bg-transparent',
};

const paddingClasses = {
  none: '',
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
  xl: 'py-24 md:py-40',
};

export function Section({
  children,
  className,
  containerClassName,
  containerSize = 'xl',
  background = 'transparent',
  padding = 'lg',
  divider = false,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full',
        backgroundClasses[background],
        paddingClasses[padding],
        divider && 'border-b border-navy-100 dark:border-navy-800',
        className
      )}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
