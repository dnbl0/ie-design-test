const path = require('path');

const BRANDS = ['ie', 'lexus', 'toyota'];

const GETTING_STARTED_PAGES = [
  { id: 'overview', label: 'Overview' },
  { id: 'design', label: 'Design' },
  { id: 'code', label: 'Code' },
  { id: 'tokens', label: 'Design Tokens' },
  { id: 'adoption', label: 'Adoption Levels' },
];

const FOUNDATION_PAGES = [
  { id: 'colour', label: 'Colour' },
  { id: 'typography', label: 'Typography' },
  { id: 'design-tokens', label: 'Design Tokens' },
  { id: 'iconography', label: 'Iconography' },
  { id: 'grid-layout', label: 'Grid & Layout' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'breakpoints', label: 'Breakpoints' },
  { id: 'motion', label: 'Motion & Elevation' },
  { id: 'shadows', label: 'Shadows' },
];

const COMPONENT_PAGES = [
  { id: 'button', label: 'Button' },
  { id: 'input', label: 'Input' },
  { id: 'select', label: 'Select' },
  { id: 'table', label: 'Table' },
  { id: 'modal', label: 'Modal' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'radio', label: 'Radio' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'accordion', label: 'Accordion' },
  { id: 'alert', label: 'Alert' },
  { id: 'badge', label: 'Badge' },
  { id: 'pagination', label: 'Pagination' },
];

const PATTERN_PAGES = [
  { id: 'forms', label: 'Forms' },
  { id: 'data-tables', label: 'Data Tables' },
  { id: 'navigation-patterns', label: 'Navigation Patterns' },
  { id: 'search', label: 'Search' },
  { id: 'notifications', label: 'Notifications' },
];

const CONTENT_PAGES = [
  { id: 'tone-of-voice', label: 'Tone of Voice' },
  { id: 'writing-guidelines', label: 'Writing Guidelines' },
  { id: 'microcopy', label: 'Microcopy' },
  { id: 'labels-instructions', label: 'Labels & Instructions' },
  { id: 'error-messaging', label: 'Error Messaging' },
  { id: 'inclusive-language', label: 'Inclusive Language' },
];

const ACCESSIBILITY_PAGES = [
  { id: 'accessible-by-design', label: 'Accessible by Design' },
  { id: 'wcag', label: 'WCAG Compliance' },
  { id: 'colour-contrast', label: 'Colour Contrast' },
  { id: 'keyboard-navigation', label: 'Keyboard Navigation' },
  { id: 'screen-reader', label: 'Screen Reader Support' },
  { id: 'accessible-forms', label: 'Accessible Forms' },
  { id: 'accessible-components', label: 'Accessible Components' },
  { id: 'testing', label: 'Accessibility Testing' },
];

const GOVERNANCE_PAGES = [
  { id: 'contribution', label: 'Contribution Guidelines' },
  { id: 'design-review', label: 'Design Review Process' },
  { id: 'component-lifecycle', label: 'Component Lifecycle' },
  { id: 'versioning', label: 'Versioning & Release Notes' },
  { id: 'support', label: 'Support / Contact' },
];

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  BRANDS.forEach((brand) => {
    // Brand home
    createPage({
      path: `/${brand}/`,
      component: path.resolve('./src/templates/BrandHome.js'),
      context: { brand },
    });

    // Getting Started
    GETTING_STARTED_PAGES.forEach(({ id, label }) => {
      createPage({
        path: `/${brand}/getting-started/${id}/`,
        component: path.resolve('./src/templates/GettingStartedPage.js'),
        context: { brand, pageId: id, pageLabel: label },
      });
    });

    // Foundations
    FOUNDATION_PAGES.forEach(({ id, label }) => {
      createPage({
        path: `/${brand}/foundations/${id}/`,
        component: path.resolve('./src/templates/FoundationPage.js'),
        context: { brand, pageId: id, pageLabel: label },
      });
    });

    // Components
    COMPONENT_PAGES.forEach(({ id, label }) => {
      createPage({
        path: `/${brand}/components/${id}/`,
        component: path.resolve('./src/templates/ComponentPage.js'),
        context: { brand, componentId: id, componentLabel: label },
      });
    });

    // Patterns
    PATTERN_PAGES.forEach(({ id, label }) => {
      createPage({
        path: `/${brand}/patterns/${id}/`,
        component: path.resolve('./src/templates/PatternPage.js'),
        context: { brand, pageId: id, pageLabel: label },
      });
    });

    // Layouts
    createPage({
      path: `/${brand}/layouts/`,
      component: path.resolve('./src/templates/LayoutsPage.js'),
      context: { brand },
    });

    // Content
    CONTENT_PAGES.forEach(({ id, label }) => {
      createPage({
        path: `/${brand}/content/${id}/`,
        component: path.resolve('./src/templates/ContentPage.js'),
        context: { brand, pageId: id, pageLabel: label },
      });
    });

    // Accessibility
    ACCESSIBILITY_PAGES.forEach(({ id, label }) => {
      createPage({
        path: `/${brand}/accessibility/${id}/`,
        component: path.resolve('./src/templates/AccessibilityPage.js'),
        context: { brand, pageId: id, pageLabel: label },
      });
    });

    // Tools & Resources
    createPage({
      path: `/${brand}/tools-resources/`,
      component: path.resolve('./src/templates/ToolsPage.js'),
      context: { brand },
    });

    // Governance
    GOVERNANCE_PAGES.forEach(({ id, label }) => {
      createPage({
        path: `/${brand}/governance/${id}/`,
        component: path.resolve('./src/templates/GovernancePage.js'),
        context: { brand, pageId: id, pageLabel: label },
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@templates': path.resolve(__dirname, 'src/templates'),
      },
    },
  });
};
