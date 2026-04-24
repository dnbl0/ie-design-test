export const COMPONENT_DATA = {
  button: {
    id: 'button',
    label: 'Button',
    status: 'stable',
    version: '3.2.0',
    description: 'Buttons trigger actions or navigation. They communicate what will happen when interacted with and are essential to guiding user journeys.',
    designGuidelines: `
Buttons have a clear visual hierarchy: primary for the most important action on a page, secondary for supporting actions, and tertiary/ghost for low-emphasis actions.

**When to use**
- To trigger an action (submit a form, delete an item, open a dialog)
- To navigate to a new page (styled as a link-button)
- To confirm or cancel an operation

**When not to use**
- As a replacement for links in body text
- When there are more than 3 primary actions visible at once
- On a page where no action is needed
    `,
    accessibilityNotes: `
- Use semantic \`<button>\` elements (not \`<div>\` or \`<a>\`)
- Every button must have a discernible text label — use \`aria-label\` for icon-only buttons
- Disabled buttons still receive focus so users understand the option exists
- Loading states should announce progress via \`aria-live\`
- Touch targets must be at least 44×44px
    `,
    props: [
      { name: 'look', type: "'primary' | 'secondary' | 'tertiary' | 'link' | 'danger'", default: "'primary'", description: 'Visual style variant' },
      { name: 'size', type: "'small' | 'medium' | 'large' | 'xlarge'", default: "'medium'", description: 'Button size' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button interaction' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows loading spinner, sets aria-busy' },
      { name: 'iconBefore', type: 'ReactNode', default: 'undefined', description: 'Icon placed before label' },
      { name: 'iconAfter', type: 'ReactNode', default: 'undefined', description: 'Icon placed after label' },
      { name: 'block', type: 'boolean', default: 'false', description: 'Full-width block button' },
      { name: 'href', type: 'string', default: 'undefined', description: 'Renders as an anchor element' },
      { name: 'onClick', type: 'function', default: 'undefined', description: 'Click handler' },
    ],
    storyIds: {
      ie: 'components-button--primary',
      lexus: 'components-button--primary',
      toyota: 'components-button--primary',
    },
  },
  input: {
    id: 'input',
    label: 'Input',
    status: 'stable',
    version: '3.1.0',
    description: 'Text inputs allow users to enter freeform data. They are the most common form element and must be clearly labelled and accessible.',
    designGuidelines: `
Inputs should always have a visible label above the field — never use placeholder text as the sole label.

**When to use**
- Short text responses (name, email, phone number)
- Numeric entries (quantities, ages)
- Passwords (with appropriate input type)

**Validation**
- Show validation inline, below the input
- Use red border and error icon for invalid states
- Use green checkmark for success states on critical fields
    `,
    accessibilityNotes: `
- Always pair inputs with a visible \`<label>\` element using \`for\`/\`id\`
- Provide \`aria-describedby\` to link error messages and hint text
- Use appropriate \`type\` attribute (email, tel, number, password)
- Never rely solely on colour to communicate validation state
    `,
    props: [
      { name: 'label', type: 'string', default: 'required', description: 'Visible label text' },
      { name: 'type', type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'", default: "'text'", description: 'HTML input type' },
      { name: 'placeholder', type: 'string', default: "''", description: 'Placeholder text (supplemental only)' },
      { name: 'invalid', type: 'boolean', default: 'false', description: 'Marks field as invalid' },
      { name: 'errorMessage', type: 'string', default: 'undefined', description: 'Error message shown below input' },
      { name: 'hintMessage', type: 'string', default: 'undefined', description: 'Helper hint text shown below label' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Marks field as required' },
      { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", description: 'Input size' },
    ],
    storyIds: {
      ie: 'components-input--default',
      lexus: 'components-input--default',
      toyota: 'components-input--default',
    },
  },
  modal: {
    id: 'modal',
    label: 'Modal',
    status: 'stable',
    version: '2.5.0',
    description: 'Modals interrupt the current flow to focus user attention on critical information or actions. Use sparingly.',
    designGuidelines: `
Modals should be used only when the user must address something before continuing.

**When to use**
- Confirmation dialogs (delete, submit)
- Short forms that don't require navigation
- Displaying media or complex information in context

**When not to use**
- For information that can be shown inline
- For multi-step workflows (use a dedicated page)
- On mobile where full-screen flows are preferred
    `,
    accessibilityNotes: `
- Focus must move into the modal when opened
- Focus must be trapped within the modal while open
- Pressing Escape closes the modal
- The triggering element must regain focus on close
- Use \`role="dialog"\` and \`aria-modal="true"\`
- Provide an accessible title via \`aria-labelledby\`
    `,
    props: [
      { name: 'isOpen', type: 'boolean', default: 'required', description: 'Controls modal visibility' },
      { name: 'onClose', type: 'function', default: 'required', description: 'Callback when modal should close' },
      { name: 'title', type: 'string', default: 'required', description: 'Modal heading (used for aria-labelledby)' },
      { name: 'size', type: "'small' | 'medium' | 'large' | 'fullscreen'", default: "'medium'", description: 'Modal width' },
      { name: 'children', type: 'ReactNode', default: 'required', description: 'Modal body content' },
      { name: 'footer', type: 'ReactNode', default: 'undefined', description: 'Footer content (action buttons)' },
    ],
    storyIds: {
      ie: 'components-modal--default',
      lexus: 'components-modal--default',
      toyota: 'components-modal--default',
    },
  },
};

export function getComponent(id) {
  return COMPONENT_DATA[id];
}
