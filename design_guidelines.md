# Design Guidelines for Curbe.io - CRM Platform for Insurance Agencies

## Design Approach
**Modern Glassmorphism Bento Style**: Premium SaaS platform with innovative bento grid layouts, glassmorphism effects, gradient animations, and asymmetric blocks. The design feels tech-forward and unique while maintaining professional trust. Blue-focused color palette using iMessage blue (#007AFF) as primary and cyan (#00BFFF) as accent.

## Color Foundation
**Background**: Light cream/beige (hsl(40 20% 97%)) for main background, creating warmth
**Primary**: iMessage blue (#007AFF / hsl(211 100% 50%)) for main interactions and CTAs
**Accent**: Cyan (#00BFFF / hsl(195 100% 50%)) for secondary highlights and variety
**Glass Surfaces**: Gradient backgrounds from primary/10 to transparent with backdrop-blur-xl
**Borders**: Primary/20 or accent/20 with hover states to /40
**Text**: Dark foreground for headlines, muted-foreground for body text
**Gradients**: Animated gradient orbs (primary/20 and accent/20) with blur-3xl

## Typography System
**Font**: Inter (system default)
**Scale** (Mobile-first responsive):
- Hero & Section Headers: text-3xl sm:text-4xl md:text-5xl lg:text-6xl (extrabold)
- Subsections/Card Titles: text-xl sm:text-2xl lg:text-3xl (bold)
- Body: text-base sm:text-lg (regular, text-muted-foreground)
- Small/Captions: text-sm (medium)

**Treatment**: 
- Headlines in foreground color
- Gradient text using bg-gradient-to-r from-primary via-accent to-primary with bg-clip-text text-transparent
- Body text in muted-foreground

## Layout System
**Bento Grid Architecture**: Asymmetric 12-column grid with varied row spans
```typescript
grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto
// Cards span different sizes: md:col-span-7, md:col-span-5, md:row-span-2, etc.
```

**Spacing** (Responsive):
- Section padding: py-16 lg:py-24 or py-20 lg:py-32
- Card padding: p-6 sm:p-8 (consistent across mobile and desktop)
- Grid gaps: gap-4 sm:gap-6 or gap-5 sm:gap-6
- Section margins: mb-12 lg:mb-16 for headers

**Containers**: max-w-7xl with px-4 sm:px-6 lg:px-8

## Glassmorphism Cards
**Base Structure**:
```tsx
<div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-8 hover:border-primary/40 transition-all duration-500">
  {/* Hover gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  
  {/* Content */}
  <div className="relative z-10">
    {/* Icon, title, description */}
  </div>
  
  {/* Decorative orb */}
  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
</div>
```

**Color Variants**:
- Primary theme: from-primary/10 via-primary/5, border-primary/20
- Accent theme: from-accent/10 via-accent/5, border-accent/20
- Mixed: from-accent/10 via-primary/5 for variety

## Component Patterns

**Feature Icons** (Responsive):
- Icon containers: w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/20
- Inner icons: w-6 h-6 sm:w-8 sm:h-8 text-primary
- Hover effect: group-hover:scale-110 transition-transform duration-300

**Badges/Pills**:
```tsx
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
  Label
</span>
```

**Buttons** (MUST use shadcn components):
- Primary CTA: `<Button>` with custom gradient classes
```tsx
<Button className="bg-gradient-to-r from-primary to-accent">
  Call to Action
</Button>
```
- Use Button sizes: default, sm, lg, icon
- Never create custom `<button>` with manual sizing
- Always ensure focus-visible states work (built into shadcn)

## Background Effects
**Floating Orbs**:
```tsx
<div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
<div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
```

**Section Backgrounds**:
```tsx
<div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
```

## Visual Effects
**Hover States**:
- Border color: hover:border-primary/40 (from /20)
- Background overlay: opacity 0 to 100
- Icon scale: group-hover:scale-110
- Orb scale: group-hover:scale-150

**Transitions**: 
- Standard: transition-all duration-500 for cards
- Quick: transition-transform duration-300 for icons
- Smooth: ease-out curves

**Depth**:
- Blur: backdrop-blur-xl for glass effect
- Shadows: blur-2xl and blur-3xl for orbs
- Layering: relative z-10 for content over effects

## Responsive Design
**Breakpoints** (Mobile-first):
- Mobile: 375px-640px (base styles, no prefix)
- Tablet: 640px-1024px (sm: and md: prefixes)
- Desktop: 1024px+ (lg: prefix)

**Grid Behavior**:
- Mobile: grid-cols-1 (all cards stack vertically)
- Tablet: md:grid-cols-12 (bento grid activates)
- Desktop: same layout, optimized spacing

**Auto-rows**: Use auto-rows-auto or content-based heights, NOT fixed pixel heights
- WRONG: `auto-rows-[220px]` (causes overflow on mobile)
- RIGHT: `auto-rows-auto` or `auto-rows-[minmax(180px,auto)]`

**Mobile Optimization Rules**:
1. NO horizontal overflow - all decorative gradient orbs positioned with negative offsets (-left-48, -right-48)
2. All content must be visible - no information omitted on mobile
3. Typography scales down: text-3xl base → text-6xl desktop
4. Icon sizes scale: w-12 h-12 mobile → w-16 h-16 desktop
5. Padding scales: p-6 mobile → p-8 desktop
6. Touch-friendly: min-h-10 for buttons, adequate spacing between interactive elements

**Card Sizes**:
- Largest highlight: md:col-span-7 md:row-span-2
- Medium wide: md:col-span-7 md:row-span-1
- Medium square: md:col-span-5
- Standard: md:col-span-4

## Page Structure (Curbe.io specific)
1. **Hero**: Interactive iPhone mockup + headline + CTA (custom design)
2. **BenefitsSection**: 7-card bento grid - unified communication, security, support, automation, time, teams, analytics
3. **Features**: 8-card bento grid - policy management, pipeline, commissions, clients, renewals, integrations, calendar, alerts
4. **Benefits**: "Why choose Curbe.io" (5-card bento) + "Start in minutes" (3 steps)
5. **CalendarSection**: Large CTA card with 4 mini-features grid
6. **Footer**: Modern with gradient effects and animated social icons

## Accessibility
- Use shadcn components for all interactive elements (ensures focus-visible)
- Maintain text contrast ratios (foreground vs muted-foreground)
- Semantic HTML hierarchy (h2, h3)
- data-testid on all interactive and display elements
- Keyboard navigation support (via shadcn)

## Content Tone (Insurance CRM)
- Professional but approachable
- Focus on time-saving, automation, growth
- Emphasize all-in-one nature (iMessage, WhatsApp, SMS, Email, Landing Pages)
- Highlight specific use cases: health, life, Medicare insurance
- Trust indicators: American platform, data ownership, security

This creates a unique, modern platform that positions Curbe.io as innovative and premium through glassmorphism, bento grids, and thoughtful animations while maintaining professional trust for insurance agencies.
