# FAST30 Landing Page

## Overview
A React/Vite landing page for FAST30 - a collection of 30-day fitness & wellness apps.

## Tech Stack
- React 18.3.1
- Vite 6.3.5
- Tailwind CSS 4.1.12
- TypeScript

## Project Structure
- `src/app/` - Main App component and sub-components
- `src/assets/` - Image assets (PNG files)
- `src/imports/` - SVG and text components
- `src/styles/` - CSS stylesheets

## Running the Project
The dev server runs on port 5000: `npm run dev`

## Recent Changes
- 2026-02-07: Fixed app card grid layout - cards use maxWidth 284px, minHeight 240px, centered in grid, consistent 24px gap, responsive (4/2/1 columns)
- 2026-02-07: Fixed app card logos - enforced 63px fixed height with auto width to prevent stretching/inconsistent sizing
- 2026-02-07: Refined UX Walkthrough phone positioning - scale 3.76, top offset calc(50% - 20px), centered with text below
- 2026-02-02: Initial setup - fixed image imports from Figma format, added React dependencies, configured Vite for Replit

## Design Specs
- UX Walkthrough phones: scale(3.76) zoom, top: calc(50% - 20px), translate(-50%, -50%)
- App Cards: maxWidth 284px, minHeight 240px, p-6, bg black, rounded-2xl, gap-6
- App Card logos: fixed height 63px, auto width, aligned top-left
- Desktop hero phone: 1320x1056px, marginLeft -434px, marginTop -70px
- Monument Extended custom font for branding
- Mobile: no orbit images, separate mobile-phone-simple section
