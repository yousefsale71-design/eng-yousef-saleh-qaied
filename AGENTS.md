# AGENTS.md

This document provides an overview of the engineering portfolio website project for Eng. Yousef Saleh Qaid.

## Project Overview

A professional engineering portfolio and consulting service booking platform for Eng. Yousef Saleh Qaid (Architect & Engineering Consultant). Built with TanStack Start, React 19, Tailwind CSS 4, and Netlify Forms.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19) |
| Routing | TanStack Router v1 (File-based routing) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom architectural variables (oklch) |
| Forms | Netlify Forms (AJAX submission with static skeleton detection) |
| Language | TypeScript 5.9 (strict mode) |
| Icons | Lucide React |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── __forms.html       # Static Netlify Forms detection skeleton (service-request & contact)
│   ├── contact.html       # Auxiliary static form skeleton
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Navbar.tsx            # Sticky navigation with active links & mobile drawer
│   │   ├── Footer.tsx            # Full engineering footer with credentials & contact links
│   │   ├── FloatingWhatsApp.tsx  # Fixed floating WhatsApp contact badge
│   │   ├── ProjectModal.tsx      # Lightbox/Modal viewer for project details & galleries
│   │   └── ui/                   # Primitive UI components (card, badge, separator, etc.)
│   ├── data
│   │   └── engineeringData.ts    # Centralized data model for engineer info, services, projects, skills, timeline, FAQs
│   ├── routes
│   │   ├── __root.tsx            # Root layout with RTL, metadata, Navbar, Footer, Floating WhatsApp
│   │   ├── index.tsx             # Homepage (Hero, Stats, Services, Featured Projects, Advantages, Workflow, FAQ, CTA)
│   │   ├── services.tsx          # Comprehensive services page with tools & deliverables
│   │   ├── projects.tsx          # Full architectural portfolio with category filter, search, and modal preview
│   │   ├── about.tsx             # About Me and CV (bio, 10+ yrs field experience timeline, skills proficiency)
│   │   ├── resume.tsx            # Resume / Curriculum Vitae view
│   │   ├── request-service.tsx   # Service request booking form with file upload (Netlify Forms)
│   │   └── contact.tsx           # Contact Us page with direct phone, email, WhatsApp & quick message form
│   ├── router.tsx                # TanStack Router instance configuration
│   └── styles.css                # Global stylesheet with Cairo/Tajawal fonts, blueprint grid patterns, theme tokens
├── netlify.toml                  # Netlify deployment configuration
├── package.json
└── tsconfig.json
```

## Form Handling & Netlify Integration

- Forms: `service-request` (with `multipart/form-data` file upload) and `contact` (message form).
- Detection: `public/__forms.html` and `public/contact.html` contain static representations for Netlify build detection.
- Submissions: Handled via AJAX targeting `/__forms.html` with honeypot spam protection.
- Script enabled: `node /opt/buildhome/.agents/skills/netlify-forms/scripts/enable.cjs`
