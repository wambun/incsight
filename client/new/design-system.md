# Nikka Business & Consulting Template - Design System

## Design Philosophy
Modern, premium B2B aesthetic with sophisticated dark and light modes. Clean typography, generous whitespace, and strategic color contrast to convey professionalism and trustworthiness.

## Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Deep Navy/Charcoal | `#0c1e21` | Primary dark background |
| Off-white/Cream | `#fff` | Primary light background |
| Accent Yellow/Gold | `#ddca3f` | Highlights, CTAs |
| Muted Gray | `#9a9fa0` | Secondary text |
| Light Sage | `#f4f8f8` | Card backgrounds |
| Warm White | `#fdfbf6` | Alternative light background |
| Border Gray | `#e8eded` | Dividers, borders |
| Dark Text | `#191919` | Primary text on light |
| Body Text | `#242422` | Secondary text |

### Gradient
```css
background: linear-gradient(180deg, #0d1e21 0%, #132030 100%);
```

## Typography System

### Font Families
- **Primary (Body)**: Inter (weights: 400, 600, 700)
- **Secondary (Headlines)**: General Sans (weights: 400, 700)
- **Monospace**: Roboto Mono (for technical content)

### Font Sizes
| Element | Desktop | Mobile |
|---------|---------|--------|
| Large Headline | 96px | 40px |
| Section Headline | 64px | 40px |
| Body Text | 15-20px | 15px |
| Monospace Labels | 12px | 12px |

### Line Heights
- Headlines: 110% (1.1em)
- Body: 120-160% (1.2-1.6em)
- Tight spacing: 1.2em

### Letter Spacing
- Monospace labels: 0.5px (uppercase)

## Spacing System (8px Base Unit)

| Size | Pixels | Usage |
|------|--------|-------|
| xs | 8px | Internal component gaps |
| sm | 16px | Text-element gaps |
| md | 32px | Card gaps, grid gaps |
| lg | 48px | Card internal padding |
| xl | 64px | Section padding, major gaps |
| 2xl | 96px | Large section spacing |
| 3xl | 128px | Hero sections |

## Layout Structure

### Breakpoints
| Breakpoint | Width | Padding |
|------------|-------|---------|
| Desktop | 1200px | 64-96px |
| Tablet | 810px | 32px |
| Mobile | 390px | 24px |

### Container Widths
- Desktop: `max-w-[1200px]`
- Tablet: `max-w-[810px]`
- Mobile: `max-w-[390px]`

### Grid Systems
- 2-column: `grid-template-columns: repeat(2, minmax(200px, 1fr))`
- 3-column: `grid-template-columns: repeat(3, minmax(1px, 1fr))`

## Component Specifications

### Navigation
- Fixed/Sticky positioning
- z-index: 10
- Hamburger menu (30px × 20px) on mobile
- Horizontal menu on desktop
- Logo alignment: left
- Menu alignment: right

### Buttons
```css
padding: 12px 20px;
gap: 8px;
font-family: "General Sans";
font-size: 15px;
cursor: pointer;
```

### Cards
```css
background: #f4f8f8;
padding: 48px;
gap: 16px;
border-radius: 8px;
```

### Input Fields
```css
background: #f4f8f8;
border: 1px solid #e8eded;
padding: 16px;
border-radius: 8px;
font-size: 14px;
font-family: Inter;
```
- Focus state: Blue border (`#09f`)

### Dividers
```css
height: 1px;
background: #e8eded;
```

### Icons
- Standard sizes: 12px, 18px, 32px, 42px
- Format: SVG containers
- Positioned within flexbox containers

## Page Layouts

### Hero Section
- Split-screen design (50/50)
- Dark left panel with text
- Light right panel with imagery
- Dark overlay: `opacity: 0.6`
- Minimum height: 700vh (varies)
- Padding: 64-128px

### Feature Section
- 2×2 grid cards with icons
- 32px gap between cards
- Cards with light background

### Team Section
- 3-column grid
- 2 rows of members
- 32px gap spacing
- Card padding: 48px

### Pricing Section
- 3-column grid
- White background cards
- 48px padding
- Feature lists with dividers

### Contact Section
- 3-column grid for contact info
- Form with consistent input styling
- 32px gap spacing

### Footer
- Multi-column layout
- Brand section
- Link columns
- Contact information

## Responsive Behavior

### Desktop (1200px+)
- Full grid layouts
- Maximum spacing values
- All features visible

### Tablet (810-1199px)
- Adjusted padding (32px)
- Maintained grid structure
- Some elements hidden/reorganized

### Mobile (0-809px)
- Single column layouts
- Hamburger navigation
- 24px padding
- Reduced font sizes

## Micro-interactions

### Hover States
- Text color shifts
- Button alignment changes
- Smooth transitions
- Link color: `--framer-link-hover-text-color`

### Navigation
- Current page indication via `[data-framer-page-link-current]`
- Hamburger active state (3 lines)

### Buttons
- `[data-border=true]` attribute for border styling
- Responsive feedback without disruptive animations
