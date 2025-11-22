# Claire Creates Moments - Next.js Website

## Overview
A Next.js 14 wedding celebrant website featuring a modern, elegant design with dark theme support. The site showcases services, testimonials, and includes contact forms for potential clients.

## Project Information
- **Framework**: Next.js 14.2.25
- **Package Manager**: pnpm
- **UI Components**: Radix UI with Tailwind CSS
- **Styling**: Tailwind CSS v4 with custom animations
- **Theme**: Dark/Light theme support via next-themes

## Recent Changes

### November 22, 2025 - Simplified Contact Form
- Simplified contact form to use basic HTML POST directly to Web3Forms API
- Form submits to: https://api.web3forms.com/submit
- Access key embedded in form as hidden input field
- Emails sent to: tmona64@gmail.com
- Subject line: "New Wedding Enquiry from Claire Creates Moments"
- No React state management - pure HTML form with elegant styling

### October 29, 2025 - Vercel to Replit Migration
Successfully migrated the project from Vercel to Replit with the following changes:
- Updated `package.json` scripts to bind to `0.0.0.0:5000` for Replit compatibility
- Configured Next.js Dev Server workflow to run on port 5000
- Set up deployment configuration for Replit autoscale deployments
- Updated `.gitignore` to include pnpm-store directory
- All dependencies installed and project running successfully

## Project Structure
```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components (Radix + Tailwind)
│   ├── hero.tsx          # Hero section
│   ├── services.tsx      # Services showcase
│   ├── testimonials.tsx  # Client testimonials
│   ├── contact.tsx       # Contact form
│   └── footer.tsx        # Site footer
├── lib/                  # Utility functions
│   └── utils.ts          # Class name utilities
└── public/               # Static assets (images)
```

## Development
- Dev server runs on port 5000 (configured for Replit)
- Command: `pnpm run dev`
- Workflow: "Next.js Dev Server" auto-starts the development server

## Deployment
- Deployment target: Autoscale (stateless website)
- Build command: `pnpm run build`
- Start command: `pnpm run start`
- Port: 5000 (bound to 0.0.0.0 for Replit compatibility)

## Environment Variables
- None required (Web3Forms access key is embedded in the contact form)

## Contact Form
- **Service**: Web3Forms (free tier with unlimited submissions)
- **Destination Email**: tmona64@gmail.com
- **Features**: 
  - Real-time form validation
  - Success/error notifications
  - Custom email subject line: "New Wedding Enquiry from Claire Creates Moments"
  - Collects: Name, Email, Phone, Message
