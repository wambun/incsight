# Product Requirements Document (PRD)
## IncSight Website Redesign - Phase 1: Architecture & Planning

---

## Executive Summary

This document outlines the complete redesign of the IncSight website, transforming the existing multi-page site into a modern, premium B2B experience following the design philosophies of the Nikka Business & Consulting Framer template.

**Project Goal**: Revitalize the IncSight website by adopting modern design philosophies and UI/UX cues while preserving all existing content and functionality.

---

## 1. Sitemap (Derived from Current Site)

### Primary Pages

```
/                           # Homepage
├── /services               # Services Overview
│   ├── /tax-planning       # Tax Planning & Strategy
│   ├── /tax-preparation    # Tax Preparation Services
│   ├── /bookkeeping        # Bookkeeping & Accounting
│   ├── /payroll            # Payroll Services
│   └── /cfo-advisory       # CFO & Business Advisory
├── /industries             # Industry Solutions
│   ├── /ecommerce          # E-commerce Accounting
│   ├── /legal              # Legal Firms Accounting
│   └── /healthcare         # SimpliMD - Healthcare Professionals
├── /pricing                # Pricing Plans
├── /about                  # About IncSight
├── /contact                # Contact Page
└── /blog                   # Blog/Resources (if applicable)
```

### Page Inventory

| Page | Current URL | New URL | Priority |
|------|-------------|---------|----------|
| Homepage | `/` | `/` | P0 |
| Tax Planning | `/tax-planning/` | `/services/tax-planning` | P0 |
| Tax Preparation | `/tax-preparation/` | `/services/tax-preparation` | P0 |
| Tax Season | `/tax-season/` | Merged into Tax Preparation | P1 |
| Payroll | `/payroll/` | `/services/payroll` | P0 |
| E-commerce | `/accounting-services-for-e-commerce/` | `/industries/ecommerce` | P1 |
| Legal Firms | `/accounting-services-for-legal-firms/` | `/industries/legal` | P1 |
| SimpliMD | `/simplimd/` | `/industries/healthcare` | P1 |
| Xero | `/xero-accounting-software/` | `/about` (section) | P2 |
| Pricing | (inferred) | `/pricing` | P0 |
| About | (inferred) | `/about` | P0 |
| Contact | (inferred) | `/contact` | P0 |

---

## 2. Visual Analysis - Design Target

### Design Philosophy

The Nikka template embodies a **modern, premium B2B aesthetic** characterized by:

1. **Sophisticated Dual-Mode Design**: Dark navy (`#0c1e21`) and warm white (`#fdfbf6`) backgrounds
2. **Strategic Color Hierarchy**: Accent gold (`#ddca3f`) guides user attention
3. **Generous Whitespace**: 64-128px section padding creates breathing room
4. **Clean Typography**: Inter for body, General Sans for headlines

### Color System Implementation

```typescript
// tailwind.config.ts extension
const colors = {
  primary: {
    dark: '#0c1e21',
    light: '#fdfbf6',
  },
  accent: {
    gold: '#ddca3f',
    hover: '#c9b736',
  },
  neutral: {
    50: '#f4f8f8',
    100: '#e8eded',
    400: '#9a9fa0',
    900: '#191919',
  },
  text: {
    primary: '#242422',
    secondary: '#9a9fa0',
    inverse: '#ffffff',
  }
};
```

### Typography Scale

```typescript
// Typography tokens
const typography = {
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    display: ['General Sans', 'sans-serif'],
    mono: ['Roboto Mono', 'monospace'],
  },
  fontSize: {
    'display-lg': ['96px', { lineHeight: '1.1' }],
    'display': ['64px', { lineHeight: '1.1' }],
    'display-sm': ['40px', { lineHeight: '1.1' }],
    'body-lg': ['20px', { lineHeight: '1.6' }],
    'body': ['16px', { lineHeight: '1.5' }],
    'body-sm': ['15px', { lineHeight: '1.4' }],
    'label': ['12px', { lineHeight: '1.2', letterSpacing: '0.5px' }],
  },
};
```

### Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 8px | Component internal gaps |
| `space-sm` | 16px | Element spacing |
| `space-md` | 32px | Card gaps |
| `space-lg` | 48px | Card padding |
| `space-xl` | 64px | Section padding |
| `space-2xl` | 96px | Large sections |
| `space-3xl` | 128px | Hero sections |

### Key UI Patterns

#### Hero Section
- **Layout**: Split-screen (50/50) or full-width with overlay
- **Background**: Dark gradient with 60% opacity overlay
- **Content**: Left-aligned headline, subtext, dual CTAs
- **Animation**: Fade-in + slide-up on load

#### Navigation
- **Style**: Fixed/sticky, transparent to solid on scroll
- **Desktop**: Logo left, horizontal menu right
- **Mobile**: Hamburger menu (30×20px)
- **Active State**: Gold accent underline

#### Service Cards
- **Background**: Light sage (`#f4f8f8`)
- **Padding**: 48px
- **Gap**: 16px internal, 32px between cards
- **Icon**: 32px SVG, positioned top-left
- **Hover**: Subtle lift with shadow

#### Pricing Cards
- **Layout**: 3-column grid
- **Background**: White with 48px padding
- **Features**: Icon + text rows with dividers
- **CTA**: Full-width button at bottom
- **Highlight**: Gold border/accent for featured plan

#### Contact Form
- **Input Style**: Light background, subtle border
- **Focus**: Blue border (#09f)
- **Padding**: 16px
- **Submit Button**: Gold accent background

### Animation Guidelines (Framer Motion)

```typescript
// Standard animations
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Page transitions
const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};
```

---

## 3. Content Mapping Strategy

### Data Sources

| Content Type | Source Location | Format | Destination |
|--------------|-----------------|--------|-------------|
| Company Info | `client/old` | Markdown | `content/company.json` |
| Services | `client/old` pages | Markdown | `content/services/*.mdx` |
| Industry Pages | `client/old` pages | Markdown | `content/industries/*.mdx` |
| Pricing | (to be defined) | JSON | `content/pricing.json` |
| Team | (to be collected) | JSON | `content/team.json` |
| Testimonials | (to be collected) | JSON | `content/testimonials.json` |

### Content Structure

#### Services Content Schema
```typescript
interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  seo: {
    title: string;
    description: string;
  };
}
```

#### Industry Content Schema
```typescript
interface Industry {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
  cta: {
    text: string;
    href: string;
  };
}
```

#### Pricing Content Schema
```typescript
interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: {
    text: string;
    included: boolean;
  }[];
  cta: {
    text: string;
    href: string;
  };
  highlighted: boolean;
}
```

### Content Migration Plan

1. **Homepage**: Extract hero copy, value propositions, testimonials
2. **Services**: Migrate individual service descriptions and features
3. **Industries**: Preserve specialized messaging per vertical
4. **Pricing**: Structure existing plan details into JSON
5. **About**: Compile company story, mission, team info
6. **Contact**: Maintain contact details, add form functionality

---

## 4. Technical Implementation Plan

### Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 15 (App Router) |
| UI Library | React | 19 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.4 |
| UI Components | Shadcn UI | Latest |
| Animations | Framer Motion | 11.x |
| Content | MDX | 3.x |
| Forms | React Hook Form + Zod | Latest |

### Project Structure

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx          # Marketing layout with nav/footer
│   │   ├── page.tsx            # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx        # Services overview
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Dynamic service pages
│   │   └── industries/
│   │       ├── page.tsx        # Industries overview
│   │       └── [slug]/
│   │           └── page.tsx    # Dynamic industry pages
│   ├── layout.tsx              # Root layout
│   └── globals.css
├── components/
│   ├── landing/
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── services-grid.tsx
│   │   ├── testimonials.tsx
│   │   ├── pricing-cards.tsx
│   │   ├── cta-section.tsx
│   │   └── contact-form.tsx
│   ├── shared/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── section.tsx
│   │   └── container.tsx
│   └── ui/                     # Shadcn UI components
├── content/
│   ├── services/
│   ├── industries/
│   ├── company.json
│   ├── pricing.json
│   └── testimonials.json
├── lib/
│   ├── utils.ts
│   └── content.ts              # Content loading utilities
└── styles/
    └── fonts.ts                # Font configurations
```

### Implementation Phases

#### Phase 2A: Foundation (Global Components)
1. Configure Tailwind with design tokens
2. Set up font loading (Inter, General Sans)
3. Build `Navbar` component with mobile responsiveness
4. Build `Footer` component
5. Create `Container`, `Section`, `Button` base components

#### Phase 2B: Homepage
1. Build `Hero` section with animations
2. Create `ServicesGrid` component
3. Implement `Testimonials` carousel
4. Add `CTASection` component

#### Phase 2C: Service Pages
1. Create services overview page
2. Build dynamic `[slug]` route for individual services
3. Implement service page template
4. Connect content from MDX files

#### Phase 2D: Industry Pages
1. Create industries overview page
2. Build dynamic `[slug]` route for industries
3. Design industry-specific hero sections
4. Add industry testimonials

#### Phase 2E: Pricing & Contact
1. Build `PricingCards` component
2. Implement pricing page with plan comparison
3. Create `ContactForm` with validation
4. Add contact page with info cards

#### Phase 2F: About Page
1. Company story section
2. Team grid component
3. Values/mission section
4. Technology partners section (Xero)

### SEO Implementation

```typescript
// app/[page]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `${pageTitle} | IncSight`,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'website',
      url: `https://incsight.net/${params.slug}`,
      images: ['/og-image.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
    },
  };
}
```

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 90+ |
| Lighthouse Best Practices | 90+ |
| Lighthouse SEO | 90+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

---

## 5. Component Specifications

### Navbar Component

```typescript
interface NavbarProps {
  transparent?: boolean;  // For hero overlay
  items: NavItem[];
}

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];  // For dropdowns
}
```

**Behavior**:
- Transparent on hero, solid on scroll
- Sticky positioning
- Mobile hamburger at 810px breakpoint
- Active page indication with gold underline

### Hero Component

```typescript
interface HeroProps {
  variant: 'split' | 'centered' | 'fullwidth';
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  image?: string;
  darkMode?: boolean;
}
```

### Service Card Component

```typescript
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  features?: string[];
}
```

### Pricing Card Component

```typescript
interface PricingCardProps {
  plan: PricingPlan;
  highlighted?: boolean;
}
```

---

## 6. Accessibility Requirements

- All interactive elements must have `aria-label`
- Sequential heading hierarchy (h1 → h2 → h3)
- Color contrast: WCAG AA (4.5:1 normal, 3:1 large text)
- All form inputs must have associated labels
- All images must have descriptive alt text
- Visible focus indicators on all interactive elements
- Keyboard navigable throughout

---

## 7. Deliverables Checklist

### Phase 1 (This Document)
- [x] Complete sitemap derived from current site
- [x] Visual analysis of design target
- [x] Content mapping strategy
- [x] Technical implementation plan
- [x] Component specifications

### Phase 2 (Implementation)
- [ ] Global layout (Navbar, Footer)
- [ ] Homepage with all sections
- [ ] Services overview and detail pages
- [ ] Industries overview and detail pages
- [ ] Pricing page
- [ ] About page
- [ ] Contact page with form
- [ ] Blog listing (if applicable)
- [ ] Mobile responsive testing
- [ ] Lighthouse audit (90+ all categories)
- [ ] Accessibility compliance

---

## 8. Next Steps

1. **Review and Approve PRD**: Ensure all requirements are captured
2. **Begin Phase 2A**: Set up Tailwind config with design tokens
3. **Build Global Components**: Navbar, Footer, base components
4. **Implement Homepage**: First complete page with all sections
5. **Iterate**: Build remaining pages following the established patterns

---

*Document Version: 1.0*
*Last Updated: January 19, 2026*
*Status: Ready for Phase 2 Implementation*
