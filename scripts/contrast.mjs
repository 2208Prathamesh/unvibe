/**
 * Zero-dependency WCAG 2.1 and APCA (0.0.98G-4g) contrast mathematics
 * plus lightness-preserving accessible hex suggestion.
 */

export function parseHex(hex) {
  if (typeof hex !== 'string') {
    throw new Error(`Invalid hex color: ${String(hex)}`);
  }
  const raw = hex.trim().replace(/^#/, '');
  let expanded = raw;
  if (raw.length === 3) {
    expanded = raw.split('').map((ch) => ch + ch).join('');
  } else if (raw.length === 8) {
    expanded = raw.slice(0, 6);
  }
  if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
    throw new Error(`Invalid hex color format: "${hex}" (expected #RGB or #RRGGBB)`);
  }
  const int = parseInt(expanded, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
    hex: `#${expanded.toUpperCase()}`,
  };
}

function rgbToHex(r, g, b) {
  const clamp = (v) => Math.max(0, Math.min(255, Math.round(v)));
  const toHex = (v) => clamp(v).toString(16).padStart(2, '0').toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function srgbToLinear(channel255) {
  const c = channel255 / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

export function relativeLuminance(hex) {
  const { r, g, b } = parseHex(hex);
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
}

export function wcagRatio(fgHex, bgHex) {
  const l1 = relativeLuminance(fgHex);
  const l2 = relativeLuminance(bgHex);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * SAPC / APCA 0.0.98G-4g contrast calculation.
 * Returns signed Lc: positive for dark text on light background,
 * negative for light text on dark background.
 */
export function apcaLc(fgHex, bgHex) {
  const fg = parseHex(fgHex);
  const bg = parseHex(bgHex);

  const sRco = 0.2126729;
  const sGco = 0.7151522;
  const sBco = 0.0721750;
  const mainTRC = 2.4;

  const blkThrs = 0.022;
  const blkClmp = 1.414;
  const normBG = 0.56;
  const normTXT = 0.57;
  const revTXT = 0.62;
  const revBG = 0.65;
  const scaleBoW = 1.14;
  const scaleWoB = 1.14;
  const loBoWoffset = 0.027;
  const loWoBoffset = 0.027;
  const loClip = 0.1;
  const deltaYmin = 0.0005;

  let Ytxt =
    sRco * Math.pow(fg.r / 255, mainTRC) +
    sGco * Math.pow(fg.g / 255, mainTRC) +
    sBco * Math.pow(fg.b / 255, mainTRC);

  let Ybg =
    sRco * Math.pow(bg.r / 255, mainTRC) +
    sGco * Math.pow(bg.g / 255, mainTRC) +
    sBco * Math.pow(bg.b / 255, mainTRC);

  Ytxt = Ytxt > blkThrs ? Ytxt : Ytxt + Math.pow(blkThrs - Ytxt, blkClmp);
  Ybg = Ybg > blkThrs ? Ybg : Ybg + Math.pow(blkThrs - Ybg, blkClmp);

  if (Math.abs(Ybg - Ytxt) < deltaYmin) return 0;

  let outputContrast = 0;
  if (Ybg > Ytxt) {
    const sapc = (Math.pow(Ybg, normBG) - Math.pow(Ytxt, normTXT)) * scaleBoW;
    outputContrast = sapc < loClip ? 0 : sapc - loBoWoffset;
  } else {
    const sapc = (Math.pow(Ybg, revBG) - Math.pow(Ytxt, revTXT)) * scaleWoB;
    outputContrast = sapc > -loClip ? 0 : sapc + loWoBoffset;
  }

  return Number((outputContrast * 100).toFixed(1));
}

function rgbToHsl(r, g, b) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn:
        h = (gn - bn) / d + (gn < bn ? 6 : 0);
        break;
      case gn:
        h = (bn - rn) / d + 2;
        break;
      case bn:
        h = (rn - gn) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h, s, l };
}

function hslToHex(h, s, l) {
  const hue2rgb = (p, q, t) => {
    let tt = t;
    if (tt < 0) tt += 1;
    if (tt > 1) tt -= 1;
    if (tt < 1 / 6) return p + (q - p) * 6 * tt;
    if (tt < 1 / 2) return q;
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
    return p;
  };

  let r;
  let g;
  let b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return rgbToHex(r * 255, g * 255, b * 255);
}

/**
 * Adjusts foreground lightness along its original hue/saturation to reach minRatio.
 * Searches both darkening and lightening directions and returns the minimal-shift passing hex.
 */
export function suggestAccessibleHex(fgHex, bgHex, minRatio = 4.5) {
  const fg = parseHex(fgHex);
  const bg = parseHex(bgHex);
  if (wcagRatio(fg.hex, bg.hex) >= minRatio) {
    return fg.hex;
  }

  const { h, s, l } = rgbToHsl(fg.r, fg.g, fg.b);
  const candidates = [];

  // Search darker toward l = 0
  if (wcagRatio('#000000', bg.hex) >= minRatio) {
    let lo = 0;
    let hi = l;
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2;
      const cand = hslToHex(h, s, mid);
      if (wcagRatio(cand, bg.hex) >= minRatio) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    const hex = hslToHex(h, s, lo);
    if (wcagRatio(hex, bg.hex) >= minRatio) {
      candidates.push({ hex, delta: Math.abs(l - lo) });
    }
  }

  // Search lighter toward l = 1
  if (wcagRatio('#FFFFFF', bg.hex) >= minRatio) {
    let lo = l;
    let hi = 1;
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2;
      const cand = hslToHex(h, s, mid);
      if (wcagRatio(cand, bg.hex) >= minRatio) {
        hi = mid;
      } else {
        lo = mid;
      }
    }
    const hex = hslToHex(h, s, hi);
    if (wcagRatio(hex, bg.hex) >= minRatio) {
      candidates.push({ hex, delta: Math.abs(hi - l) });
    }
  }

  if (candidates.length === 0) {
    return wcagRatio('#000000', bg.hex) >= wcagRatio('#FFFFFF', bg.hex) ? '#000000' : '#FFFFFF';
  }
  candidates.sort((a, b) => a.delta - b.delta);
  return candidates[0].hex;
}

export function evaluateContrast(fgHex, bgHex) {
  const fg = parseHex(fgHex).hex;
  const bg = parseHex(bgHex).hex;
  const ratio = wcagRatio(fg, bg);
  const roundedRatio = Number(ratio.toFixed(2));
  const lc = apcaLc(fg, bg);
  const wcagAA = ratio >= 4.5;
  const wcagAALarge = ratio >= 3.0;
  const wcagAAA = ratio >= 7.0;

  return {
    fg,
    bg,
    wcagRatio: roundedRatio,
    wcagAA,
    wcagAALarge,
    wcagAAA,
    apcaLc: lc,
    passBody: wcagAA,
    passLarge: wcagAALarge,
    suggestedFix: wcagAA ? null : suggestAccessibleHex(fg, bg, 4.5),
  };
}
