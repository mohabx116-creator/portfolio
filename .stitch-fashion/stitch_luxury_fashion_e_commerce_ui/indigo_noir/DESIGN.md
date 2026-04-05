# Design System Specification: The Ethereal Boutique

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Atelier."** 

We are moving away from the "template" feel of standard e-commerce to create a space that feels like a high-end physical boutique. This is achieved through **intentional asymmetry**, **editorial spacing**, and a **layered tonal architecture**. While the foundation is built on Material UI (MUI) logic, we break the "grid-box" monotony by treating the screen as a canvas where products breathe, and white space is used as a luxury material rather than just a gap between elements.

### The Editorial Shift
Traditional e-commerce uses rigid rows. This system utilizes "staggered" product placements and overlapping typography to guide the eye in a narrative flow, ensuring the user feels they are browsing a curated collection rather than a database.

---

## 2. Colors & Surface Philosophy
The palette avoids harsh contrasts in favor of a sophisticated, low-energy base that allows product photography to become the "hero."

### Surface Hierarchy & Nesting
We reject the "flat" UI. Instead, we use the `surface-container` tiers to create depth.
- **Surface (`#f7f9fb`):** The global canvas.
- **Surface-Container-Low (`#f0f4f7`):** Used for large background sections (e.g., a "Related Products" section).
- **Surface-Container-Lowest (`#ffffff`):** Used for primary cards and interaction areas to make them "pop" against the background.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be established through color shifts or white space.
- *Example:* A card (`surface-container-lowest`) sitting on a background (`surface`) creates its own edge. A border is redundant and "cheapens" the aesthetic.

### Signature Textures & Glassmorphism
- **Primary Accent (`#6c45c0`):** Use this sparingly. It is a "signal" color for CTAs.
- **The Glass Effect:** For floating navigation or product filters, use `surface-container-lowest` with a 70% opacity and a `backdrop-filter: blur(20px)`. This integrates the UI into the imagery.
- **The Soft Gradient:** For high-conversion buttons, use a subtle linear gradient: `primary` (`#6c45c0`) to `primary_dim` (`#6037b3`) at 135 degrees. This adds a "weighted" feel that flat hex codes lack.

---

## 3. Typography
The typography uses a dual-font strategy to balance authority with modern utility.

- **Display & Headline (Manrope):** This is our "Editorial" voice. Used for product names and hero statements. The wider tracking and geometric forms feel premium and bespoke.
- **Body & Label (Inter):** This is our "Functional" voice. Used for descriptions and metadata. Inter’s high x-height ensures legibility even at the `body-sm` (`0.75rem`) level.

**Hierarchy Tip:** Always pair a `headline-lg` with a `body-md`. The significant jump in scale creates the "high-end magazine" feel. Never allow two different font sizes to be too close in scale (e.g., don't put 16px next to 18px).

---

## 4. Elevation & Depth
Depth in this system is a result of **Tonal Layering**, not heavy shadows.

### The Layering Principle
Stacking surfaces creates natural elevation:
1.  **Level 0:** `surface` (The floor)
2.  **Level 1:** `surface-container-low` (The rug)
3.  **Level 2:** `surface-container-lowest` (The pedestal/card)

### Ambient Shadows
When a card requires a floating state (e.g., on hover), use an **Ambient Shadow**:
- `box-shadow: 0 20px 40px -10px rgba(42, 52, 57, 0.06);`
The shadow color is derived from `on_surface` (`#2a3439`), ensuring it looks like a natural obstruction of light rather than a gray smudge.

### The "Ghost Border" Fallback
If a layout requires a boundary for accessibility:
- Use `outline_variant` (`#a9b4b9`) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Cards
- **Construction:** `12px` border radius (`md` scale). No borders.
- **Content:** Use `8px` grid-based padding. Product images should have a `surface-variant` (`#d9e4ea`) background if the image is transparent.
- **Interaction:** On hover, the card should lift using the Ambient Shadow and scale by 1.02% for a "tactile" feel.

### Buttons
- **Primary:** `primary` background, `on_primary` text. `8px` radius. Vertical padding `12px`, horizontal `24px`.
- **Secondary:** Transparent background with a "Ghost Border."
- **Tertiary:** Text-only with an underline that appears on hover, using the `primary` color.

### Input Fields
- **Style:** Underline-only or subtle filled style using `surface-container-high`. Avoid the "outlined box" look to keep the form feeling lightweight.
- **Focus State:** Transition the underline color to `primary` with a 2px thickness.

### Chips (Size/Color Filters)
- **Selection:** `surface-container-highest` background. When selected, switch to `primary` background with `on_primary` text.
- **Shape:** Use the `full` (9999px) roundedness scale.

### Navigation Drawer (The "Curated Drawer")
Instead of a standard side-menu, use a full-screen overlay for mobile navigation with `display-md` typography to make the menu feel like a destination, not a utility.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use "Negative Space" as a luxury element. If in doubt, add 16px of padding.
- **Do** use `tertiary` (`#006e2a`) for success messages or "In Stock" indicators—it’s a sophisticated green that avoids the "traffic light" cliché.
- **Do** use `surface_container_lowest` for product detail modals to make them feel like they are floating above the shop.

### Don’t:
- **Don't** use `1px` solid black borders. It breaks the "Ethereal" immersion.
- **Don't** use standard MUI shadows (Elevation 1-24). Stick to the Ambient Shadow defined in Section 4.
- **Don't** cram content. If a product description is long, use `body-sm` and increase the line height to `1.6` for better readability and a lighter visual "weight."
- **Don't** use pure black (`#000000`) for text. Use `on_surface` (`#2a3439`) to keep the interface feeling soft and premium.