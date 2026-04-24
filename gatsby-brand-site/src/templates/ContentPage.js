import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Tabs from '../components/ui/Tabs';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';

const BRAND_VOICE = {
  ie:     { adjectives: ['Professional', 'Clear', 'Inclusive', 'Forward-thinking'], tone: 'confident yet approachable' },
  lexus:  { adjectives: ['Refined', 'Precise', 'Understated', 'Authoritative'], tone: 'sophisticated and considered' },
  toyota: { adjectives: ['Bold', 'Dynamic', 'Optimistic', 'Energetic'], tone: 'direct and spirited' },
};

const PAGE_CONTENT = {
  'tone-of-voice': {
    title: 'Tone of Voice',
    intro: "Our tone of voice defines how we communicate — it's as important as what we say.",
    body: ({ brand }) => {
      const voice = BRAND_VOICE[brand] || BRAND_VOICE.ie;
      return (
        <div className="prose">
          <h2>Our voice</h2>
          <p>The {getBrand(brand).name} voice is {voice.tone}. It builds trust, communicates clearly, and reflects the brand's values at every touchpoint.</p>
          <h3>Voice characteristics</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            {voice.adjectives.map((adj) => (
              <div key={adj} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)' }}>
                <div style={{ fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)', color: 'var(--color-primary)', marginBottom: 'var(--space-2)', fontFamily: 'var(--font-display)' }}>{adj}</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>Core voice characteristic</div>
              </div>
            ))}
          </div>
          <h3>Do and don't</h3>
          <table>
            <thead><tr><th>Do</th><th>Don't</th></tr></thead>
            <tbody>
              {[
                ['Use active voice', 'Use passive voice unnecessarily'],
                ['Be specific and precise', 'Use vague or filler language'],
                ['Write for your audience', 'Use jargon or insider language'],
                ['Keep sentences short', 'Write run-on sentences'],
              ].map(([d, dn]) => (
                <tr key={d}><td>✓ {d}</td><td>✗ {dn}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  'writing-guidelines': {
    title: 'Writing Guidelines',
    intro: 'Practical rules for writing clear, consistent, and accessible content.',
    body: ({ brand }) => (
      <div className="prose">
        <h2>Core principles</h2>
        <h3>Clarity first</h3>
        <p>If a sentence can be misunderstood, it will be. Write to eliminate ambiguity. Use the simplest word that doesn't sacrifice accuracy.</p>
        <h3>Sentence structure</h3>
        <ul>
          <li>Average sentence length: 15–20 words</li>
          <li>Prefer Subject + Verb + Object order</li>
          <li>Use one idea per sentence</li>
          <li>Start paragraphs with the key information</li>
        </ul>
        <h3>Capitalisation</h3>
        <ul>
          <li>Use sentence case for headings and labels (not Title Case)</li>
          <li>Proper nouns are always capitalised</li>
          <li>Never use ALL CAPS for emphasis — use bold instead</li>
        </ul>
        <h3>Numbers</h3>
        <ul>
          <li>Spell out one to nine; use numerals for 10 and above</li>
          <li>Always use numerals for measurements, prices, and statistics</li>
          <li>Use commas in numbers over 999 (e.g., 1,000)</li>
        </ul>
      </div>
    ),
  },
  'microcopy': {
    title: 'Microcopy',
    intro: 'Small text with big impact — button labels, form hints, placeholders, and UI strings.',
    body: () => (
      <div className="prose">
        <h2>What is microcopy?</h2>
        <p>Microcopy is the small text within a UI that guides users through tasks — button labels, placeholder text, error messages, tooltips, and empty states.</p>
        <h3>Button labels</h3>
        <ul>
          <li>Use action verbs: "Save changes", not "OK" or "Submit"</li>
          <li>Be specific: "Delete account", not "Delete"</li>
          <li>Avoid "Click here" — describe the action or destination</li>
        </ul>
        <h3>Placeholder text</h3>
        <ul>
          <li>Use as an example, not a label — always provide a visible label</li>
          <li>Don't use placeholder to give instructions — use hint text instead</li>
          <li>Keep it short: "e.g. jane@example.com"</li>
        </ul>
        <h3>Empty states</h3>
        <p>Empty states are opportunities to guide users. Include: what's empty, why it's empty, and what to do about it.</p>
        <table>
          <thead><tr><th>Context</th><th>Good example</th></tr></thead>
          <tbody>
            {[
              ['No search results', '"No results for \\"keyword\\". Try a different search term."'],
              ['Empty list', '"No items yet. Add your first item to get started."'],
              ['Error state', '"Something went wrong. Try again or contact support."'],
            ].map(([ctx, eg]) => (
              <tr key={ctx}><td>{ctx}</td><td>{eg}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  'inclusive-language': {
    title: 'Inclusive Language',
    intro: 'Language shapes experience. Use words that include everyone.',
    body: () => (
      <div className="prose">
        <h2>Principles of inclusive language</h2>
        <p>Inclusive language respects all people by acknowledging diversity, conveying respect, and avoiding discriminatory language.</p>
        <h3>General guidelines</h3>
        <ul>
          <li>Use gender-neutral language: "they" instead of "he/she"</li>
          <li>Avoid idioms and metaphors that may not translate across cultures</li>
          <li>Don't assume ability, age, or technical proficiency</li>
          <li>Refer to users as "people" or "users", not "users" or "customers" (unless accurate)</li>
        </ul>
        <h3>Avoid</h3>
        <table>
          <thead><tr><th>Avoid</th><th>Use instead</th></tr></thead>
          <tbody>
            {[
              ['Master / Slave', 'Primary / Secondary'],
              ['Whitelist / Blacklist', 'Allowlist / Blocklist'],
              ['Man hours', 'Person hours'],
              ['Dummy data', 'Sample data, placeholder data'],
              ['Sanity check', 'Validity check, confidence check'],
            ].map(([a, u]) => (
              <tr key={a}><td>{a}</td><td>{u}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
};

function getContent(pageId) {
  return PAGE_CONTENT[pageId] || {
    title: pageId.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' '),
    intro: 'Content guidance for this section.',
    body: () => (
      <div className="prose">
        <h2>Coming soon</h2>
        <p>This content section is being developed.</p>
      </div>
    ),
  };
}

export default function ContentPage({ pageContext, location }) {
  const { brand, pageId, pageLabel } = pageContext;
  const { switchBrand } = useBrand();

  useEffect(() => { switchBrand(brand); }, [brand]);

  const brandData = getBrand(brand);
  const path = location?.pathname || `/${brand}/content/${pageId}/`;
  const content = getContent(pageId);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: brandData.name, path: `/${brand}/` },
    { label: 'Content', path: `/${brand}/content/tone-of-voice/` },
    { label: content.title },
  ];

  const tabs = [
    {
      id: 'design',
      label: 'Guidelines',
      content: typeof content.body === 'function' ? content.body({ brand }) : content.body,
    },
    {
      id: 'examples',
      label: 'Examples',
      content: (
        <div className="prose">
          <h2>Real-world examples</h2>
          <p>Examples applying these guidelines to real {brandData.name} UI copy.</p>
          <div className="callout">Examples for {content.title.toLowerCase()} are being added. Check back soon.</div>
        </div>
      ),
    },
  ];

  return (
    <BrandLayout brand={brand} activePath={path} title={`${content.title} — Content`}>
      <Breadcrumbs items={breadcrumbs} />
      <div style={{ marginBottom: 'var(--space-2)' }}>
        <span className="tag">Content</span>
      </div>
      <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-extrabold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-display)' }}>
        {content.title}
      </h1>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
        {content.intro}
      </p>
      <Tabs tabs={tabs} defaultTab="design" />
    </BrandLayout>
  );
}
