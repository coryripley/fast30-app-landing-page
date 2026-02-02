# FAST30 Landing Page

A 30-day fitness app landing page built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start for Replit

### 1. Install Dependencies
```bash
npm install
```

### 2. Fix Image Paths (IMPORTANT!)
The project currently uses Figma Make's special image imports. You need to convert them to standard paths:

**In `/src/app/App.tsx`:**
- Find & Replace: `figma:asset/` → `/assets/`

**Example:**
```tsx
// Before:
import img from "figma:asset/76faf8f617b56e6f079c5a7ead8f927f5a5fee32.png";

// After:
import img from "/assets/76faf8f617b56e6f079c5a7ead8f927f5a5fee32.png";
```

### 3. Add Your Image Assets
Place all 24 image files in `/public/assets/` folder:
- Create the folder if it doesn't exist
- Copy all `.png` files from your original Figma Make project

### 4. Run Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

---

## 📋 Project Details

**Fonts:**
- Monument Extended (headlines) - with Anton fallback
- Inter (body copy and small headlines)

**Colors:**
- Primary: Black (#000000)
- Accent: Yellow (#F4EF1A)

**Sections:**
1. Hero Section with phone carousel orbit
2. Feature Pillars (dual phones)
3. What is FAST30?
4. How it Works (3 steps)
5. Sample Workout
6. Featured Workouts
7. Progress Tracking
8. Testimonials
9. App Screenshots
10. Footer with Legal Panel

---

## 🤖 Replit AI Agent Tip

You can use Replit AI Agent to automatically fix the image paths:

**Prompt:**
```
Find and replace all instances of "figma:asset/" with "/assets/" in /src/app/App.tsx
```

---

## 📦 Tech Stack

- **React** 18.3.1
- **Vite** 6.0.11
- **Tailwind CSS** 4.1.0
- **TypeScript**

---

## 📁 Key Files

- `/src/app/App.tsx` - Main landing page component
- `/src/styles/theme.css` - Custom styles and animations
- `/src/styles/fonts.css` - Font imports
- `/public/assets/` - Image assets (you need to add these)

---

Built with ❤️ for FAST30
