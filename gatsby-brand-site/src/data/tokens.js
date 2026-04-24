export const BRAND_TOKENS = {
  ie: {
    color: {
      palette: [
        { name: 'IE Blue', token: 'color-primary', value: '#003087', group: 'Brand', usage: 'Primary actions, links, key UI elements' },
        { name: 'Sky Blue', token: 'color-secondary', value: '#0070CC', group: 'Brand', usage: 'Secondary actions, hover states' },
        { name: 'Cyan Accent', token: 'color-accent', value: '#00B4D8', group: 'Brand', usage: 'Highlights, accents, illustrations' },
        { name: 'Navy Dark', token: 'color-text-primary', value: '#1A1A2E', group: 'Text', usage: 'Primary body text, headings' },
        { name: 'Slate', token: 'color-text-secondary', value: '#4A5568', group: 'Text', usage: 'Secondary text, captions' },
        { name: 'Cool Grey', token: 'color-text-muted', value: '#718096', group: 'Text', usage: 'Placeholder, disabled text' },
        { name: 'White', token: 'color-bg', value: '#FFFFFF', group: 'Background', usage: 'Page background, cards' },
        { name: 'Ghost White', token: 'color-bg-subtle', value: '#F7F9FC', group: 'Background', usage: 'Section backgrounds, table stripes' },
        { name: 'Cloud', token: 'color-bg-muted', value: '#EEF2F7', group: 'Background', usage: 'Chip backgrounds, badges' },
        { name: 'Light Blue', token: 'color-primary-subtle', value: '#E8EFF8', group: 'State', usage: 'Primary hover backgrounds' },
        { name: 'Success Green', token: 'color-success', value: '#1A7A4A', group: 'Semantic', usage: 'Success states, positive feedback' },
        { name: 'Warning Amber', token: 'color-warning', value: '#B45309', group: 'Semantic', usage: 'Warning states, caution' },
        { name: 'Danger Red', token: 'color-danger', value: '#C0392B', group: 'Semantic', usage: 'Error states, destructive actions' },
      ],
      semantic: [
        { name: 'Border Default', token: 'color-border', value: '#CBD5E0', usage: 'Default borders' },
        { name: 'Border Strong', token: 'color-border-strong', value: '#A0AEC0', usage: 'Emphasized borders, dividers' },
        { name: 'Border Subtle', token: 'color-border-subtle', value: '#E2E8F0', usage: 'Subtle dividers' },
        { name: 'Border Focus', token: 'color-border-focus', value: '#003087', usage: 'Focus ring outlines' },
      ],
    },
    typography: {
      families: [
        { name: 'Inter', token: 'font-body', value: "'Inter', system-ui, -apple-system, sans-serif", usage: 'Body text, UI labels' },
        { name: 'Inter (Display)', token: 'font-display', value: "'Inter', system-ui, -apple-system, sans-serif", usage: 'Headings, hero text' },
        { name: 'Monospace', token: 'font-mono', value: "'SF Mono', 'Fira Code', Consolas, monospace", usage: 'Code blocks, technical content' },
      ],
      scale: [
        { name: '2xs', token: 'text-xs', value: '12px / 0.75rem', weight: '400', usage: 'Labels, captions, helper text' },
        { name: 'sm', token: 'text-sm', value: '14px / 0.875rem', weight: '400', usage: 'Secondary body text, table content' },
        { name: 'base', token: 'text-base', value: '16px / 1rem', weight: '400', usage: 'Primary body text' },
        { name: 'lg', token: 'text-lg', value: '18px / 1.125rem', weight: '500', usage: 'Lead paragraphs, subheadings' },
        { name: 'xl', token: 'text-xl', value: '20px / 1.25rem', weight: '600', usage: 'Card titles, section headers' },
        { name: '2xl', token: 'text-2xl', value: '24px / 1.5rem', weight: '700', usage: 'H4, component headings' },
        { name: '3xl', token: 'text-3xl', value: '30px / 1.875rem', weight: '700', usage: 'H3, page section titles' },
        { name: '4xl', token: 'text-4xl', value: '36px / 2.25rem', weight: '800', usage: 'H2, major section headings' },
        { name: '5xl', token: 'text-5xl', value: '48px / 3rem', weight: '800', usage: 'H1, page titles' },
        { name: '6xl', token: 'text-6xl', value: '60px / 3.75rem', weight: '800', usage: 'Hero headings' },
      ],
    },
    spacing: [
      { token: 'space-1', value: '4px / 0.25rem', usage: 'Micro padding, icon gaps' },
      { token: 'space-2', value: '8px / 0.5rem', usage: 'Inline element gaps, tight padding' },
      { token: 'space-3', value: '12px / 0.75rem', usage: 'Form label gaps, compact spacing' },
      { token: 'space-4', value: '16px / 1rem', usage: 'Default component padding' },
      { token: 'space-5', value: '20px / 1.25rem', usage: 'Card padding (compact)' },
      { token: 'space-6', value: '24px / 1.5rem', usage: 'Card padding, section gaps' },
      { token: 'space-8', value: '32px / 2rem', usage: 'Section padding, content gaps' },
      { token: 'space-10', value: '40px / 2.5rem', usage: 'Large section spacing' },
      { token: 'space-12', value: '48px / 3rem', usage: 'Page section margins' },
      { token: 'space-16', value: '64px / 4rem', usage: 'Layout-level spacing' },
      { token: 'space-20', value: '80px / 5rem', usage: 'Hero spacing, major sections' },
      { token: 'space-24', value: '96px / 6rem', usage: 'Page-level spacing' },
    ],
    breakpoints: [
      { name: 'xs', token: 'bp-xs', value: '< 640px', description: 'Mobile portrait — single column, stacked layout' },
      { name: 'sm', token: 'bp-sm', value: '640px', description: 'Mobile landscape — some multi-column patterns' },
      { name: 'md', token: 'bp-md', value: '768px', description: 'Tablet — sidebar visible, 2-column grids' },
      { name: 'lg', token: 'bp-lg', value: '1024px', description: 'Desktop — full layout, 3+ column grids' },
      { name: 'xl', token: 'bp-xl', value: '1280px', description: 'Wide desktop — expanded content area' },
      { name: '2xl', token: 'bp-2xl', value: '1536px', description: 'Ultra-wide — max content width reached' },
    ],
  },
};

// Inherit IE tokens for Lexus/Toyota with overrides
BRAND_TOKENS.lexus = {
  ...BRAND_TOKENS.ie,
  color: {
    palette: [
      { name: 'Midnight Black', token: 'color-primary', value: '#0A0A0A', group: 'Brand', usage: 'Primary actions, key UI elements, text' },
      { name: 'Heritage Gold', token: 'color-secondary', value: '#BF8B45', group: 'Brand', usage: 'Accents, highlights, premium details' },
      { name: 'Warm Gold', token: 'color-accent', value: '#D4A853', group: 'Brand', usage: 'Decorative accents, secondary highlights' },
      { name: 'Platinum', token: 'color-bg-muted', value: '#E8E8E8', group: 'Background', usage: 'Surfaces, section backgrounds' },
      { name: 'Warm Paper', token: 'color-bg-subtle', value: '#F5F4F0', group: 'Background', usage: 'Page backgrounds, card surfaces' },
      { name: 'White', token: 'color-bg', value: '#FFFFFF', group: 'Background', usage: 'Primary page background' },
      { name: 'Charcoal Text', token: 'color-text-primary', value: '#0A0A0A', group: 'Text', usage: 'Primary headings, body text' },
      { name: 'Medium Grey', token: 'color-text-secondary', value: '#5C5C5C', group: 'Text', usage: 'Secondary text, captions' },
      { name: 'Light Grey', token: 'color-text-muted', value: '#8A8A8A', group: 'Text', usage: 'Placeholder, muted labels' },
      { name: 'Antique Sand', token: 'color-border', value: '#D4C5A9', group: 'Border', usage: 'Default borders, dividers' },
      { name: 'Warm Taupe', token: 'color-border-subtle', value: '#EDE7D6', group: 'Border', usage: 'Subtle borders, card edges' },
      { name: 'Success Green', token: 'color-success', value: '#2D6A4F', group: 'Semantic', usage: 'Success states' },
      { name: 'Warning Gold', token: 'color-warning', value: '#8B6914', group: 'Semantic', usage: 'Warning states' },
      { name: 'Danger Crimson', token: 'color-danger', value: '#8B1A1A', group: 'Semantic', usage: 'Error states' },
    ],
    semantic: BRAND_TOKENS.ie.color.semantic,
  },
};

BRAND_TOKENS.toyota = {
  ...BRAND_TOKENS.ie,
  color: {
    palette: [
      { name: 'Toyota Red', token: 'color-primary', value: '#EB0A1E', group: 'Brand', usage: 'Primary actions, CTAs, brand emphasis' },
      { name: 'Charcoal', token: 'color-secondary', value: '#2C2C2C', group: 'Brand', usage: 'Secondary actions, dark backgrounds' },
      { name: 'Bright Red', token: 'color-accent', value: '#FF4D4D', group: 'Brand', usage: 'Hover states, interactive highlights' },
      { name: 'White', token: 'color-bg', value: '#FFFFFF', group: 'Background', usage: 'Primary page background' },
      { name: 'Light Grey', token: 'color-bg-subtle', value: '#F5F5F5', group: 'Background', usage: 'Section backgrounds, subtle surfaces' },
      { name: 'Pale Grey', token: 'color-bg-muted', value: '#EBEBEB', group: 'Background', usage: 'Chip backgrounds, code blocks' },
      { name: 'Dark Charcoal', token: 'color-text-primary', value: '#1A1A1A', group: 'Text', usage: 'Primary body text, headings' },
      { name: 'Mid Grey', token: 'color-text-secondary', value: '#555555', group: 'Text', usage: 'Secondary text' },
      { name: 'Grey', token: 'color-text-muted', value: '#888888', group: 'Text', usage: 'Placeholder, muted text' },
      { name: 'Silver', token: 'color-border', value: '#DDDDDD', group: 'Border', usage: 'Default borders' },
      { name: 'Light Silver', token: 'color-border-subtle', value: '#EEEEEE', group: 'Border', usage: 'Subtle borders, separators' },
      { name: 'Success Green', token: 'color-success', value: '#1E7E34', group: 'Semantic', usage: 'Success states' },
      { name: 'Warning Orange', token: 'color-warning', value: '#CC7A00', group: 'Semantic', usage: 'Warning states' },
      { name: 'Error Red', token: 'color-danger', value: '#CC0000', group: 'Semantic', usage: 'Error states' },
    ],
    semantic: BRAND_TOKENS.ie.color.semantic,
  },
};

export function getTokens(brandId) {
  return BRAND_TOKENS[brandId] || BRAND_TOKENS.ie;
}
