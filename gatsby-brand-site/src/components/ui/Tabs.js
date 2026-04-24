import React, { useState } from 'react';
import * as styles from './Tabs.module.css';

export default function Tabs({ tabs = [], defaultTab }) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  const activeTab = tabs.find((t) => t.id === active) || tabs[0];

  return (
    <div className={styles.tabs}>
      <div role="tablist" className={styles.tabList} aria-label="Page sections">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={tab.id === active}
            aria-controls={`panel-${tab.id}`}
            className={`${styles.tab} ${tab.id === active ? styles.active : ''}`}
            onClick={() => setActive(tab.id)}
            type="button"
          >
            {tab.label}
            {tab.badge != null && (
              <span className={styles.badge}>{tab.badge}</span>
            )}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className={styles.panel}
          hidden={tab.id !== active}
        >
          {tab.id === active && tab.content}
        </div>
      ))}
    </div>
  );
}
