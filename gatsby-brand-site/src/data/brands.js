export const BRANDS = {
  ie: {
    id: 'ie',
    name: 'IE',
    fullName: 'IE Design',
    tagline: 'Innovation Everyday',
    description: 'The IE corporate design system — clear, inclusive, and forward-thinking.',
    primaryColor: '#003087',
    secondaryColor: '#0070CC',
    accentColor: '#00B4D8',
    logoText: 'IE',
    logoMark: 'ie-logo',
    storybook: 'https://storybook.ie-design.example.com',
    github: 'https://github.com/ie-design/design-system',
    figma: 'https://figma.com/ie-design',
  },
  lexus: {
    id: 'lexus',
    name: 'Lexus',
    fullName: 'Lexus Design',
    tagline: 'Experience Amazing',
    description: 'The Lexus design system — refined, premium, and meticulously crafted.',
    primaryColor: '#0A0A0A',
    secondaryColor: '#BF8B45',
    accentColor: '#D4A853',
    logoText: 'L',
    logoMark: 'lexus-logo',
    storybook: 'https://storybook.lexus.ie-design.example.com',
    github: 'https://github.com/ie-design/lexus-design-system',
    figma: 'https://figma.com/lexus-design',
  },
  toyota: {
    id: 'toyota',
    name: 'Toyota',
    fullName: 'Toyota Design',
    tagline: 'Let\'s Go Places',
    description: 'The Toyota design system — bold, dynamic, and built for everyone.',
    primaryColor: '#EB0A1E',
    secondaryColor: '#2C2C2C',
    accentColor: '#FF4D4D',
    logoText: 'T',
    logoMark: 'toyota-logo',
    storybook: 'https://storybook.toyota.ie-design.example.com',
    github: 'https://github.com/ie-design/toyota-design-system',
    figma: 'https://figma.com/toyota-design',
  },
};

export const BRAND_LIST = Object.values(BRANDS);

export function getBrand(id) {
  return BRANDS[id] || BRANDS.ie;
}
