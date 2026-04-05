# Design System Specification: Culinary Editorial

## 1. Overview & Creative North Star
**The Creative North Star: "The Modern Maître D’"**

This design system moves beyond the utility of a standard dashboard to create a high-end, editorial experience for restaurant management. We are not building a generic data-entry tool; we are crafting a digital concierge. By blending the warmth of hospitality with the precision of a high-performance engine, we utilize **Asymmetric Sophistication** and **Tonal Depth** to guide the eye. 

We break the "Bootstrap/MUI Template" look by favoring white space over lines, and depth over borders. The interface should feel like a premium physical menu—tactile, layered, and intentionally spaced.

---

## 2. Colors & Surface Philosophy
The palette balances the high-energy of culinary heat (`Primary Orange`) with the sophisticated authority of `Dark Neutrals`.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries are created through background color shifts.
- **Surface-to-Surface Transitions:** Use `surface-container-low` for large section backgrounds sitting on a `surface` base. 
- **The "Glass & Gradient" Rule:** Floating action panels or navigation overlays should utilize Glassmorphism. Apply a 20px-40px backdrop-blur to `surface-container-lowest` at 80% opacity.
- **Signature Textures:** Use subtle linear gradients on Primary CTAs (from `primary` to `primary_container`) to provide a "lit from within" glow that flat hex codes cannot replicate.

| Token | Hex | Role |
| :--- | :--- | :--- |
| `primary` | #AB3500 | Brand Essence / Critical Actions |
| `secondary` | #B9052C | Urgency / High-Value Metrics |
| `surface` | #FCF9F8 | Base Canvas |
| `surface_container` | #F0EDED | Secondary Content Areas |
| `on_surface` | #1C1B1B | Primary Typography |

---

## 3. Typography
We use a dual-font strategy to balance editorial flair with high-density data legibility.

- **Display & Headlines (Plus Jakarta Sans):** Chosen for its wide apertures and modern geometric feel. Headlines should use "tight" letter-spacing (-0.02em) to feel authoritative and custom.
- **Body & Labels (Inter):** The workhorse. Inter provides maximum legibility for complex data tables and admin settings.

### Typography Scale (Samples)
- **Display-LG (3.5rem):** Reserved for hero metrics (e.g., Daily Revenue).
- **Headline-SM (1.5rem):** For card titles and section headers.
- **Body-MD (0.875rem):** The standard for all dashboard data and paragraph text.
- **Label-SM (0.6875rem):** All-caps, tracked out (+0.05em) for table headers and metadata.

---

## 4. Elevation & Depth: The Layering Principle
Depth is achieved through **Tonal Stacking**, not shadows alone. 

1.  **Level 0 (Base):** `surface` (#FCF9F8) - The global background.
2.  **Level 1 (Sections):** `surface-container-low` (#F6F3F2) - Defines layout blocks (e.g., Sidebar container).
3.  **Level 2 (Interaction):** `surface-container-lowest` (#FFFFFF) - Floating cards and input fields.

### Ambient Shadows
Shadows are only used for "Elevated" states (hovered cards, modals). 
- **Specs:** `0px 12px 32px rgba(28, 27, 27, 0.06)`. 
- **The Shadow Color:** Never use pure black. Tint the shadow with the `on_surface` token to ensure it feels like natural ambient light.

### The "Ghost Border" Fallback
If a visual separator is mandatory for accessibility, use a **Ghost Border**: `outline-variant` (#E1BFB5) at **15% opacity**.

---

## 5. Components

### Buttons: The Tactile Touch
- **Primary:** `primary` background with a subtle inner-top-glow (1px white overlay at 10% opacity). Corner radius: `md` (0.75rem).
- **Tertiary (Ghost):** No background, no border. Uses `primary` text. On hover, apply `primary_container` at 10% opacity.

### Stat Cards (The Signature Component)
Forbid dividers. Use a `headline-lg` for the metric and a `label-md` for the description. 
- **Layout:** Use intentional asymmetry. Place the trend sparkline (Primary Orange) overlapping the bottom-right corner of the card to break the rigid container.
- **Background:** Use `surface_container_lowest` with a `lg` (1rem) corner radius.

### Data Tables (The High-End Grid)
- **Header:** `surface_container_high` background. No vertical lines.
- **Row Separation:** Instead of lines, use a 4px vertical gap between rows. Each row is its own "pill" using `surface_container_low`.
- **States:** Hovering a row shifts its background to `primary_fixed` (#FFDBD0) at 30% opacity.

### Navigation Sidebar
- **Style:** Integrated "Glass" panel. 
- **Active State:** Use a "Vertical Accent Bar" (4px width) in `primary` on the left edge, combined with a subtle gradient background across the menu item.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use `xl` (1.5rem) roundedness for large image containers or decorative hero cards to emphasize a "soft" premium feel.
- **Do** utilize "Breathing Room." If a card feels crowded, increase the internal padding to `32px` (4x the 8px base).
- **Do** use `tertiary` (#00677E) for "Success" or "Stable" states to avoid a clashing Christmas effect with the red/orange palette.

### Don’t:
- **Don’t** use 100% black (#000000) for text. Always use `on_surface` to maintain the editorial softness.
- **Don’t** use standard MUI dividers. If you must separate content, use an 8px height empty `surface_container_low` block.
- **Don’t** use "Drop Shadows" on flat buttons. High-end UI relies on color contrast and tonal shifts for hierarchy, not 2005-era depth effects.