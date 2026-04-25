export const BRANDS = {
  ie: {
    id: 'ie',
    name: 'i.e.,',
    fullName: 'i.e., Design',
    tagline: 'Innovation Everyday',
    description: 'The i.e., design system — clear, inclusive, and forward-thinking.',
    primaryColor: '#003087',
    secondaryColor: '#0070CC',
    accentColor: '#00B4D8',
    logoText: 'i.e.,',
    logoMark: 'ie-logo',
    storybook: 'https://storybook.ie-design.example.com',
    github: 'https://github.com/ie-design/design-system',
    figma: 'https://figma.com/ie-design',
  },
};

export const BRAND_LIST = Object.values(BRANDS);

export function getBrand(id) {
  return BRANDS[id] || BRANDS.ie;
}
