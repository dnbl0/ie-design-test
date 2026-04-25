import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Tabs from '../components/ui/Tabs';
import AnimateIn from '../components/ui/AnimateIn';
import WritingExampleBlock from '../components/ui/WritingExampleBlock';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';

const BRAND_VOICE = {
  ie: { adjectives: ['Professional', 'Clear', 'Inclusive', 'Forward-thinking'], tone: 'confident yet approachable' },
};

const VOICE_ICONS = {
  Professional: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 7V5a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 12v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Clear: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Inclusive: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="15" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 20c0-3.314 2.686-6 6-6h6c3.314 0 6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'Forward-thinking': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l2 5h5l-4 3 1.5 5L12 13l-4.5 3L9 11 5 8h5l2-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
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
          <p>The {getBrand(brand).name} voice is {voice.tone}. It builds trust, communicates clearly, and reflects the brand&apos;s values at every touchpoint.</p>
          <h3>Voice characteristics</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            {voice.adjectives.map((adj, i) => (
              <AnimateIn key={adj} variant="fadeUp" delay={i}>
                <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)', height: '100%' }}>
                  <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    {VOICE_ICONS[adj]}
                  </div>
                  <div style={{ fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)', fontFamily: 'var(--font-display)' }}>{adj}</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>Core voice characteristic</div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <h3>Do and don&apos;t</h3>
          <WritingExampleBlock
            rule="Active vs passive voice"
            doText="Update your password in account settings."
            dontText="Your password can be updated by going to the account settings page."
          />
          <WritingExampleBlock
            rule="Specific vs vague language"
            doText="Save changes — your profile will update immediately."
            dontText="Click OK to proceed with the relevant modifications to your information."
          />
          <WritingExampleBlock
            rule="Audience-first writing"
            doText="You'll get a confirmation email within 5 minutes."
            dontText="The system will dispatch an automated notification to your registered email address upon completion of the transaction."
          />
          <WritingExampleBlock
            rule="Sentence length"
            doText="Sign in to continue. It only takes a moment."
            dontText="In order to be able to continue with this process, you will first need to sign in to your account, which should only take a brief moment of your time."
          />
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
        <p>If a sentence can be misunderstood, it will be. Write to eliminate ambiguity. Use the simplest word that doesn&apos;t sacrifice accuracy.</p>
        <WritingExampleBlock
          rule="Clarity — simple word choice"
          doText="Use the search bar to find what you need."
          dontText="Utilise the search functionality to facilitate the location of the desired content."
        />

        <h3>Sentence structure</h3>
        <AnimateIn variant="fadeIn">
          <ul>
            <li>Average sentence length: 15–20 words</li>
            <li>Prefer Subject + Verb + Object order</li>
            <li>Use one idea per sentence</li>
            <li>Start paragraphs with the key information</li>
          </ul>
        </AnimateIn>

        <h3>Capitalisation</h3>
        <WritingExampleBlock
          rule="Capitalisation — sentence case for headings"
          doText="Add a new team member"
          dontText="Add A New Team Member"
        />
        <WritingExampleBlock
          rule="Emphasis — bold over caps"
          doText="Note: this action cannot be undone."
          dontText="NOTE: THIS ACTION CANNOT BE UNDONE."
        />

        <h3>Numbers</h3>
        <AnimateIn variant="fadeIn">
          <ul>
            <li>Spell out one to nine; use numerals for 10 and above</li>
            <li>Always use numerals for measurements, prices, and statistics</li>
            <li>Use commas in numbers over 999 (e.g., 1,000)</li>
          </ul>
        </AnimateIn>
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
        <WritingExampleBlock
          rule="Button labels — specific action verbs"
          doText='"Save changes"  |  "Delete account"  |  "Download report"'
          dontText='"OK"  |  "Submit"  |  "Click here"'
        />

        <h3>Placeholder text</h3>
        <AnimateIn variant="fadeUp">
          <div style={{ margin: 'var(--space-5) 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
            <div>
              <p style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <svg viewBox="0 0 14 14" fill="none" width="12" height="12" aria-hidden="true"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                Don&apos;t
              </p>
              <div style={{ background: 'var(--color-bg)', border: '1.5px solid #FECACA', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)' }}>
                <input
                  readOnly
                  placeholder="Enter your email address here to register"
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-base)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', background: 'var(--color-bg)', boxSizing: 'border-box' }}
                  aria-label="Bad placeholder example"
                />
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)', marginBottom: 0 }}>No visible label, over-long placeholder</p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <svg viewBox="0 0 14 14" fill="none" width="12" height="12" aria-hidden="true"><path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Do
              </p>
              <div style={{ background: 'var(--color-bg)', border: '1.5px solid #BBF7D0', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)' }}>
                <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)', marginBottom: 4 }}>Email address</label>
                <input
                  readOnly
                  placeholder="e.g. jane@example.com"
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-base)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', background: 'var(--color-bg)', boxSizing: 'border-box' }}
                  aria-label="Good placeholder example"
                />
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)', marginBottom: 0 }}>Visible label + short example placeholder</p>
              </div>
            </div>
          </div>
        </AnimateIn>

        <h3>Empty states</h3>
        <p>Empty states are opportunities to guide users. Include: what&apos;s empty, why it&apos;s empty, and what to do about it.</p>
        <WritingExampleBlock
          rule="No search results"
          doText='"No results for "keyword". Try a different search term or clear your filters."'
          dontText='"No results found."'
        />
        <WritingExampleBlock
          rule="Empty list"
          doText='"No items yet. Add your first item to get started."'
          dontText='"Nothing to display."'
        />
        <WritingExampleBlock
          rule="Error state"
          doText='"Something went wrong. Try again or contact support if this keeps happening."'
          dontText='"Error."'
        />
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
        <AnimateIn variant="fadeIn">
          <ul>
            <li>Use gender-neutral language: &ldquo;they&rdquo; instead of &ldquo;he/she&rdquo;</li>
            <li>Avoid idioms and metaphors that may not translate across cultures</li>
            <li>Don&apos;t assume ability, age, or technical proficiency</li>
            <li>Refer to users as &ldquo;people&rdquo; or &ldquo;users&rdquo; (unless &ldquo;customers&rdquo; is accurate)</li>
          </ul>
        </AnimateIn>

        <h3>Terminology</h3>
        <WritingExampleBlock
          rule="Infrastructure terms"
          doText="Primary / Secondary"
          dontText="Master / Slave"
        />
        <WritingExampleBlock
          rule="Allow/block lists"
          doText="Allowlist / Blocklist"
          dontText="Whitelist / Blacklist"
        />
        <WritingExampleBlock
          rule="Effort estimates"
          doText="Person hours / Staff hours"
          dontText="Man hours"
        />
        <WritingExampleBlock
          rule="Test data"
          doText="Sample data / Placeholder data"
          dontText="Dummy data"
        />
        <WritingExampleBlock
          rule="Validation checks"
          doText="Validity check / Confidence check"
          dontText="Sanity check"
        />
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
