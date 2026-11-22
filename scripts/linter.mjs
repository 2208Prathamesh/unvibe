/**
 * Zero-dependency static AI-slop, motion, spacing, layout, and accessibility linter.
 * Scans single files, project directories, or raw code strings.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const SCAN_EXTS = new Set([
  '.html',
  '.htm',
  '.css',
  '.scss',
  '.jsx',
  '.tsx',
  '.vue',
  '.svelte',
  '.astro',
]);

const SKIP_DIRS = new Set([
  'node_modules',
  '.git',
  'dist',
  'build',
  '.next',
  '.nuxt',
  '.output',
  'coverage',
  '.venv',
]);

const SLOP_EMOJI_RE = /[✨🚀🔥💡🎉👋🏠📥💰⚠️📈⚡🎯💎🤖🧠🌟]/u;
const HYPE_COPY_RE =
  /\b(supercharge|revolutionize|game[- ]changing|unlock the power|seamless workflow|next[- ]generation ai|ai[- ]powered|trusted by 10,000\+|loved by 10,000\+)\b|welcome back,|!!/i;
const BADGE_SPAM_RE =
  /(?:new\s*✨|beta\s*🚀|pro\s*✨|introducing\s+.{1,40}\s+2\.0)/iu;
const FAKE_DATA_RE = /\b(lorem ipsum|john doe)\b|\$123,456/i;

const PURPLE_FROM_RE = /\bfrom-(?:purple|violet|fuchsia|indigo)-(?:[3-9]00|950)\b/;
const BLUE_PINK_TO_RE = /\b(?:via|to)-(?:blue|cyan|sky|pink|fuchsia|purple|violet)-(?:[3-9]00|950)\b/;
const CSS_GRADIENT_PURPLE_RE =
  /(?:linear|radial|conic)-gradient\([^)]*(?:#[0-9a-f]*[789a-f][0-9a-f]{2}|purple|violet|indigo|fuchsia|magenta|rgba?\(\s*(?:1[2-9]\d|2\d\d)\s*,\s*[0-9]{1,2}\s*,\s*(?:1[5-9]\d|2\d\d))[^)]*(?:blue|cyan|pink|teal|#[0-9a-f]+|rgb)/i;

const CSS_DARK_BG_HINT_RE =
  /(?:background(?:-color)?\s*:\s*#(?:0[0-9a-f]{5}|1[0-9a-f]{5}|2[0-5][0-9a-f]{4}|0[0-9a-f]{2}|1[0-9a-f]{2})\b|class\s*=\s*["'][^"']*\bdark\b|data-theme\s*=\s*["']dark["'])/i;

function maskComments(src, ext) {
  let out = src;
  // Replace comments with equal-length spaces/newlines so line numbers remain exact
  const blank = (m) => m.replace(/[^\n]/g, ' ');
  if (ext === '.css' || ext === '.scss') {
    out = out.replace(/\/\*[\s\S]*?\*\//g, blank);
  } else {
    out = out.replace(/<!--[\s\S]*?-->/g, blank);
    out = out.replace(/\/\*[\s\S]*?\*\//g, blank);
    out = out.replace(/(^|\s)\/\/.*$/gm, (m, lead) => lead + ' '.repeat(m.length - lead.length));
  }
  return out;
}

function makeExcerpt(lineText) {
  const trimmed = lineText.trim();
  return trimmed.length > 140 ? `${trimmed.slice(0, 137)}...` : trimmed;
}

function addFinding(findings, { file, line, severity, ruleId, message, excerpt, fix }) {
  findings.push({
    file,
    line,
    severity,
    ruleId,
    message,
    excerpt,
    fix,
  });
}

function scanContent(file, rawCode) {
  const findings = [];
  const ext = extname(file).toLowerCase() || '.html';
  const code = maskComments(rawCode, ext);
  const lines = code.split(/\r?\n/);
  const rawLines = rawCode.split(/\r?\n/);

  const isCssLike = ext === '.css' || ext === '.scss' || /<style\b/i.test(code);
  const hasReducedMotion = /@media\s*\(\s*prefers-reduced-motion/i.test(code);
  let hasKeyframesOrAnim = /@keyframes\b/i.test(code);

  // Track CSS blocks for multi-line rules (outline: none, text-transform + letter-spacing, layout transition)
  let inRuleBlock = false;
  let blockStartLine = 1;
  let blockText = '';

  const flushCssBlock = (text, startLine) => {
    const lower = text.toLowerCase();
    if (/(?:^|;|\s)outline\s*:\s*(?:none|0)\b/.test(lower) && !/box-shadow|border|:focus-visible/.test(lower)) {
      addFinding(findings, {
        file,
        line: startLine,
        severity: 'P0-BLOCKER',
        ruleId: 'a11y-outline-none',
        message: 'Removes focus outline without providing a visible focus-visible ring replacement.',
        excerpt: makeExcerpt(rawLines[startLine - 1] || text),
        fix: 'Use :focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; } instead of bare outline: none.',
      });
    }
    if (/text-transform\s*:\s*uppercase/.test(lower) && /letter-spacing\s*:\s*0?\.[1-9]\d*(?:em|rem)/.test(lower)) {
      addFinding(findings, {
        file,
        line: startLine,
        severity: 'P1-SLOP',
        ruleId: 'slop-eyebrow-tracking',
        message: 'Wide-tracked uppercase label/eyebrow pattern detected in CSS.',
        excerpt: makeExcerpt(rawLines[startLine - 1] || text),
        fix: 'Use sentence case at normal or 0.01em tracking and differentiate via size and muted color.',
      });
    }
    if (/overflow-x\s*:\s*hidden/.test(lower) && /\b(?:html|body|:root)\b/.test(lower)) {
      addFinding(findings, {
        file,
        line: startLine,
        severity: 'P2-POLISH',
        ruleId: 'layout-overflow-hidden-root',
        message: 'overflow-x: hidden on html/body breaks position: sticky descendants.',
        excerpt: makeExcerpt(rawLines[startLine - 1] || text),
        fix: 'Use overflow-x: clip on html and body instead of hidden.',
      });
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const lineNo = i + 1;
    const line = lines[i];
    const rawLine = rawLines[i] || '';
    const excerpt = makeExcerpt(rawLine);

    // Track CSS blocks roughly for multiline CSS inspection
    if (isCssLike) {
      if (!inRuleBlock && line.includes('{') && !line.includes('}')) {
        inRuleBlock = true;
        blockStartLine = lineNo;
        blockText = line;
      } else if (inRuleBlock) {
        blockText += `\n${line}`;
        if (line.includes('}')) {
          flushCssBlock(blockText, blockStartLine);
          inRuleBlock = false;
          blockText = '';
        }
      } else if (line.includes('{') && line.includes('}')) {
        flushCssBlock(line, lineNo);
      }
    }

    // 1. Purple-to-blue / violet-to-pink gradients
    if ((PURPLE_FROM_RE.test(line) && BLUE_PINK_TO_RE.test(line)) || CSS_GRADIENT_PURPLE_RE.test(line)) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P1-SLOP',
        ruleId: 'slop-purple-gradient',
        message: 'Generic purple/indigo-to-blue/pink gradient surface detected.',
        excerpt,
        fix: 'Replace multi-hue gradient with a single neutral ramp surface and one deliberate brand accent.',
      });
    }

    // 2. Gradient text
    if (
      (/\bbg-clip-text\b/.test(line) && /\btext-transparent\b/.test(line)) ||
      /-webkit-text-fill-color\s*:\s*transparent/i.test(line)
    ) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P1-SLOP',
        ruleId: 'slop-gradient-text',
        message: 'Gradient text fill detected on typography.',
        excerpt,
        fix: 'Render headings and metrics in solid primary text color; create hierarchy with scale and contrast.',
      });
    }

    // 3. Colored neon/halo glow shadows
    if (
      /shadow-\[\s*0_0_\d+px[^\]]*rgba?\(/i.test(line) ||
      /box-shadow\s*:\s*0\s+0\s+(?:1[2-9]|[2-9]\d|\d{3})px\b/i.test(line)
    ) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P1-SLOP',
        ruleId: 'slop-colored-glow',
        message: 'Zero-offset halo/neon glow shadow detected.',
        excerpt,
        fix: 'Use surface step elevation + subtle 1px hairline borders or soft offset neutral shadows.',
      });
    }

    // 4. Emoji as UI icons / decorations
    if (SLOP_EMOJI_RE.test(line)) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P1-SLOP',
        ruleId: 'slop-emoji-ui',
        message: 'Emoji used as UI icon, badge decoration, or heading flourish.',
        excerpt,
        fix: 'Replace with a crisp 16-18px line icon from one consistent SVG icon set (e.g., Lucide) or plain text.',
      });
    }

    // 5. Hype / greeting / AI-boilerplate copy
    if (HYPE_COPY_RE.test(line)) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P1-SLOP',
        ruleId: 'slop-hype-copy',
        message: 'Generic AI hype wording, greeting headline, exclamation mark, or unverified claim.',
        excerpt,
        fix: 'State plainly what the product does, name the page context instead of greeting, and remove exclamation marks.',
      });
    }

    // 6. Badge spam
    if (BADGE_SPAM_RE.test(line)) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P1-SLOP',
        ruleId: 'slop-badge-spam',
        message: 'Promotional pill/badge cliché ("New ✨", "Beta 🚀", "Introducing ... 2.0").',
        excerpt,
        fix: 'Remove decorative badge or replace with a quiet plain-text status label.',
      });
    }

    // 7. Fake placeholder data
    if (FAKE_DATA_RE.test(line)) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P2-POLISH',
        ruleId: 'slop-fake-data',
        message: 'Placeholder copy or synthetic dummy number ("Lorem ipsum", "$123,456", "John Doe").',
        excerpt,
        fix: 'Supply plausible domain-specific copy and realistic formatted figures.',
      });
    }

    // 8. Eyebrow uppercase wide tracking in utility classes
    if (
      /\buppercase\b/.test(line) &&
      (/\btracking-(?:wider|widest)\b/.test(line) || /\btracking-\[0?\.[1-9]/.test(line))
    ) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P1-SLOP',
        ruleId: 'slop-eyebrow-tracking',
        message: 'Wide-tracked uppercase eyebrow label detected.',
        excerpt,
        fix: 'Switch to sentence case at normal tracking and rely on smaller type size + muted ink.',
      });
    }

    // 9. Over-heavy headings (800-900)
    if (
      (/\bfont-(?:black|extrabold)\b/.test(line) && /<h[1-4]\b|text-(?:2xl|3xl|4xl|5xl|6xl|7xl)/i.test(line)) ||
      /font-weight\s*:\s*(?:800|900)\b/i.test(line)
    ) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P2-POLISH',
        ruleId: 'slop-heavy-heading',
        message: 'Ultra-heavy heading weight (800/900) used instead of clean typographic hierarchy.',
        excerpt,
        fix: 'Prefer weight 400-600 and create hierarchy through scale, contrast, and spacing.',
      });
    }

    // 10. Decorative looping animations (allow explicit skeleton/loading/live status contexts)
    if (
      /\b(?:animate-pulse|animate-ping|animate-bounce)\b/.test(line) &&
      !/\b(?:skeleton|loading|loader|status-live|live-dot)\b/i.test(line)
    ) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P1-SLOP',
        ruleId: 'slop-loop-animation',
        message: 'Decorative looping animation (animate-pulse/ping/bounce) detected.',
        excerpt,
        fix: 'Remove idle looping motion unless explicitly representing live state or loading skeletons.',
      });
    }

    // 11. transition: all / transition-all
    if (/\btransition-all\b/.test(line) || /\btransition\s*:\s*all\b/i.test(line)) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P0-BLOCKER',
        ruleId: 'motion-transition-all',
        message: 'Catch-all "transition-all" / "transition: all" animates unintended layout properties.',
        excerpt,
        fix: 'List explicit properties: transition-colors, transition-opacity, or transition-[transform,opacity].',
      });
    }

    // 12. Animating layout properties
    if (
      /\btransition\s*:\s*[^;]*\b(?:width|height|top|left|margin|padding)\b/i.test(line) ||
      /\btransition-\[[^\]]*\b(?:width|height|top|left|margin|padding)\b[^\]]*\]/i.test(line)
    ) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P1-SLOP',
        ruleId: 'motion-layout-prop',
        message: 'Transition animates layout-thrashing properties (width, height, top, left, margin, or padding).',
        excerpt,
        fix: 'Animate compositor-only transform and opacity properties instead.',
      });
    }

    if (/animation\s*:|@keyframes\b|\btransition-/i.test(line)) {
      if (/@keyframes\b|\banimation\s*:/i.test(line)) {
        hasKeyframesOrAnim = true;
      }
    }

    // 14. Arbitrary off-grid Tailwind px values not divisible by 4 (ignoring 1px/2px/3px hairline/nudges)
    const arbRe = /\b(?:m|mt|mr|mb|ml|mx|my|p|pt|pr|pb|pl|px|py|gap|gap-x|gap-y|space-x|space-y|w|h)-\[(\d+)px\]/g;
    let mArb;
    while ((mArb = arbRe.exec(line)) !== null) {
      const px = Number(mArb[1]);
      if (px > 3 && px % 4 !== 0) {
        addFinding(findings, {
          file,
          line: lineNo,
          severity: 'P2-POLISH',
          ruleId: 'spacing-arbitrary-offgrid',
          message: `Arbitrary off-grid pixel value "${mArb[0]}" (${px}px is not a multiple of 4).`,
          excerpt,
          fix: `Snap ${px}px to the 4px spacing scale (e.g., ${Math.round(px / 4) * 4}px or standard Tailwind token).`,
        });
      }
    }

    // 15. 100vw horizontal scrollbar trap
    if (/\bw-\[100vw\]\b|\bw-screen\b|\bwidth\s*:\s*100vw\b/i.test(line)) {
      const is100vw = /\bw-\[100vw\]\b|\bwidth\s*:\s*100vw\b/i.test(line);
      if (is100vw) {
        addFinding(findings, {
          file,
          line: lineNo,
          severity: 'P0-BLOCKER',
          ruleId: 'layout-100vw-overflow',
          message: '100vw width causes horizontal scrollbars when vertical scrollbars are present (especially on Windows).',
          excerpt,
          fix: 'Replace 100vw with width: 100% (or w-full).',
        });
      }
    }

    // 17. Utility outline-none without focus-visible replacement on the same element/line
    if (/\boutline-none\b/.test(line) && !/focus(?:-visible)?:(?:ring|outline)/.test(line)) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P0-BLOCKER',
        ruleId: 'a11y-outline-none',
        message: '"outline-none" suppresses keyboard focus visibility without a focus-visible ring.',
        excerpt,
        fix: 'Pair with focus-visible:outline-2 focus-visible:outline-offset-2 or focus-visible:ring-2.',
      });
    }

    // 18. Non-semantic <div onClick> or <span onClick>
    if (/<(?:div|span)\b[^>]*\bon(?:Click|click)\s*=/.test(line) && !/\brole\s*=/.test(line)) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P0-BLOCKER',
        ruleId: 'a11y-div-onclick',
        message: 'Interactive click handler attached to non-semantic <div> or <span> without keyboard semantics.',
        excerpt,
        fix: 'Use a native <button type="button"> or <a href="..."> so keyboard navigation works automatically.',
      });
    }

    // 19. Mobile input font size < 16px (triggers iOS auto-zoom)
    if (/<input\b/i.test(line) && (/\btext-(?:xs|sm)\b/.test(line) || /\btext-\[(?:1[0-5]|[1-9])px\]/.test(line))) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P2-POLISH',
        ruleId: 'a11y-mobile-input-zoom',
        message: '<input> uses sub-16px font sizing which triggers automatic zoom on mobile Safari.',
        excerpt,
        fix: 'Set text-base (16px) on mobile inputs (e.g. text-base md:text-sm).',
      });
    }

    // 20. Blocking viewport zoom
    if (/<meta[^>]*name\s*=\s*["']viewport["'][^>]*(?:user-scalable\s*=\s*no|maximum-scale\s*=\s*1(?:\.0)?\b)/i.test(line)) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P0-BLOCKER',
        ruleId: 'a11y-user-scalable-no',
        message: 'Viewport meta disables user pinch-to-zoom accessibility.',
        excerpt,
        fix: 'Remove user-scalable=no and maximum-scale=1 from <meta name="viewport">.',
      });
    }

    // 22. ASCII triple dots in UI placeholders or loading labels
    if (/(?:placeholder\s*=\s*["'][^"']*\.\.\.|Loading\.\.\.|Search anything\.\.\.)/i.test(line)) {
      addFinding(findings, {
        file,
        line: lineNo,
        severity: 'P2-POLISH',
        ruleId: 'typography-ellipsis-dots',
        message: 'Wordy placeholder or ASCII "..." used instead of concise label or typographic ellipsis "…".',
        excerpt,
        fix: 'Keep search placeholders concise ("Search") or use the proper ellipsis character "…" for pending actions.',
      });
    }
  }

  // File-level checks:
  // 13. Missing prefers-reduced-motion when file defines animations/keyframes
  if (hasKeyframesOrAnim && !hasReducedMotion) {
    addFinding(findings, {
      file,
      line: 1,
      severity: 'P2-POLISH',
      ruleId: 'motion-no-reduced-motion',
      message: 'File defines @keyframes or CSS animations without a @media (prefers-reduced-motion: reduce) fallback.',
      excerpt: '@keyframes / animation',
      fix: 'Add @media (prefers-reduced-motion: reduce) to disable or shorten non-essential transitions and keyframes.',
    });
  }

  // 21. Dark theme stylesheet/page missing color-scheme: dark
  if (CSS_DARK_BG_HINT_RE.test(code) && !/color-scheme\s*:\s*[^;]*\bdark\b/i.test(code) && (isCssLike || /<html\b/i.test(code))) {
    addFinding(findings, {
      file,
      line: 1,
      severity: 'P2-POLISH',
      ruleId: 'dark-color-scheme-missing',
      message: 'Dark surface cues detected without declaring "color-scheme: dark" for native scrollbars and form controls.',
      excerpt: 'color-scheme: dark',
      fix: 'Add color-scheme: dark; on :root or [data-theme="dark"] and style native <select> options explicitly.',
    });
  }

  return findings;
}

function collectFiles(targetPath) {
  const abs = resolve(targetPath);
  const st = statSync(abs);
  if (st.isFile()) return [abs];

  const collected = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (SKIP_DIRS.has(entry.name) || entry.name.startsWith('.')) continue;
        walk(join(dir, entry.name));
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        if (SCAN_EXTS.has(ext)) {
          collected.push(join(dir, entry.name));
        }
      }
    }
  };
  walk(abs);
  return collected;
}

export function auditCode({ path, code, filename } = {}) {
  const findings = [];
  let filesScanned = 0;

  if (typeof code === 'string' && code.length > 0) {
    filesScanned = 1;
    findings.push(...scanContent(filename || 'inline-input.html', code));
  } else if (typeof path === 'string' && path.trim().length > 0) {
    const files = collectFiles(path);
    filesScanned = files.length;
    for (const f of files) {
      const text = readFileSync(f, 'utf8');
      findings.push(...scanContent(f, text));
    }
  } else {
    throw new Error('auditCode requires either "path" (file or directory) or "code" (non-empty string).');
  }

  let p0Blockers = 0;
  let p1Slop = 0;
  let p2Polish = 0;
  for (const item of findings) {
    if (item.severity === 'P0-BLOCKER') p0Blockers++;
    else if (item.severity === 'P1-SLOP') p1Slop++;
    else p2Polish++;
  }

  const rawScore = 100 - p0Blockers * 15 - p1Slop * 7 - p2Polish * 2;
  const score = Math.max(0, Math.min(100, rawScore));
  let grade = 'F';
  if (score >= 90 && p0Blockers === 0) grade = 'A';
  else if (score >= 75 && p0Blockers <= 1) grade = 'B';
  else if (score >= 60) grade = 'C';
  else if (score >= 40) grade = 'D';

  return {
    summary: {
      filesScanned,
      totalIssues: findings.length,
      p0Blockers,
      p1Slop,
      p2Polish,
      score,
      grade,
    },
    findings,
  };
}
