# Vynce AI Website

Modern marketing website for Vynce AI, built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Description

`vynce-ai-website` is a high-converting landing site for showcasing AI-powered business automation features, demos, industry use cases, and CTA flows.

## Configuration

- **Runtime:** Node.js 20+ recommended
- **Package manager:** npm
- **Frontend framework:** React 19 + TypeScript
- **Build tool:** Vite 8
- **Styling:** Tailwind CSS + custom global CSS
- **Animations:** Framer Motion + Lenis smooth scrolling

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open in browser:

`http://localhost:5173/`

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Type-check and create production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint checks

## Project Structure

```text
src/
  components/    # Reusable UI components
  sections/      # Landing page sections
  hooks/         # Custom React hooks
  styles/        # Global and utility styles
```

## Environment Variables

No environment variables are required for the current version.

If you add API integrations later, create a `.env` file and expose only public keys using the `VITE_` prefix.

## Deployment

Build the app:

```bash
npm run build
```

The generated static output is in `dist/` and can be deployed on Vercel, Netlify, GitHub Pages, or any static hosting service.

