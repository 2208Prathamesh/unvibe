# Media Framing, Product Previews & GPU Surface Discipline

AI-slop interfaces fill visual containers with glowing gradient orbs, unaligned mockups, stretched images, and heavy blur filters. Replace decorative filler with authentic UI previews and lightweight CSS composition.

---

## 1. Real Coded Product Previews (Preferred Over Static SVGs)

- Render interactive mini-views or faithful CSS-styled UI panes using the exact CSS variables from your active `DESIGN.md` rather than drawing fake abstract bar blobs.
- Keep preview typography readable (`>=12px`), frame containers cleanly with `border: 1px solid var(--border-hairline)` and rounded panel corners, and mark purely illustrative preview trees `aria-hidden="true"` so screen readers focus on real controls.

## 2. CLS-Safe Responsive Imagery

- Always declare explicit aspect ratios (`aspect-[16/10]`, `aspect-[4/3]`, or `aspect-square`) alongside `object-cover` so images never shift page layout during load.
- Serve appropriately sized raster images cleanly with `loading="lazy"` below the fold and eager loading strictly for the primary above-the-fold hero visual.
- Never slap heavy drop shadows (`0 25px 60px rgba(...)`) behind rectangular screenshots on dark surfaces; rely on subtle `1px solid var(--border-hairline)` borders or gentle bottom fade masks.

## 3. Clean CSS Masking & Duotone Integration

Integrate photography quietly into tinted surfaces using pure CSS rather than complex scripts:

```css
/* Soft bottom fade anchoring a product screenshot into dark canvas */
.preview-fade-bottom {
  -webkit-mask-image: linear-gradient(to bottom, #000 74%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 74%, transparent 100%);
}

/* Monochrome-to-theme duotone photo frame */
.media-duotone {
  position: relative;
  overflow: hidden;
  background-color: var(--accent-soft);
}
.media-duotone img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.06);
  mix-blend-mode: multiply;
}
```

## 4. Compositor & GPU Restraint

- Avoid stacking multiple full-viewport `backdrop-filter: blur(...)` layers inside scrolling cards; restrict translucency cleanly to compact sticky top bars where it genuinely improves spatial legibility.
- Never attach continuous `requestAnimationFrame` loops, mouse-trail shaders, or high-frequency parallax listeners on informational business apps or documentation sites.
- Respect `@media (prefers-reduced-motion: reduce)` by turning entrance transitions into instant opacity changes and pausing any non-essential ambient movement.
