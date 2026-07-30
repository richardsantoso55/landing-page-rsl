# DESIGN.md
## Richard Santoso Liman, S.E., Ak., CPA — Design Specification

### 1. Visual Identity

**Color Palette (Crowe-inspired):**

| Role | Color | Hex | Usage |
|---|---|---|---|
| Primary | Crowe Navy | `#081F3F` | Navbar, footer, headings, primary buttons |
| Accent | Crowe Gold | `#F7A91B` | CTAs, hover states, icons, highlights |
| Light | Warm Off-white | `#F5F0EB` | Alternating section backgrounds, cards |
| White | White | `#FFFFFF` | Default background, text on dark navy |
| Dark Text | Charcoal | `#2C2C2C` | Body text |
| Muted | Gray | `#6B7280` | Secondary text, metadata, labels |
| Gold Light | Soft Gold | `#FDF1D8` | Icon circle backgrounds |

**Typography:**

| Element | Font | Weight | Size Scale |
|---|---|---|---|
| Heading "Driving Quality..." | Playfair Display | 800 | 3.5rem / 2.8rem / 2.2rem / 1.8rem |
| Section titles | Playfair Display | 700 | 2.2rem / 1.7rem |
| Card titles | Inter | 700 | 1rem / 1.1rem |
| Body | Inter | 400 | 1rem |
| Small/Labels | Inter | 500/600 | 0.75rem–0.9rem |

**Spacing System:** Multiples of 8px (8, 16, 24, 32, 48, 64, 96, 128)

---

### 2. Site Structure (Final)

```
Navbar → Hero → About → Identity (The Distinctive Edge)
  → Approach (Engagement Approach Timeline)
  → Contact → Footer
```

Sections removed: Services, Experience, Testimonials, Insights

| Section | Tag | Title |
|---|---|---|
| Hero | — | Driving Quality in Financial Transformation |
| About | Approach & Focus | Approach & Focus |
| Identity | Identity | The Distinctive Edge |
| Approach | Methodology | Engagement Approach |
| Contact | Contact | Let's Start a Conversation |

---

### 3. Layout Architecture

```
┌────────────────────────────────────────────┐
│  NAVBAR (sticky, transparent→navy on scroll)│
│  [Crowe logo] │ [Name + badge]  [nav links]│
├────────────────────────────────────────────┤
│  HERO (navy background, 100vh)             │
│  ┌─ Left: Headline + Name + Tagline + CTAs │
│  └─ Right: Portrait photo (circular)       │
├────────────────────────────────────────────┤
│  ABOUT (off-white bg)                      │
│  ┌─ 3 icon cards (Approach/Focus/Value)   │
│  ├─ Value statement (Confidence Through..) │
│  └─ 3 stats (8+ years, 100+, 6+ industries)│
├────────────────────────────────────────────┤
│  IDENTITY (white bg)                       │
│  └─ 3 value cards (horizontal grid)        │
├────────────────────────────────────────────┤
│  APPROACH (off-white bg)                   │
│  └─ Vertical timeline (Diagnostic→Exec→Insight)│
├────────────────────────────────────────────┤
│  CONTACT (white bg)                        │
│  ├─ Contact form (left)                    │
│  └─ Contact info + WhatsApp CTA (right)    │
├────────────────────────────────────────────┤
│  FOOTER (navy bg)                          │
│  └─ Brand, links, social, copyright        │
└────────────────────────────────────────────┘
```

---

### 4. Responsive Breakpoints

| Device | Max Width | Layout Changes |
|---|---|---|
| Mobile | < 640px | Single column, stacked, hamburger menu |
| Tablet | 640–1024px | 2-column, collapsed nav |
| Desktop | > 1024px | Full layout, sticky nav |

---

### 5. Components

#### Navbar
- Sticky top, transparent → solid navy on scroll
- Left: Crowe logo (linked to crowe.id) + divider + name/badge (linked to #hero)
- Center-right: About, Identity, Approach, Contact, Let's Talk (gold CTA)
- Mobile: Hamburger → slide-in from right

#### Hero Section
- 100vh min, navy gradient background
- Left: Badge ("Audit and Assurance Manager"), Headline, Name + CPA, Tagline, CTAs
- Right: Circular portrait with gold border + accent circle

#### About Section
- 3 icon cards (Approach, Focus, Value)
- Each card: icon circle, uppercase title, sub-header (gold), description
- Value statement: "Confidence Through Clarity" (gold uppercase) + italic quote
- 3 stat cards (counter animation on scroll)

#### Identity Section
- 3 value cards (Technical Excellence, Strategic Clarity, Uncompromising Integrity)
- Each card: icon, title, description

#### Approach Section
- Vertical timeline with connecting gold line
- 3 nodes (gold circles with numbers)
- Each: title, sub-header, description

#### Contact Section
- Form (Name, Email, Subject, Message)
- Contact info (Email, LinkedIn, WhatsApp)
- WhatsApp CTA button

#### Footer
- Brand name + badge + role
- Nav links (About, Identity, Approach, Contact)
- Social icons (LinkedIn, WhatsApp, Email)
- Copyright + back-to-top

---

### 6. Animation & Interaction

**Philosophy:** Professional motion — purposeful, not flashy.

- Smooth scroll for anchor links
- Sections fade-in + slide-up on scroll (IntersectionObserver)
- Staggered reveal for card grids
- Navbar transparent→navy transition on scroll
- Hero elements fade-in staggered on load
- Card hover: subtle lift + gold border
- Stat counters animate on scroll
- Timeline: hover border highlight
- Form input: gold focus underline
- Respect `prefers-reduced-motion`

---

### 7. Accessibility

- Skip to content link
- Semantic HTML (header, nav, main, section, footer)
- ARIA labels on all interactive elements
- Color contrast ≥ 4.5:1
- Visible focus indicators
- Alt text on all images
- Font size min 16px body
