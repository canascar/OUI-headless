/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// ============================================================
// GLASS THEME — SAMPLE PAGE BRAND TOKENS (JS)
// ------------------------------------------------------------
// Single source of truth for brand colors used in inline styles
// across the sample pages. Mirrors _glass_tokens.scss. Change a
// value here and every JS inline style that references it updates.
//
// Keep in sync with:
//   _glass_tokens.scss                                  (SCSS)
//   src/themes/v9/global_styling/variables/_colors.scss (light)
//   src/themes/v9/v9_colors_dark.scss                   (dark)
// ============================================================

export const GLASS_TOKENS = {
  // Accent (blue)
  accent: '#3b82f6', // light primary  (blue-500)
  accentDark: '#93c5fd', // dark primary   (blue-300)
  accentBright: '#2563eb', // light link     (blue-600)
  accentBrightDark: '#60a5fa', // dark link      (blue-400)

  // Dark canvas + frosted-glass panel tint
  canvasDark: '#080c18', // page background (dark)
  panelTintDark: 'rgba(13, 18, 38, 0.55)', // frosted glass panel (dark)
};

export default GLASS_TOKENS;
