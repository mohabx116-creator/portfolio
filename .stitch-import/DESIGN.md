# Design System Strategy: The Digital Architect

## 1. Overview & Creative North Star
This design system is built on the philosophy of **"The Digital Architect."** It moves beyond a standard personal portfolio by adopting the high-stakes visual language of a premium SaaS dashboard. The goal is to position Mohab not just as a developer, but as a technical orchestrator.

The system breaks away from the "generic template" look by utilizing **intentional asymmetry** and **tonal depth**. Instead of a centered, linear scroll, we use a multi-layered approach where code snippets, project metrics, and technical labels overlap. This creates a sense of "work in progress" sophistication—a peek into a high-end command center. Every element must feel intentional, professional, and built for performance.

---

## 2. Colors: Tonal Depth & The Berry Spectrum
The palette is a deep, "berry-infused" dark mode that uses cool indigos and deep slates to establish high trust.

### The "No-Line" Rule
Explicitly prohibit 1px solid borders for sectioning. Boundaries between the hero, projects, and contact sections must be defined solely through background color shifts. Use `surface-container-low` for large section backgrounds sitting on a `surface` base. 

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Use the following tiers to create a "nested" dashboard feel:
*   **Base Layer:** `surface` (#0b1326) – The canvas.
*   **Section Layer:** `surface-container-low` (#131b2e) – Defines major content areas.
*   **Card/Component Layer:** `surface-container` (#171f33) – For project summaries.
*   **Active/Elevated Layer:** `surface-container-highest` (#2d3449) – For active states or floating modals.

### The "Glass & Gradient" Rule
To achieve a "Berry-inspired" SaaS feel, use **Glassmorphism** for navigation bars and tech-stack chips. 
*   **Glass Specs:** Background: `surface-container` at 70% opacity with a `20px` backdrop-blur.
*   **Signature Textures:** Apply a subtle linear gradient to primary CTAs and hero headlines: `primary` (#c0c1ff) to `secondary` (#adc6ff) at a 135-degree angle. This provides a "metallic" sheen that flat colors lack.

---

## 3. Typography: Editorial Authority
The system utilizes a dual-font strategy to balance Arabic elegance with technical precision.

*   **Display & Headlines:** **Plus Jakarta Sans** (English) and **IBM Plex Sans Arabic**. These are set with tight letter-spacing (-0.02em) to look authoritative. Headlines should use `headline-lg` for project titles to create a high-contrast editorial look.
*   **Body & Labels:** **Inter** (English) and **IBM Plex Sans Arabic**. Use `body-md` for descriptions. 
*   **The Technical Label:** Tech stacks (React, Next.js, Tailwind) must always use `label-md` or `label-sm` in uppercase with increased letter-spacing to mimic code-editor aesthetics.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "heavy" for this sleek aesthetic. We use light to define space.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-low` section creates a natural "recessed" or "inset" look, perfect for dashboard data points.
*   **Ambient Shadows:** For floating elements (e.g., a "Hire Me" button), use a shadow color of `#000000` at 12% opacity with a `32px` blur and `8px` Y-offset. It should feel like a soft glow, not a hard shadow.
*   **The "Ghost Border":** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. It must be felt, not seen.
*   **RTL Depth:** In the Arabic context, ensure that depth gradients and shadows feel natural to the RTL flow—lighting should consistently appear to come from the top-right.

---

## 5. Components: The Dashboard Primitives

### Buttons
*   **Primary:** Gradient of `primary_container` to `secondary_container`. No border. `xl` (0.75rem) roundedness.
*   **Tertiary (Ghost):** No background. Text in `primary`. On hover, a subtle `surface-variant` background fades in.

### The Project Card
Forbid divider lines. Use `surface-container` for the card body. Use vertical whitespace (1.5rem to 2rem) to separate the project image from the description. The "View Project" CTA should be an icon-only button in the top-left (RTL) to maintain a clean dashboard look.

### Tech Chips
*   **Style:** `surface-container-highest` background, `0.5rem` padding, `full` roundedness. 
*   **Detail:** Add a small `2px` dot in `tertiary` (#ffb783) next to the label to indicate "Active" status, reinforcing the SaaS feel.

### Dashboard Stats (The "Trust" Component)
Small cards displaying "Experience," "Projects," and "Commit Rate." Use `display-sm` for the numbers and `label-sm` in `on-surface-variant` for the description. This mimics a SaaS analytics dashboard.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. Place a large project image partially overlapping a text block to create depth.
*   **Do** lean into the RTL layout by ensuring all icons (like "arrow-left" for "back") are mirrored correctly.
*   **Do** use `primary_fixed_dim` for secondary text to maintain the "Berry" hue throughout the hierarchy.

### Don't
*   **Don't** use pure white (#FFFFFF). Always use `on-surface` (#dae2fd) to reduce eye strain and maintain the premium dark-room aesthetic.
*   **Don't** use 100% opaque borders. They break the "Glass" illusion and make the UI look dated.
*   **Don't** use standard "Box Shadows." Only use the Ambient Shadow spec mentioned in Section 4.