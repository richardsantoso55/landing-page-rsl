# Product Requirements Document (PRD)
## Richard Santoso Liman, S.E., Ak., CPA — Personal Professional Landing Page

### 1. Product Overview

A single-page personal professional website for Richard Santoso Liman, S.E., Ak., CPA — Audit and Assurance Manager at Crowe Indonesia. The site acts as a digital credibility tool for CFOs and auditees — similar to a partner profile page at a global accounting firm. It is not a resume, portfolio, or recruitment tool.

### 2. Goals

- Establish trust and credibility with CFOs and auditees
- Showcase assurance expertise with an institutional, Big-4-style brand voice
- Encourage visitors to initiate professional conversations via WhatsApp, Email, or LinkedIn
- Communicate quality, integrity, and professional rigor

### 3. Target Audience

- CFOs (Chief Financial Officers)
- Auditees (clients undergoing audit)

### 4. Success Metrics

- Visitor completes primary CTA (Contact / WhatsApp)
- Page feels authoritative, institutional, and trustworthy
- Mobile-friendly experience (primary access from phone)
- Load time under 3 seconds

### 5. Content Requirements

| Element | Requirement |
|---|---|
| Hero Section | Headline ("Driving Quality in Financial Transformation"), name + credentials, role, tagline, CTAs |
| About | 3 icon cards (Approach, Focus, Value) + value statement + stats |
| Identity | 3 value cards (Technical Excellence, Strategic Clarity, Uncompromising Integrity) |
| Engagement Approach | Vertical timeline (Diagnostic → Execution → Insight) |
| Contact | Contact form, email, LinkedIn, WhatsApp |
| Footer | Brand name, links, social, copyright |

### 6. Technical Requirements

- Pure HTML + CSS + vanilla JavaScript (no frameworks)
- Single-page with smooth-scroll navigation
- Fully responsive (mobile-first)
- External dependencies: Google Fonts (Playfair Display + Inter), Font Awesome 6
- No backend — form uses mailto: fallback
- All paths relative for dual compatibility (local file + Flask server)

### 7. Design Direction

- Clean, minimal, institutional (Crowe-inspired)
- Color palette: Crowe Navy (#081F3F), Crowe Gold (#F7A91B), Off-white (#F5F0EB), White, Charcoal
- Typography: Playfair Display (headings), Inter (body)
- Photography: Professional portrait (circular, gold border)
- Feel: Trustworthy, authoritative, institutional

### 8. Out of Scope

- Blog CMS or dynamic content
- E-commerce or payment processing
- Client portal or login
- Multi-language support (English only)
- Database or backend infrastructure
- Services listing section
- Career timeline (experience)
- Testimonials section
