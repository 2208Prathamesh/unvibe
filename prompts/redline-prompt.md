# Unvibe Redline Audit & Refactor Prompt — Paste Into Any Chatbot

Use this prompt when you already have UI code (HTML/CSS/React/Tailwind/Vue/Svelte) and want an external chatbot or coding agent to audit and refactor it cleanly with Unvibe's **7-stage Redline workflow** paired with any theme spec from `external/design-md/<theme-id>.DESIGN.md`.

---

```text
Perform a senior design redline audit and full UI/UX cleanup of the interface code below using Unvibe & the 7-stage Redline workflow.

CRITICAL RULES:
0. Strictly UI/UX & Styling Only: Keep every real feature, API call, event handler, route, and state hook working untouched. Only improve visual architecture, spacing, color tokens, typography, iconography, copy realism, accessibility, and motion.
1. Brief Audit Summary First: List the top P0 accessibility blockers and P1 visual-slop findings in 5 concise bullets, then output a short 5-line Direction (Product, Surface Mode, Character, Material Palette, Focal Element).
2. Execute All 7 Stages Cleanly:
   - Stage 1 (Layout & Viewport): Enforce realistic desktop proportions (240–280px sidebar + 1440px workspace or asymmetric above-the-fold hero), remove width: 100vw, use overflow-x: clip, and add min-w-0 on truncating flex children.
   - Stage 2 (4px Grid & Concentric Radii): Snap every padding, margin, and gap to multiples of 4px; equalize sibling row heights (32–36px nav, >=44px mobile); match nested radii (inner = max(4px, outer - padding)); remove card-in-card clutter.
   - Stage 3 (Neutral Ramp & Single Accent): Strip purple/blue gradients, gradient text, neon glows, and background blobs. Unify around one tinted neutral surface ramp (--bg-deep, --bg-canvas, --bg-card, --bg-raised), 3 contrast-verified text roles, 1px borders, and 1 focal accent (<=5% viewport).
   - Stage 4 (Typography & Numerals): Max 2 font families (+ mono for data/code), weights 400–600, sentence case everywhere (never wide-tracked uppercase eyebrows), tabular-nums on numbers, no UI italics, 62–72ch max reading measure.
   - Stage 5 (Line Icons & Media Framing): Remove ALL UI emojis (✨🚀🔥👋💡); replace with consistent 16–18px SVG line icons (stroke-width: 1.5); swap decorative orbs for real coded UI previews or explicit aspect-ratio media.
   - Stage 6 (Grounded Copy & Complete States): Eliminate greetings ("Welcome back!"), exclamation marks, hype ("supercharge", "seamless", "AI-powered"), unverified claims, badge spam ("PRO", "New"), and "$123,456" / "Lorem ipsum". Pair deltas with baselines ("+12% vs last month") and include hover, focus, active, disabled, loading skeleton, empty, and inline error states.
   - Stage 7 (Motion, Browser Chrome & A11y): Kill transition: all and idle animate-pulse. Animate compositor properties (transform, opacity) with cubic-bezier(0.22, 1, 0.36, 1) and prefers-reduced-motion. Use native <button>/<a>, visible :focus-visible rings, aria-label on icon buttons, >=16px mobile <input> text, and color-scheme + explicit <select> styling.

Return crisp, complete refactored UI code honoring the DESIGN.md tokens below:

[OPTIONAL: PASTE external/design-md/<theme-id>.DESIGN.md HERE]

[PASTE YOUR EXISTING UI CODE HERE]
```
