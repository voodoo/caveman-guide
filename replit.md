# A Caveman's Guide - Astro Website

## Overview
This is an Astro-based website for the book "A Caveman's Guide to surviving the modern industrial landscape" by Paul Vudmaska. The book explores health, wellness, and critical analysis of modern industrial practices from a "caveman" perspective.

## Project Structure
- **Framework**: Astro v4.9.2 with TypeScript
- **Styling**: TailwindCSS v3.4.3
- **Content**: MDX-based content in `src/content/book/`
- **Features**: RSS feed, sitemap, search (Pagefind)

## Key Features
- Static site generation with Astro
- MDX support for rich content
- Pagefind integration for site search
- TailwindCSS with typography plugin
- RSS feed generation
- Automatic sitemap generation

## Development
- **Dev Server**: Runs on port 5000 (configured for Replit)
- **Command**: `npm run dev`
- **Host**: Bound to 0.0.0.0 for Replit proxy compatibility

## Content Structure
The book content is organized in `src/content/book/` with chapters including:
- Personal Journey
- Carbs and Coronaries
- Cigarettes
- Seed Oils
- Gout
- Vitamin D
- Statins
- Industry Capture
- Caveman Wellness
- And more...

## Configuration
- **Astro Config**: `astro.config.mjs` - configured for Replit with host 0.0.0.0:5000
- **Tailwind**: `tailwind.config.mjs`
- **TypeScript**: `tsconfig.json`

## Recent Changes
- 2025-10-02: Configured for Replit environment
  - Added server configuration to bind to 0.0.0.0:5000
  - Set up workflow for development server
  - Updated .gitignore for better Node.js support

## User Preferences
None specified yet.

## Deployment
The site can be built for production with `npm run build` and previewed with `npm run preview`.
