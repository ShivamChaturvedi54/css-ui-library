import React from 'react';
import PreviewCard from './PreviewCard';

const ComponentDocs5 = () => {
  const navbarHtml = `<nav class="ui-navbar-preview">\n  <div class="logo">STELLAR</div>\n  <button class="ui-btn-primary">Sign Up</button>\n</nav>`;
  const navbarCss = `.ui-navbar-preview { display: flex; align-items: center; justify-content: space-between; border: 1px solid #27272a; padding: 12px 20px; background: #09090b; borderRadius: 12px; }`;

  const heroHtml = `<div class="ui-hero-preview">\n  <h1>Modern Design</h1>\n</div>`;
  const heroCss = `.ui-hero-preview { text-align: center; padding: 40px; border: 1px solid #27272a; border-radius: 16px; }`;

  const pricingHtml = `<div class="ui-pricing-card">\n  <small>PRO PLAN</small>\n  <h2>$29<span>/mo</span></h2>\n</div>`;
  const pricingCss = `.ui-pricing-card { background: #09090b; border: 1px solid #27272a; border-radius: 16px; padding: 24px; }`;

  return (
    <>
      <h2 id="build-blocks" className="section-title">Build Blocks & Layout</h2>
      
      <PreviewCard 
        title="Modern Navbar" 
        codeString={navbarHtml} 
        cssString={navbarCss}
        component={
          <div style={{ padding: '10px', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #27272a', padding: '12px 20px', background: '#09090b', borderRadius: '12px' }}>
              <div style={{ fontWeight: 800, color: '#fff', fontSize: '1rem' }}>STELLAR</div>
              <div style={{ display: 'flex', gap: '20px', fontSize: '0.8rem', color: '#a1a1aa' }}>
                <span>Product</span>
                <span>Pricing</span>
              </div>
              <button style={{ background: '#fff', color: '#000', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>Join</button>
            </div>
          </div>
        }
      />

      <PreviewCard 
        title="Hero Section" 
        codeString={heroHtml} 
        cssString={heroCss}
        component={
          <div style={{ padding: '10px', width: '100%' }}>
            <div style={{ textAlign: 'center', padding: '40px 20px', background: '#000', border: '1px solid #27272a', borderRadius: '16px' }}>
              <h1 style={{ margin: '0 0 12px 0', fontSize: '1.5rem', color: '#fff' }}>Elite UI Toolkit</h1>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', marginBottom: '24px' }}>Build stunning interfaces in minutes.</p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button style={{ background: '#fff', color: '#000', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 600 }}>Get Started</button>
                <button style={{ background: 'transparent', border: '1px solid #27272a', color: '#fff', padding: '8px 16px', borderRadius: '8px' }}>Docs</button>
              </div>
            </div>
          </div>
        }
      />

      <PreviewCard 
        title="Pricing Card" 
        codeString={pricingHtml} 
        cssString={pricingCss}
        component={
          <div style={{ background: '#09090b', border: '1px solid #27272a', border-radius: '16px', padding: '24px', width: '220px' }}>
            <small style={{ color: '#71717a', fontWeight: 600 }}>PRO PLAN</small>
            <h2 style={{ margin: '8px 0 20px 0', fontSize: '1.75rem', color: '#fff' }}>$29<span style={{ fontSize: '0.9rem', color: '#71717a' }}>/mo</span></h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', fontSize: '0.8rem', color: '#a1a1aa', lineHeight: 2 }}>
              <li>✓ All Components</li>
              <li>✓ Pro Support</li>
            </ul>
            <button style={{ width: '100%', padding: '10px', background: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600 }}>Subscribe</button>
          </div>
        }
      />
    </>
  );
};

export default ComponentDocs5;
