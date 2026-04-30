# Curbe.io — AI Agent Marketing Platform

## Overview

Curbe.io is a premium SaaS marketing website for an agentic AI platform that deploys one autonomous AI agent per business. This AI agent generates creatives, launches Meta campaigns, nurtures leads via WhatsApp/SMS/AI Voice, and optimizes spend 24/7. It is built as a modern full-stack web application using React, Express, and PostgreSQL with Drizzle ORM.

The platform's key differentiator is its use of a true AI agent that reasons (GPT-4o/Claude) before each action, employs Thompson Sampling + Bayesian inference for budget optimization, and persists memory across campaigns. It offers three autonomy modes: Copilot (agent proposes, human approves), Pilot (agent acts within guardrails), and Autopilot (full autonomy).

Curbe.io integrates with Meta Ads (Facebook + Instagram), WhatsApp Business, SMS, AI Voice (ElevenLabs), and Stripe Payments. Its AI stack leverages GPT-4o for copy and reasoning, Google Gemini for images, BytePlus for video, and ElevenLabs for voice, ensuring brand consistency through Brand DNA.

## User Preferences

**Preferred communication style:** Simple, everyday language.

**Design Philosophy:** Modern, unique, and innovative design that avoids basic card layouts. User loves bento grid layouts with glassmorphism effects, gradient animations, and asymmetric blocks. The design should feel premium and tech-forward with subtle interactions and glowing effects throughout.

## System Architecture

### Frontend Architecture

The frontend is built with **React 18** and **TypeScript**, using **Vite** for building and development. **Wouter** handles client-side routing, and **TanStack Query** manages server state and data fetching. UI components are built using **Radix UI primitives**, styled with **Tailwind CSS**, and follow a **shadcn/ui** architecture. The design system features a custom color system with HSL CSS variables, a gradient-driven aesthetic (primary: #239DFF to #4A3DFF), glowing effects, and subtle animations, all responsive with Tailwind's mobile-first approach. Forms are managed with **React Hook Form** and validated using **Zod** schemas for type-safety.

### Backend Architecture

The backend uses **Express.js** and **Node.js** (ESM) with **TypeScript** for type safety. It provides RESTful API endpoints under `/api/*` with JSON request/response formats and Zod schema validation. The database layer utilizes **Drizzle ORM** for type-safe operations with **PostgreSQL**, managing migrations in a dedicated directory. Development includes HMR via Vite middleware, custom logging, and an error overlay plugin.

### Data Storage Solutions

The project uses **PostgreSQL** hosted on Neon (serverless). The schema defines `users` and `demo_requests` tables, with UUID primary keys and fields for user authentication and lead capture. A storage abstraction layer (`server/storage.ts`) handles CRUD operations using Drizzle's query builder.

### Authentication & Authorization

Basic user table structures exist, but full authentication, session management, and explicit CORS configurations are not yet implemented. Form validation is performed on both client and server sides.

### Project Structure

The project follows a monorepo layout:
- `client/`: Frontend React application.
- `server/`: Backend Express application.
- `shared/`: Code shared between client and server, including database schemas.
- `migrations/`: Database migration files.

## External Dependencies

### Third-Party Services

- **Google Analytics 4**: For user behavior tracking.
- **Google Tag Manager**: For event and conversion tracking.
- **Facebook Pixel**: For ad conversion tracking and remarketing.
- **LeadConnector HQ**: For appointment scheduling via an embedded widget.
- **Intellimize**: For A/B testing and personalization.

### External APIs & SDKs

- **intlTelInput** and **libphonenumber-js**: For international phone number formatting and validation.
- **Embla Carousel**, **Splide.js**, **Vaul**, **cmdk**: UI components for carousels, drawers, and command palettes.
- **React Day Picker** and **input-otp**: UI components for date selection and OTP input.

### Database Service

- **Neon Serverless PostgreSQL**: Provides the serverless PostgreSQL database with WebSocket support, configured via `@neondatabase/serverless`.

### Asset Management

- **Webflow Integration**: Static HTML/CSS assets from Webflow exports are used, including custom CSS and JavaScript bundles.
- **Google Fonts**: Utilizes the Inter font family for typography.