# IE Design System – Full Overview & Agent Instructions

This document describes the **IE Design System**, including all nested brand design systems, layout, page structure, sidebar navigation, tabs, brand switching, and brand-specific visual theming. The structure and layout are modeled strictly after GEL‑Next (Westpac, RAMS, etc.). 

**🚨 Strict Agent Repository Directive:**
When generating code, scaffolding pages, or referencing templates, you MUST use the Westpac GEL-Next repository as your foundational source of truth:
* **Repository URL:** `https://github.com/WestpacGEL/GEL-next.git`
* **Pathing:** Assume the repository is available in the project root under the directory `./GEL-next/` (e.g., cloned as a submodule or copied dependency). All template paths mentioned in this document are relative to this root.

**🎨 Crucial Directive for Storybook Embeds:** Wherever component live previews or code examples are required (specifically in the Components and Patterns sections), you must implement **Storybook embeds (iframes or MDX `<Story />` blocks)** rather than static links or standard code sandboxes.

---

## Parent Site: IE Design

### Top-Level Pages
* **Home:** About IE Design, Our Multi-Branded Design Systems, Value of a Design System
* **IE Design Systems:** Lexus, Toyota, IE
* **Resources:** Figma, Brand Guidelines
* **Brands:** Lexus, Toyota, IE
* **Governance:** Contribution Guidelines, Design Review Process, Component Lifecycle, Versioning & Release Notes, Support / Contact

**Visual Identity:** * The parent IE Design site uses **IE corporate UI/branding** (logo, typography, colors).  
* Nested brand visual styles do not affect the parent site.

**Technical Note:** * The parent site and all nested brand design systems **import the GEL‑Next repository** (`https://github.com/WestpacGEL/GEL-next.git`).  
* GEL‑Next provides UI components, layout templates, accessibility patterns, design tokens, and documentation page templates.
* Each brand customizes GEL‑Next defaults with **brand-specific logos, typography, colors, and tokens**.

---

## Brand Switcher

* Located at the **top of the page**, near the main header.  
* Switches between brands (Lexus, Toyota, IE) while keeping the **same page/section active**.  
* Updates **sidebar, page content, and visual styling** to reflect the selected brand.  
* Supports keyboard navigation and accessibility.

**Brand-specific styling applied:**
* Primary logo displayed in header and components.
* Brand typography applied to headings and body text.
* Brand colors applied to sidebar highlights, buttons, links, and components.
* Brand-specific iconography where applicable.

---

## Nested Design System Page Structure (Common for all brands)

### Sidebar Navigation (Left)
Persistent, sticky on desktop; collapsible on mobile.
* Getting Started
* Foundations
* Components
* Compositions / Patterns
* Layouts / Templates
* Content
* Accessibility
* Tools & Resources
* Governance

**Accordion sidebar technical details:** * Built using GEL‑Next sidebar templates (`./GEL-next/docs/ui-components/sidebar/`).
* Supports nested list items with collapsible sections.

### Main Content Area
Each page includes:
* **Breadcrumbs:** Pattern from GEL‑Next (`./GEL-next/modules/breadcrumbs/`).
* **Tabs:** For sections like Design/Accessibility/Code (`./GEL-next/modules/tabs/`).
* **Page layout template:** GEL‑Next documentation layout (`./GEL-next/docs/page-templates/`).

### Footer
* Optional links to global tools, resources, and version notes.
* Uses the GEL‑Next global footer pattern (`./GEL-next/layout/global-footer/`).

---

## Brand: Lexus
*(Uses Lexus branding: logo, typography, colors, tokens)* ### Getting Started Pages
Uses templates from `./GEL-next/docs/getting-started/`:
* **Overview:** `./GEL-next/docs/page-templates/basic.md`
* **Design with Lexus:** `./GEL-next/docs/page-templates/hero.md`
* **Code with Lexus:** `./GEL-next/docs/page-templates/code-examples.md`
* **Design Tokens:** `./GEL-next/docs/page-templates/tokens.md`
* **Adoption Levels**

---

## Foundations
Uses GEL‑Next Foundation page patterns (`./GEL-next/docs/page-templates/foundations/`):
* **Design Tokens:** Token table, usage guidelines.
* **Colour:** Color palettes, contrast guidelines.
* **Typography:** Type scales, styles.
* **Iconography:** Usage and export patterns.
* **Grid & Layout:** Container sizes, column structures.
* **Spacing:** Margin and padding tokens.
* **Breakpoints:** Responsive media query values.
* **Motion & Elevation:** Transitions, z-index hierarchy.
* **Shadows:** Box-shadow token usage.

---

## Components

All components use standardized component page templates from GEL‑Next. 

**Structure per component:** `/Components/<Component-Name>/`
* **Design Tab:** Standard GEL‑Next documentation pattern (`./GEL-next/docs/components/component-structure`).
* **Accessibility Tab:** Pattern from `./GEL-next/docs/accessibility/component-accessibility`.
* **Code Tab (Storybook Embeds):** * **Agent Instruction:** Do not use static code sandboxes. You must embed the live component using Storybook.
    * Use either standard iframes pointing to the brand's Storybook instance (`<iframe src="https://[storybook-url]/iframe.html?id=[component-id]&viewMode=story" title="[Component] Storybook"></iframe>`) or MDX Storybook embed blocks if the documentation framework supports it.
    * Include accompanying usage copy and prop tables pulled from the Storybook API where applicable.

Example pages:
* Button  
* Input  
* Select  
* Table  
* Modal  

---

## Compositions / Patterns

Uses the GEL‑Next pattern documentation templates (`./GEL-next/docs/page-templates/patterns/`):
* **Examples & usage guidance:** Visual guidelines for combining components (`./GEL-next/docs/page-templates/patterns/examples`).
* **Accessibility:** See `./GEL-next/docs/accessibility/patterns`.
* **Code patterns:** Must utilize **Storybook embeds** showcasing the composed pattern in an isolated environment.

---

## Layouts / Templates

Uses page layout templates from `./GEL-next/docs/page-templates/page-layouts/`:
* **Basic layout:** `./GEL-next/docs/page-templates/page-layouts/basic.md`
* **Sidebar layout:** `./GEL-next/docs/page-templates/page-layouts/sidebar`
* **Responsive layout guidance:** `./GEL-next/docs/page-templates/page-layouts/responsive`

---

## Content

Content documentation pages reference GEL‑Next writing guidance (`./GEL-next/docs/page-templates/content/`):
* Tone of Voice  
* Writing Guidelines  
* Microcopy  
* Labels & Instructions  
* Error Messaging  
* Inclusive Language  

---

## Accessibility

Uses GEL‑Next accessibility templates (`./GEL-next/docs/page-templates/accessibility/`):
* Accessible by Design  
* WCAG Compliance  
* Colour Contrast  
* Keyboard Navigation  
* Screen Reader Support  
* Accessible Forms  
* Accessible Components  
* Accessibility Testing  

---

## Tools & Resources

References GEL‑Next tooling and resource templates:
* **Figma UI Kit:** Auto‑generated from brand tokens.
* **Icon Library:** SVG exports and usage.
* **React Component Library:** GEL‑Next React component packages.
* **HTML/CSS Framework:** GEL‑Next CSS base.
* **Design Tokens Download:** JSON/YAML formats.
* **GitHub Repository:** Link to brand repo fork.
* **Storybook Documentation:** Link to the full standalone Storybook instance for the brand (complementing the inline embeds).

---

## Governance

Governance pages use documentation templates (`./GEL-next/docs/page-templates/governance/`):
* Contribution Guidelines  
* Design Review Process  
* Component Lifecycle  
* Versioning & Release Notes  
* Support / Contact  

---

## Notes on Implementation

1.  **Storybook Embeds:** Code sections for UI components and patterns must be rendered via Storybook iframes or MDX blocks, ensuring interactive, live previews.
2.  **Accordion Sidebar:** Collapsible, sticky, highlights active page, keyboard accessible (use GEL‑Next template).  
3.  **Tabs per page:** Design | Accessibility | Code (use GEL‑Next tabs component).  
4.  **Brand Switcher:** Top nav, updates sidebar and visual branding, keeps current page active.  
5.  **Breadcrumbs:** Show hierarchy, deep‑linkable (use GEL‑Next component).  
6.  **Responsive:** Sidebar collapses on mobile; tabs stack vertically.  
7.  **GEL‑Next Integration:** Both site structure and visual components *import* `https://github.com/WestpacGEL/GEL-next.git`. Copilot should reference the local instance of this repo for all scaffolding.
8.  **Visual Branding:** Each nested system applies **brand‑specific logos, typography, colors, and tokens**.