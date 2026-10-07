/**
 * Hand-drawn style icons, drawn for this project (no game assets).
 * All strokes use currentColor; the "ink" SVG filter defined in index.html
 * roughens the edges so they read like marker on paper.
 */
const svg = (body: string, cls = "ico") =>
  `<svg class="${cls}" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const icons = {
  // stats
  strength: svg(`<path d="M5 12.5v7M8.5 10v12M23.5 10.2v11.6M27 12.8v6.6M8.8 16.2h14.6"/>`),
  defense: svg(`<path d="M16 4.5c3.6 2.3 7.2 3 10.6 3-.3 10.1-3.8 16.4-10.7 20-6.8-3.7-10.2-9.9-10.4-20 3.6 0 7-.8 10.5-3z"/><path d="M16 10v12M11 15.6h10"/>`),
  speed: svg(`<path d="M4.5 8.6l7.6 7.6-7.6 7.4M13.6 8.4l7.8 7.8-7.8 7.6"/><path d="M24.6 7.8v16.8"/>`),
  anarchi: svg(`<circle cx="16" cy="16.2" r="11.4"/><path d="M7.5 25.8 16.2 4.4 24.6 26.3M9.6 18.4l13.6-.3"/>`),
  // clothing slots
  shirt: svg(`<path d="M11.5 5.2 5 9l2.5 6 3.4-1.4V27h10.6V13.6l3.4 1.4L27.4 9 21 5.2c-.7 2.2-2.6 3.6-4.7 3.6s-4.1-1.4-4.8-3.6z"/>`),
  head: svg(`<path d="M16 4.5c-6.4 0-10.7 4.4-10.7 10.4 0 3.6 1.6 6.3 4.3 7.8V27h12.8v-4.3c2.7-1.5 4.3-4.2 4.3-7.8 0-6-4.3-10.4-10.7-10.4z"/><circle cx="11.6" cy="15.4" r="2.4"/><circle cx="20.4" cy="15.4" r="2.4"/><path d="M14.4 27v-3M17.6 27v-3"/>`),
  gloves: svg(`<path d="M9.5 27.2v-6.5L6 15.4c-.9-1.5.9-3.2 2.3-2.1l3 2.4V6.4c0-1.8 2.6-1.8 2.6 0V13m0-7.8c0-1.9 2.7-1.9 2.7 0V13m0-6.6c0-1.8 2.6-1.8 2.6 0V13.8m0-5c0-1.7 2.6-1.7 2.6 0v9.6c0 3.4-1.5 6-4.1 7.6v1.2"/>`),
  accessory: svg(`<circle cx="16" cy="19" r="7.5"/><path d="M12 9.5 16 4l4 5.5"/>`),
  food: svg(`<path d="M5.5 15c0-5.6 4.8-9.3 10.5-9.3S26.5 9.4 26.5 15z"/><path d="M5 19.2h22M6.4 23.4c0 2 1.6 3.2 3.6 3.2h12c2 0 3.6-1.2 3.6-3.2z"/><path d="M11 10.6l.4.5M16 9.4v.6M21 10.6l-.4.5"/>`),
  // progress
  cash: svg(`<path d="M21.6 9.6c-1-1.8-3-2.8-5.6-2.8-3.3 0-5.6 1.8-5.6 4.4 0 6.2 11.8 3.6 11.8 9.6 0 2.7-2.6 4.5-6.2 4.5-2.8 0-5.1-1.2-6-3.2M16 3.8v24.6"/>`),
  followers: svg(`<circle cx="12" cy="10.4" r="4.4"/><path d="M3.8 26.6c.6-5.4 3.8-8.4 8.2-8.4s7.6 3 8.2 8.4"/><path d="M20.6 6.6c2.4.1 4.2 1.9 4.2 4.1 0 2-1.4 3.6-3.4 4M23 18.8c3 .8 4.9 3.4 5.2 7.8"/>`),
  levelUp: svg(`<path d="M16 27V6M7.6 14.2 16 5.6l8.4 8.6"/><path d="M5.6 27.2h20.8"/>`),
  skill: svg(`<path d="M16 4.6l3.3 7.2 7.8.9-5.8 5.3 1.6 7.7L16 21.8l-6.9 3.9 1.6-7.7-5.8-5.3 7.8-.9z"/>`),
  // actions
  download: svg(`<path d="M16 4.5v16M9 14l7 7 7-7M5.5 27h21"/>`),
  discard: svg(`<path d="M7.5 7.5l17 17M24.5 7.5l-17 17"/>`),
  open: svg(`<path d="M3.8 9.4V25c0 1 .8 1.8 1.8 1.8h20.8c1 0 1.8-.8 1.8-1.8V12.6c0-1-.8-1.8-1.8-1.8H15L12.2 6.6H5.6c-1 0-1.8.8-1.8 1.8z"/>`),
  boost: svg(`<path d="M17.6 3.6 7.4 18h8l-1.8 10.4L24.6 13.6h-8.2z"/>`),
  undo: svg(`<path d="M10.4 6.4 4.8 12l5.6 5.6"/><path d="M5.4 12h12.8c4.8 0 8.4 3.4 8.4 7.6s-3.6 7.6-8.4 7.6H12"/>`),
  check: svg(`<path d="M6 16.5l6.4 6.2L26 8.6"/>`),
  copy: svg(`<rect x="10" y="10" width="16" height="16" rx="2"/><path d="M6 22V7.6C6 6.7 6.7 6 7.6 6H22"/>`),
} as const;

/** A filled, slightly lopsided star for rarity. */
export function star(on: boolean): string {
  return `<svg class="star${on ? " on" : ""}" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.4l3.6 8 8.6.8-6.5 5.7 2 8.6L16 22l-7.7 4.5 2-8.6-6.5-5.7 8.6-.8z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></svg>`;
}
