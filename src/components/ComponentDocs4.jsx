import React, { useState } from 'react';
import PreviewCard from './PreviewCard';

const ComponentDocs4 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  // 1. Glass Card
  const glassCardHtml = `<div class="ui-glass-card">\n  <h3>Glassmorphism</h3>\n  <p>Frosted glass effect with sharp borders.</p>\n  <button class="ui-btn-glass">Explore</button>\n</div>`;
  const glassCardCss = `.ui-glass-card {\n  background: rgba(255, 255, 255, 0.03);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  padding: 24px;\n  color: #fff;\n  width: 240px;\n}\n.ui-btn-glass {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #fff;\n  padding: 8px 16px;\n  border-radius: 8px;\n  cursor: pointer;\n}`;

  return (
    <>
      <h2 id="navigation-utils" className="section-title">Navigation & Utilities</h2>
      
      <PreviewCard 
        title="Glassmorphism Card" 
        codeString={glassCardHtml} 
        cssString={glassCardCss}
        component={
          <div style={{ background: 'linear-gradient(45deg, #1e3a8a, #4c1d95)', padding: '30px', borderRadius: '12px' }}>
            <div className="ui-glass-card" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '20px', width: '200px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: '#fff' }}>Glassy</h3>
              <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: '0 0 16px 0', color: '#fff' }}>Frosted glass UI.</p>
              <button style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#fff', padding: '6px 12px', borderRadius: '6px' }}>Explore</button>
            </div>
          </div>
        }
      />

      <PreviewCard 
        title="Professional Tabs" 
        codeString={`<div class="ui-tabs">\n  <div class="ui-tab active">Overview</div>\n  <div class="ui-tab">Settings</div>\n</div>`} 
        cssString={`.ui-tabs { display: flex; gap: 4px; background: #111; padding: 4px; border-radius: 8px; }\n.ui-tab { padding: 6px 12px; font-size: 0.85rem; color: #71717a; cursor: pointer; }\n.ui-tab.active { background: #27272a; color: #fff; }`}
        component={
          <div style={{ display: 'flex', gap: '4px', background: '#111', padding: '4px', borderRadius: '8px', border: '1px solid #27272a' }}>
            {['Overview', 'Settings', 'Security'].map((tab, i) => (
              <div 
                key={tab}
                className={`ui-tab ${activeTab === i ? 'active' : ''}`}
                style={{
                  padding: '6px 12px', fontSize: '0.85rem', fontWeight: 500,
                  color: activeTab === i ? '#fff' : '#71717a',
                  background: activeTab === i ? '#27272a' : 'transparent',
                  cursor: 'pointer', borderRadius: '6px'
                }}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </div>
            ))}
          </div>
        }
      />

      <PreviewCard 
        title="Modern Pagination" 
        codeString={`<div class="ui-pagination">...</div>`} 
        cssString={`.ui-page-btn { width: 32px; height: 32px; border: 1px solid #27272a; }`}
        component={
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ width: '32px', height: '32px', background: '#000', border: '1px solid #27272a', color: '#fff', borderRadius: '6px' }}>&lt;</button>
            <button style={{ width: '32px', height: '32px', background: '#fff', border: '1px solid #fff', color: '#000', borderRadius: '6px' }}>1</button>
            <button style={{ width: '32px', height: '32px', background: '#000', border: '1px solid #27272a', color: '#fff', borderRadius: '6px' }}>2</button>
            <button style={{ width: '32px', height: '32px', background: '#000', border: '1px solid #27272a', color: '#fff', borderRadius: '6px' }}>&gt;</button>
          </div>
        }
      />

      <PreviewCard 
        title="Accordion" 
        codeString={`<div class="ui-accordion">...</div>`} 
        cssString={`.ui-accordion-header { cursor: pointer; }`}
        component={
          <div style={{ width: '240px', border: '1px solid #27272a', borderRadius: '8px', overflow: 'hidden', background: '#09090b' }}>
            <div 
              style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', color: '#fff' }}
              onClick={() => setAccordionOpen(!accordionOpen)}
            >
              <span>How it works?</span>
              <span style={{ transform: accordionOpen ? 'rotate(45deg)' : 'none', transition: '0.2s' }}>+</span>
            </div>
            {accordionOpen && (
              <div style={{ padding: '12px 16px', fontSize: '0.85rem', color: '#a1a1aa', borderTop: '1px solid #27272a' }}>
                Our platform uses advanced algorithms to process data securely.
              </div>
            )}
          </div>
        }
      />
    </>
  );
};

export default ComponentDocs4;
